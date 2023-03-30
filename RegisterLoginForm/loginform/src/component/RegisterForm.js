import React from 'react'
import {useFormik} from "formik"
import {basicSchema} from "../schemas"

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
  
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
};
function RegisterForm() {
    const{values,errors,isSubmitting,handleSubmit,handleChange} = useFormik({
        initialValues : {
            email : "",
            username : "",
            password : "",
            confirmPassword : "",
            isAccepted : false
        },
        validationSchema : basicSchema,
        onSubmit,
    })
  return (
    <form onSubmit={handleSubmit}>
        <h3>Üyelik Kayıt Formu</h3>
        <div className="inputDiv">
            <label>Email</label>
            <input
              type="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="Mail adresinizi giriniz"
              className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="inputDiv">
            <label>Kullanıcı Adı</label>
            <input
              type="text"
              value={values.username}
              onChange={handleChange}
              id="username"
              placeholder="Kullanıcı adı giriniz"
              className={errors.username ? 'input-error' : ''}
            />
            {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="inputDiv">
          <label>Şifre</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="Şifrenizi giriniz"
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="inputDiv">
          <label>Şifre Tekrar</label>
          <input
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            placeholder="Şifrenizi tekrar giriniz"
            className={errors.confirmPassword ? 'input-error' : ''}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <button disabled={isSubmitting} type="submit">
          Kaydet
        </button>
    </form>
  )
}

export default RegisterForm