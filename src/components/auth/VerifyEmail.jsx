import React from 'react'
import { useFormik } from "formik";
import { useResendNewCodeMutation, useVerifyEmailMutation } from '../../services/mainApi';
import { useSelector } from 'react-redux';


const VerifyEmail = () => {

  const [verifyEmail] = useVerifyEmailMutation();
  const [resendNewCode] = useResendNewCodeMutation();
  const {email} = useSelector(state => state.verifyEmail);
  console.log(email);
  
  const resendCode = async () => {
    try {
      const res = await resendNewCode({email: email}).unwrap();
      console.log(res);
      
    } catch (err) {
      console.log(err);
      
    }
  }
  
  const submit = async (values) => {
    const data = {email: email, ...values}
    
    try {
        const regRes = await verifyEmail(data).unwrap();
        console.log(regRes)
        if (!regRes.success) throw new Error("Error");
    } catch (err) {
        console.log(err);
    }
  };

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
      initialValues: {
        confirmKey: "",
      },
      // validationSchema: ,
      onSubmit: submit
    });

    const inputs = {
      codeVerify: {
        type: "text",
        placeholder: "Code",
        autoComplete: "on",
        name: "confirmKey",
        onChange: handleChange,
        value: values.confirmKey,
      }
    }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex justify-between items-center mb-14'>
    <h3 className='text-5xl'>Verify Email</h3>
  </div>
    <div className='flex flex-col'>
      <div className='mb-11'>
        <p className='text-lg'>Registration was successful. Please confirm your email.</p>
      </div>
    </div></form>
  )
}

export default VerifyEmail