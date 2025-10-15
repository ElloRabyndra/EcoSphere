import { z } from "zod";

// Schema untuk halaman About
export const aboutSchema = z.object({
  nama: z
    .string()
    .min(2, { message: "Nama minimal 2 karakter" })
    .max(50, { message: "Nama maksimal 50 karakter" }),
  pesan: z
    .string()
    .min(10, { message: "Pesan minimal 10 karakter" })
    .max(255, { message: "Pesan maksimal 255 karakter" }),
});
