import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(1, "name is required *")
    .min(3, "name should be at least 3 characters long")
    .max(20, "name should be at most 20 characters long"),

  email: z
    .string()
    .min(1, "email is required *")
    .email("email format must be correct"),

  password: z
    .string()
    .min(8, "password must be at least 8 characters long")
    .regex(/[A-Z]/, "password must contain at least one uppercase letter")
    .regex(/[a-z]/, "password must contain at least one lowercase letter")
    .regex(/[0-9]/, "password must contain at least one number")
    .regex(/[\W_]/, "password must contain at least one special character"),

 confirmPassword: z
    .string()
    .min(1, "confirming password is required *"),
    
  age: z.coerce
    .number()
    .min(10, "minimum age should be 10")
    .max(90, "maximum age should be 90"),

  date: z.string().min(1, "Birth date is required *"),

  hobby: z.enum(["music", "dancing", "playing"],"Please Select anyone hobby"),

  skills: z.array(
    z.object({
      skill: z.string().min(3, "atleast 3 character long")
    })
  ),

  gender: z.enum(["male", "female"],"select anyone *"),

  terms: z.literal(true,"please tick checkbox *"),
  
  desc: z
    .string()
    .min(10, "at least 10 characters long")
    .max(1000, "at most 1000 characters long"),
}).refine((data)=>data.password === data.confirmPassword,{
          message:"password is not matching",
          path:["confirmPassword"]
})