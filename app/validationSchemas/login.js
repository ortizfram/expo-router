import * as yup from "yup";

export const signinValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5, "Too short!").max(1000, "Too long!").required(),
});
