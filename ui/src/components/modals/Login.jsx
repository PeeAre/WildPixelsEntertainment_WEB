import React from "react";
import { useFormik } from "formik";
import "./Login.scss";
import SubmitButton from "../buttons/SubmitButton";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="modal-container" onClick={(x) => x.stopPropagation()}>
      <div className="logo-container"></div>
      <div className="invitation-container">
        <h1>Sign in to your account</h1>
      </div>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email Address</label>
          <input
            className="inp"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            className="inp"
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>

        <SubmitButton text="sign in" onClick={() => console.log("qwe")} />
      </form>
    </div>
  );
};

function Login(props) {
  const setActive = props.setActive;

  return (
    <div className="modal" onClick={() => setActive(false)}>
      <SignupForm />
    </div>
  );
}

export default Login;
