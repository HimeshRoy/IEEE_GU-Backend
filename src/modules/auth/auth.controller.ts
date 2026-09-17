import type { Request, Response } from "express";
import { loginSchema, signupSchema } from "./auth.dto.js";
import { getCurrentUser, login, signup } from "./auth.service.js";

export async function signupUser(req: Request, res: Response) {
  try {
    const input = signupSchema.parse(req.body);

    const result = await signup(input);

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export async function loginUser(req: Request, res: Response) {
  try {
    const input = loginSchema.parse(req.body);

    const result = await login(input);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export async function getMe(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const user = await getCurrentUser(userId);

    return res.status(200).json({
      success: true,
      message: "Current user retrieved successfully",
      data: user,
    });
  } catch (error) {
    if (error instanceof Error) {
      const statusCode =
        error.message === "User not found"
          ? 404
          : error.message === "This account is inactive"
            ? 403
            : 400;

      return res.status(statusCode).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}
