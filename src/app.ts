import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

//import routes
import membershipRoutes from "./modules/membership/membership.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";
import usersRoutes from "./modules/users/users.routes.js";
import setupRoutes from "./modules/setup/setup.routes.js";
import eventsRoutes from "./modules/events/events.routes.js";
import registrationsRoutes from "./modules/registrations/registrations.routes.js";
import announcementsRoutes from "./modules/announcements/announcements.routes.js";
import galleryRoutes from "./modules/gallery/gallery.routes.js";
import notificationsRoutes from "./modules/notifications/notifications.routes.js";
import academicYearRoutes from "./modules/academicYear/academicYear.routes.js";

const app = express();

app.use(helmet());
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";

app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use("/api/membership", membershipRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/setup", setupRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/registrations", registrationsRoutes);
app.use("/api/announcements", announcementsRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/notifications", notificationsRoutes);
app.use("/api/academic-years", academicYearRoutes);

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "IEEE GU Platform API is running",
  });
});

export default app;
