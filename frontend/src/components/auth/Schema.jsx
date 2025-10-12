import { z } from "zod";

// Schema untuk halaman Register
export const registerSchema = z.object({
  display_name: z
    .string()
    .min(2, { message: "Nama minimal 2 karakter" })
    .max(50, { message: "Nama maksimal 50 karakter" }),
  email: z
    .string()
    .email({ message: "Format email tidak valid" }),
  password: z
    .string()
    .min(6, { message: "Password minimal 6 karakter" })
    .max(32, { message: "Password maksimal 32 karakter" }),
});

// Schema untuk halaman Login
export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Format email tidak valid" }),
  password: z
    .string()
    .min(6, { message: "Password minimal 6 karakter" })
    .max(32, { message: "Password maksimal 32 karakter" }),
});
