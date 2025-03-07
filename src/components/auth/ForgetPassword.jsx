import React from "react";
import { useForgetPasswordMutation } from "../../services/mainApi";
import InputField from "../ui/InputField";
import { useFormik } from "formik";
import Button from "../ui/Button";
import { forgetPasswordSchema } from "../../validations/forgetPassword";
import Validatior from "./Validatior";


const ForgetPassword = () => {

    const [forgetPassword, { isLoading }] = useForgetPasswordMutation();
    
      const submitBtnData = {
        text: 'Send',
        loadingText: 'Sending',
        type: 'submit',
        isLoading: isLoading,
      }

  const submit = async (values) => {
    try {
      const regRes = await forgetPassword(values).unwrap();
      console.log(regRes);
      if (!regRes.success) throw new Error("Error");
    } catch (err) {
      console.log(err);
    }
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgetPasswordSchema,
    onSubmit: submit,
  });

  const inputs = {
    email: {
      type: "text",
      placeholder: "Email adsress",
      autoComplete: "on",
      name: "email",
      onChange: handleChange,
      value: values.email,
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center mb-14">
        <h3 className="text-5xl">Forget Password</h3>
      </div>
      <div className="flex flex-col">
        <div className="mb-11">
          <label htmlFor="" className="block mb-3 text-base">
            Enter your email adsress
          </label>
          <InputField {...inputs.email} />
          <div>
          {errors.email && touched.email && (
              <Validatior error={errors.email}/>
            )}
          </div>
        </div>
        <div>
        <Button data={submitBtnData} />
        </div>
      </div>
    </form>
  );
};

export default ForgetPassword;
