import *as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email : yup.string()
    .email('Geçerli bir email giriniz')
    .required('Email girmek zorunlu'),
    age : yup.number()
    .positive('Negatif sayı girilemez')
    .integer('Lütfen tam sayı olarak girin')
    .required('Yaş girmek zorunlu'),
    password : yup.string()
    .min(5,'En az 5 karakter olmalıdır.')
    .matches(passwordRules,{
        message : 'Lütfen en az 1 büyük harf,1 küçük harf ve 1 sayı giriniz',
    })
    .required('Şifre girmek zorunludur'),
    confirmPassword : yup.string().oneOf([yup.ref('password')]
    ,'Şifreler eşleşmedi').required('Tekrar şifre girmek zorunludur')
})

export const advancedSchema = yup.object().shape({
    username : yup.string()
    .min(3,'Kullanıcı adı en az 3 karakter uzunluğunda olmalıdır')
    .required('Kullanıcı adı zorunlu'),
    university : yup.string()
    .oneOf(['İTÜ','Boğaziçi','Marmara','İstanbul','ODTÜ','Hacettepe','YTÜ','Gazi','KTÜ'],'Lütfen üniversiteyi seçiniz')
    .required('Üniversite seçimi zorunludur'),
    isAccepted : yup.boolean()
    .oneOf([true],'Kullanım Koşullarını Kabul Ediniz')
})