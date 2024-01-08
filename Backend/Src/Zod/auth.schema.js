import zod from "zod";

const signupSchema = zod.object({
  firstName: zod.string().min(2),
  lastName: zod.string().min(2),
  email: zod.string().email(),
  userName: zod.string(),
  password: zod.string().min(6),
  phoneNumber: zod.string().refine((value) => value.length === 10, {
    message: "Phone number must be exactly 10 digits.",
  }),
});

const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string()
});

export {signupSchema, loginSchema};