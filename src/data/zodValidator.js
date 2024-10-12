import { z } from "zod";

// export const contactSchema = z.object({
//     name: z.string()
//     .min(5, { message: 'Please write a name with 5 characters at least.' })
//     .max(25, {message: "your name must be 25 characters at maximum."})
//     .trim(),
//     email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
//     details: z.string()
//     .min(50, { message: 'it seems your project description is too short, Please do your best and write a little more words' })
//     .max(500, {message: "the project description is too long, Please make it shorter a little bit."})
//     .trim(),
// });

export const contactSchema = z.object({
    name: z.string()
    .min(5, { message: {en: "'Please write a name with 5 characters at least.'",
                        ar: "أرجو كتابة اسم لا يقل عن 5 أحرف"}
        })
    .max(25, {message: {en: "your name must be 25 characters at maximum.",
                    ar: "أرجو كتابة اسم لا يزيد عن 25 حرفًا"
    }})
    .trim(),
    email: z.string().email({ message: {en: 'Please enter a valid email.',
                ar: "تأكد من كتابة بريد إلكتروني صحيح"
    }}).trim(),
    details: z.string()
    .min(50, { message: 
        {en: 'it seems your project description is too short, Please do your best and write a little more words',
        ar: "وصفك للمشروع يبدو موجزًا للغاية, أرجو كتابة المزيد من التفاصيل"
        }
         })
    .max(500, {message: 
        {en: "the project description is too long, Please make it shorter a little bit.",
        ar: "وصفك للمشروع يبدو طويلًا, أرجو اختصاره قليلًا"
        }
        })
    .trim(),
});