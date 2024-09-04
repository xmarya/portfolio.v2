import { z } from "zod";

export const contactSchema = z.object({
    name: z.string()
    .min(6, { message: 'Please write a name with 6 characters at least.' })
    .max(20, {message: "your name must be 15 characters at maximum."})
    .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    details: z.string()
    .min(50, { message: 'it seems your project description is too short, Please do your best and write a little more words' })
    .max(500, {message: "the project description is too long, Please make it shorter a little bit."})
    .trim(),
});