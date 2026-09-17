import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8).max(128),
  firstName: z.string().trim().min(2).max(50),
  lastName: z.string().trim().max(50).optional(),
  phone: z.string().trim().min(10).max(15),
  ieeeMembershipNumber: z.string().trim().min(1).max(50),
  department: z.string().trim().min(2).max(100),
  course: z.string().trim().min(2).max(100),
  year: z.string().trim().min(1).max(20),
  rollNumber: z.string().trim().min(1).max(50),
});

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1).max(128),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;