import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("E-posta alanı zorunludur"),
  surname: yup
    .string()
    .required("E-posta alanı zorunludur"),
  email: yup
    .string()
    .email("Lütfen geçerli bir e-posta adresi giriniz")
    .required("E-posta alanı zorunludur"),
  password: yup
    .string()
    .typeError("Şifrenizde sadece \"@/./+/-/_\" kullanabilirsin")
    .min(8, "Şifreniz 8 karakterden az olamaz")
    .max(32, "Şifreniz 32 karakterden fazla olamaz")
    .required("Şifre alanı zorunludur"),
  verPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], "Şifrelerin eşleşmesi gereklidir"),
});

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen geçerli bir e-posta adresi giriniz")
    .required("E-posta alanı zorunludur"),
  password: yup
    .string()
    .typeError("Şifrenizde sadece \"@/./+/-/_\" kullanabilirsin")
    .min(8, "Şifreniz 8 karakterden az olamaz")
    .max(32, "Şifreniz 32 karakterden fazla olamaz")
    .required("Şifre alanı zorunludur"),
});