import React from 'react'
import { Form,Formik } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import { Link } from 'react-router-dom';
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};
function PortalForm() {
  return (
    <>
      <Formik
       initialValues={{ username: '', university: '', isAccepted: false}}
       onSubmit={onSubmit}
       validationSchema={advancedSchema}
     >
       {(isSubmitting) => (
         <Form>
           <CustomInput
           label="Kullanıcı Adı"
           name="Username"
           type="text"
           placeholder="Kullanıcı Adı Giriniz"
           />
           <CustomSelect
           label="Okulunuz"
           name="university"
           placeholder="Lütfen üniversiteyi seçiniz"
           >
             <option value="">Lütfen üniversiteyi seçiniz</option>
             <option value="İTÜ">İstanbul Teknik Üniversitesi</option>
             <option value="Boğaziçi">Boğaziçi Üniversitesi</option>
             <option value="Marmara">Marmara Üniversitesi</option>
             <option value="İstanbul">İstanbul Üniversitesi</option>
             <option value="ODTÜ">Ortadoğu Teknik Üniversitesi</option>
             <option value="Hacettepe">Hacettepe Üniversitesi</option>
             <option value="YTÜ">Yıldız Teknik Üniversitesi</option>
             <option value="Gazi">Gazi Üniversitesi</option>
             <option value="KTÜ">Karadeniz Teknik Üniversitesi</option>
           </CustomSelect>
           <CustomCheckbox type="checkbox" name="isAccepted"/>
           <button disabled={isSubmitting} type="submit">Kaydet</button>
           <Link className="formLink" to="/">Ana Forma Git</Link>
         </Form>
       )}
     </Formik>
    </>
  )
}

export default PortalForm