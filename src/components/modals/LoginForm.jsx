import React, { useContext, useEffect, useRef } from 'react';
import { StaticDataContext } from 'global/context/StaticDataContext';
import { UserDataContext } from 'global/context/UserDataContext';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { userLogin } from 'global/api/endpoint';
import { storeUser } from 'global/api/auth';

export const LoginForm = ({ toggle }) => {
  const { translate } = useContext(StaticDataContext);
  const { loginUser } = useContext(UserDataContext);
  const formRef = useRef(null);

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const getTokendata = await userLogin(values);
    if (getTokendata) {
      storeUser(getTokendata);
      loginUser();
      toggle();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        toggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggle]);

  const config = {
    initialValues: {
      username: "mor_2314",
      password: "83r5^_"
    },
    validationSchema: Yup.object({
      username: Yup.string().required(translate.loginForm.required),
      password: Yup.string().required(translate.loginForm.required)
    }),
    onSubmit: onSubmit
  };

  return (
    <div ref={formRef} className='login-form position: relative'>
      <h2 className="text-center text-lg	">
        {translate.loginForm.title}
      </h2>
      <Formik {...config}>
        {({ isSubmitting, errors }) => (
          <Form>
            <div className='row'>
              <div className='userInput'>
                <Field
                  type="username"
                  name="username"
                  placeholder={translate.loginForm.username}
                  className={`${errors.username ? 'error' : ''}`}
                />
                <ErrorMessage name="username" component="label" />
              </div>
              <div className='passwordInput'>
                <Field
                  type="password"
                  name="password"
                  placeholder={translate.loginForm.password}
                  className={`${errors.password ? 'error' : ''}`}
                />
                <ErrorMessage name="password" component="label" />
              </div>
              <div className='button'>
                <button type="submit" disabled={isSubmitting || errors.length > 0}>
                  {translate.loginForm.login}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
