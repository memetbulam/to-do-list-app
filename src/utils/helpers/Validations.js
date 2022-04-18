import * as yup from 'yup';

export const loginValidationSchema = () => yup.object().shape({
    userName: yup.string().trim().required("Kullanıcı Adı Alanı Boş Bırakılamaz!"),
    password: yup.string().required("Şifre Alanı Boş Bırakılamaz!")
});