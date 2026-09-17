import ExcelJS from "exceljs";
import fs from "node:fs/promises";
import path from "node:path";
import { prisma } from "../../config/prisma.js";

const storageDirectory = path.resolve(
  process.cwd(),
  "storage",
  "registrations",
);

const workbookPath = path.join(
  storageDirectory,
  "IEEE-GU-Event-Registrations.xlsx",
);

const headers = [
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
  "Registration Status",
  "Registered At",
  "Attended At",
];

function getSafeSheetName(name: string) {
  const cleaned = name
    .replace(/[\\/*?:[\]]/g, "")
    .trim();

  return (cleaned || "Event").slice(0, 31);
}

function getSafeTableName(name: string) {
  const cleaned = name
    .replace(/[^a-zA-Z0-9_]/g, "_")
    .replace(/^[^a-zA-Z_]+/, "")
    .trim();

  return `Event_${cleaned || "Registrations"}`.slice(
    0,
    200,
  );
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
  } catch {
    workbook.creator =
      "IEEE Geeta University Student Branch";

    workbook.lastModifiedBy =
      "IEEE GU Student Branch Platform";

    workbook.created = new Date();
    workbook.modified = new Date();
  }

  return workbook;
}

function formatWorksheet(
  worksheet: ExcelJS.Worksheet,
) {
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

  worksheet.autoFilter = {
    from: {
      row: 1,
      column: 1,
    },
    to: {
      row: 1,
      column: headers.length,
    },
  };

  const widths = [
    26,
    24,
    34,
    18,
    26,
    20,
    24,
    24,
    14,
    22,
    22,
    24,
    24,
  ];

  widths.forEach((width, index) => {
    worksheet.getColumn(index + 1).width = width;
  });

  worksheet.getColumn(4).numFmt = "@";
  worksheet.getColumn(5).numFmt = "@";
  worksheet.getColumn(10).numFmt = "@";
  worksheet.getColumn(12).numFmt =
    "yyyy-mm-dd hh:mm:ss";
  worksheet.getColumn(13).numFmt =
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

function registrationToRow(
  registration: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    registrationStatus: string;
    registeredAt: Date;
    attendedAt: Date | null;
    user: {
      ieeeMembershipNumber: string | null;
      memberProfile: {
        membershipStatus: string;
        department: string | null;
        course: string | null;
        year: string | null;
        rollNumber: string | null;
      } | null;
    } | null;
  },
) {
  return [
    registration.id,
    registration.name,
    registration.email,
    registration.phone ?? "",
    registration.user?.ieeeMembershipNumber ?? "",
    registration.user?.memberProfile?.membershipStatus ?? "",
    registration.user?.memberProfile?.department ?? "",
    registration.user?.memberProfile?.course ?? "",
    registration.user?.memberProfile?.year ?? "",
    registration.user?.memberProfile?.rollNumber ?? "",
    registration.registrationStatus,
    registration.registeredAt,
    registration.attendedAt ?? "",
  ];
}

function createEventTable(
  worksheet: ExcelJS.Worksheet,
  eventTitle: string,
) {
  const lastRow = Math.max(
    worksheet.rowCount,
    1,
  );

  const tableName = getSafeTableName(eventTitle);

  worksheet.addTable({
    name: tableName,
    ref: `A1:M${lastRow}`,
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

export async function syncEventRegistrationsToExcel(
  eventId: string,
) {
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

  const registrations =
    await prisma.eventRegistration.findMany({
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
      },
      orderBy: {
        registeredAt: "asc",
      },
    });

  const workbook = await loadWorkbook();

  const sheetName = getSafeSheetName(event.title);

  const existingWorksheet =
    workbook.getWorksheet(sheetName);

  if (existingWorksheet) {
    workbook.removeWorksheet(
      existingWorksheet.id,
    );
  }

  const worksheet =
    workbook.addWorksheet(sheetName);

  worksheet.addRow(headers);

  for (const registration of registrations) {
    worksheet.addRow(
      registrationToRow(registration),
    );
  }

  formatWorksheet(worksheet);

  if (registrations.length > 0) {
    const lastRow = worksheet.rowCount;

    worksheet.addTable({
      name: getSafeTableName(event.title),
      ref: `A1:M${lastRow}`,
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

  await workbook.xlsx.writeFile(workbookPath);

  return {
    eventId: event.id,
    eventTitle: event.title,
    filePath: workbookPath,
    registrationCount: registrations.length,
  };
}