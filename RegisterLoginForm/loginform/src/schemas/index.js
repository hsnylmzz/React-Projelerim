import *as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email : yup.string()
    .email('Geçerli bir email giriniz')
    .required('Email girmek zorunlu'),
    username : yup.string()
    .min(5,'En az 5 karakter olmalıdır.')
    .required('Kullanıcı adı zorunludur.'),
    password : yup.string()
    .min(5,'En az 5 karakter olmalıdır.')
    .matches(passwordRules,{
        message : 'Lütfen en az 1 büyük harf,1 küçük harf ve 1 sayı giriniz',
    })
    .required('Şifre girmek zorunludur'),
    confirmPassword : yup.string().oneOf([yup.ref('password')]
    ,'Şifreler eşleşmedi').required('Tekrar şifre girmek zorunludur'),
})