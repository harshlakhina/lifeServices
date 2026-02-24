import * as yup from "yup"

export const SignInSchema=yup.object({
    email:yup.string().required("E-mail is required").email("Enter Valid Email Address"),
    password:yup.string().required("password is required")
})