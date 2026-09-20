import ExcelJS from "exceljs";
import fs from "node:fs/promises";
import path from "node:path";
import { prisma } from "../../config/prisma.js";
const storageDirectory = path.resolve(process.cwd(), "storage", "registrations");
const workbookPath = path.join(storageDirectory, "IEEE-GU-Event-Registrations.xlsx");
const baseHeaders = [
    "Registration ID",
    "Name",
    "Email",
    "Phone",
    "IEEE Membership Number",
    "Membership Status",
    "Department",
    "Course",
    "Year",
    "Roll Number",
    "Team Name",
    "Team Leader",
    "Registration Status",
    "Registered At",
    "Attended At",
];
function getSafeSheetName(name) {
    const cleaned = name
        .replace(/[\\/*?:[\]]/g, "")
        .trim();
    return (cleaned || "Event").slice(0, 31);
}
function getSafeTableName(name, eventId) {
    const cleaned = name
        .replace(/[^a-zA-Z0-9_]/g, "_")
        .replace(/^[^a-zA-Z_]+/, "")
        .trim();
    const idPart = eventId.replace(/[^a-zA-Z0-9_]/g, "_");
    return `Event_${cleaned || "Registrations"}_${idPart}`.slice(0, 200);
}
function getUniqueHeader(label, usedHeaders) {
    const base = label.trim() || "Field";
    if (!usedHeaders.has(base)) {
        usedHeaders.add(base);
        return base;
    }
    let counter = 2;
    while (usedHeaders.has(`${base} (${counter})`)) {
        counter += 1;
    }
    const uniqueHeader = `${base} (${counter})`;
    usedHeaders.add(uniqueHeader);
    return uniqueHeader;
}
function serializeExcelValue(value) {
    if (typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean") {
        return value;
    }
    if (value === null || value === undefined) {
        return "";
    }
    if (Array.isArray(value)) {
        return value
            .map((item) => serializeExcelValue(item))
            .join(", ");
    }
    if (typeof value === "object") {
        try {
            return JSON.stringify(value);
        }
        catch {
            return String(value);
        }
    }
    return String(value);
}
function formatWorksheet(worksheet, columnCount) {
    const headerRow = worksheet.getRow(1);
    headerRow.font = {
        bold: true,
        size: 11,
    };
    headerRow.alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true,
    };
    headerRow.height = 30;
    worksheet.views = [
        {
            state: "frozen",
            ySplit: 1,
        },
    ];
    if (worksheet.rowCount >= 1) {
        worksheet.autoFilter = {
            from: {
                row: 1,
                column: 1,
            },
            to: {
                row: 1,
                column: columnCount,
            },
        };
    }
    for (let index = 1; index <= columnCount; index += 1) {
        const column = worksheet.getColumn(index);
        column.width = index <= 15 ? 24 : 30;
    }
    worksheet.getColumn(4).numFmt = "@";
    worksheet.getColumn(5).numFmt = "@";
    worksheet.getColumn(10).numFmt = "@";
    const registeredAtColumn = 14;
    const attendedAtColumn = 15;
    worksheet.getColumn(registeredAtColumn).numFmt =
        "yyyy-mm-dd hh:mm:ss";
    worksheet.getColumn(attendedAtColumn).numFmt =
        "yyyy-mm-dd hh:mm:ss";
    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) {
            return;
        }
        row.alignment = {
            vertical: "middle",
            wrapText: true,
        };
        row.height = 22;
    });
}
function createEventTable(worksheet, headers, eventTitle, eventId) {
    if (worksheet.rowCount < 2) {
        return;
    }
    const lastRow = worksheet.rowCount;
    worksheet.addTable({
        name: getSafeTableName(eventTitle, eventId),
        ref: `A1:${worksheet.getColumn(headers.length).letter}${lastRow}`,
        headerRow: true,
        totalsRow: false,
        style: {
            theme: "TableStyleMedium2",
            showFirstColumn: false,
            showLastColumn: false,
            showRowStripes: true,
            showColumnStripes: false,
        },
        columns: headers.map((header) => ({
            name: header,
            filterButton: true,
        })),
        rows: [],
    });
}
async function ensureStorageDirectory() {
    await fs.mkdir(storageDirectory, {
        recursive: true,
    });
}
async function loadWorkbook() {
    await ensureStorageDirectory();
    const workbook = new ExcelJS.Workbook();
    try {
        await workbook.xlsx.readFile(workbookPath);
    }
    catch {
        workbook.creator =
            "IEEE Geeta University Student Branch";
        workbook.lastModifiedBy =
            "IEEE GU Student Branch Platform";
        workbook.created = new Date();
        workbook.modified = new Date();
    }
    return workbook;
}
function buildDynamicHeaders(registrations) {
    const headers = [...baseHeaders];
    const usedHeaders = new Set(headers);
    const fields = registrations
        .flatMap((registration) => registration.formResponse?.answers.map((answer) => answer.field) ?? [])
        .sort((a, b) => a.order - b.order);
    const seenFieldIds = new Set();
    for (const field of fields) {
        if (seenFieldIds.has(field.id)) {
            continue;
        }
        seenFieldIds.add(field.id);
        headers.push(getUniqueHeader(field.label, usedHeaders));
    }
    return headers;
}
function buildFieldHeaderMap(headers, registrations) {
    const map = new Map();
    const fieldAnswers = registrations.flatMap((registration) => registration.formResponse?.answers ?? []);
    const usedLabels = new Map();
    for (const answer of fieldAnswers) {
        const label = answer.field.label.trim() || "Field";
        const count = (usedLabels.get(label) ?? 0) + 1;
        usedLabels.set(label, count);
        const header = count === 1
            ? label
            : `${label} (${count})`;
        if (headers.includes(header) &&
            !map.has(answer.field.id)) {
            map.set(answer.field.id, header);
        }
    }
    return map;
}
function registrationToRow(registration, headers, fieldHeaderMap) {
    const row = new Array(headers.length).fill("");
    row[0] = registration.id;
    row[1] = registration.name;
    row[2] = registration.email;
    row[3] = registration.phone ?? "";
    row[4] =
        registration.user?.ieeeMembershipNumber ?? "";
    row[5] =
        registration.user?.memberProfile?.membershipStatus ??
            "";
    row[6] =
        registration.user?.memberProfile?.department ?? "";
    row[7] =
        registration.user?.memberProfile?.course ?? "";
    row[8] =
        registration.user?.memberProfile?.year ?? "";
    row[9] =
        registration.user?.memberProfile?.rollNumber ?? "";
    row[10] = registration.team?.name ?? "";
    row[11] = registration.isTeamLeader ? "Yes" : "No";
    row[12] = registration.registrationStatus;
    row[13] = registration.registeredAt;
    row[14] = registration.attendedAt ?? "";
    for (const answer of registration.formResponse
        ?.answers ?? []) {
        const header = fieldHeaderMap.get(answer.field.id);
        if (!header) {
            continue;
        }
        const columnIndex = headers.indexOf(header);
        if (columnIndex === -1) {
            continue;
        }
        row[columnIndex] = serializeExcelValue(answer.value);
    }
    return row;
}
export async function syncEventRegistrationsToExcel(eventId) {
    const event = await prisma.event.findUnique({
        where: {
            id: eventId,
        },
        select: {
            id: true,
            title: true,
        },
    });
    if (!event) {
        throw new Error("Event not found");
    }
    const registrations = await prisma.eventRegistration.findMany({
        where: {
            eventId,
        },
        include: {
            user: {
                select: {
                    ieeeMembershipNumber: true,
                    memberProfile: {
                        select: {
                            membershipStatus: true,
                            department: true,
                            course: true,
                            year: true,
                            rollNumber: true,
                        },
                    },
                },
            },
            team: {
                select: {
                    name: true,
                },
            },
            formResponse: {
                include: {
                    answers: {
                        include: {
                            field: {
                                select: {
                                    id: true,
                                    key: true,
                                    label: true,
                                    order: true,
                                },
                            },
                        },
                    },
                },
            },
        },
        orderBy: {
            registeredAt: "asc",
        },
    });
    const dynamicHeaders = buildDynamicHeaders(registrations);
    const fieldHeaderMap = buildFieldHeaderMap(dynamicHeaders, registrations);
    const workbook = await loadWorkbook();
    const sheetName = getSafeSheetName(event.title);
    const existingWorksheet = workbook.getWorksheet(sheetName);
    if (existingWorksheet) {
        workbook.removeWorksheet(existingWorksheet.id);
    }
    const worksheet = workbook.addWorksheet(sheetName);
    worksheet.addRow(dynamicHeaders);
    for (const registration of registrations) {
        worksheet.addRow(registrationToRow(registration, dynamicHeaders, fieldHeaderMap));
    }
    formatWorksheet(worksheet, dynamicHeaders.length);
    createEventTable(worksheet, dynamicHeaders, event.title, event.id);
    await workbook.xlsx.writeFile(workbookPath);
    return {
        eventId: event.id,
        eventTitle: event.title,
        filePath: workbookPath,
        registrationCount: registrations.length,
    };
}
//# sourceMappingURL=registrations.excel.js.map