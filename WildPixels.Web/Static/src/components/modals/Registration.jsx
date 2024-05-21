import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import SubmitButton from "../buttons/SubmitButton";
import { DataProvider } from "../data/DataProvider";
import "./Registration";

const SignupForm = () => (
  <div className="modal-container" onClick={(x) => x.stopPropagation()}>
    <div className="logo-container"></div>
    <div className="invitation-container">
      <h1>Registration</h1>
    </div>
    <Formik
      initialValues={{ login: "", email: "", password: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.login) {
          errors.login = "Required";
        }

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 8) {
          errors.password = "Too small";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          DataProvider.create("user", {
            Name: values.login,
            Email: values.email,
            Password: values.password,
          });
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ isSubmitting }, validate) => (
        <Form>
          <div className="login-form">
            <div className="field">
              <span>Login</span>
              <Field type="login" name="login" />
              <ErrorMessage className="error" name="login" component="div" />
            </div>
            <div className="field">
              <span>Email</span>
              <Field type="email" name="email" />
              <ErrorMessage className="error" name="email" component="div" />
            </div>
            <div className="field">
              <span>Password</span>
              <Field type="password" name="password" />
              <ErrorMessage className="error" name="password" component="div" />
            </div>
            <SubmitButton
              text="register"
              onClick={() => console.log("submitting...")}
              disabled={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

function Registration(props) {
  const setActive = props.setActive;

  return (
    <div className="modal" onClick={() => setActive(false)}>
      <SignupForm />
    </div>
  );
}

export default Registration;
