import * as yup from 'yup';

export const loginValidationSchema = () => yup.object().shape({
    userName: yup.string().trim().required("Kullanıcı Adı Alanı Boş Bırakılamaz!"),
    password: yup.string().required("Şifre Alanı Boş Bırakılamaz!")
});

export const addTodoValidationSchema = () => yup.object().shape({
    addTodo: yup.string().trim().required("Boş Yapılacak eklenemez!").max(120, "En fazla 120 karakter girebilirsiniz!")
});

export const editTodoValidationSchema = () => yup.object().shape({
    editTodo: yup.string().trim().required("En az 1 karakter giriniz veya 'VAZGEÇ' butonuna tıklayınız!")
        .max(120, "En fazla 120 karakter girebilirsiniz!")
});