import React, { useState, useContext } from "react";

import FormInput from "../form-input/forms-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../context/user.context";

import {
  signInUserAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
<<<<<<< HEAD
import "./sign-in.style.scss";
=======
>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const { setCurrentUser } = useContext(UserContext);

  const resetForm = () => {
    setFormField(defaultFormField);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInUserAuthWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      resetForm();
      setCurrentUser(user);
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
          alert("Email already in use");
          break;
        case "auth/invalid-credential":
          alert("Your account is not valid you need to sign-up");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(err);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Don't have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <label></label>
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
<<<<<<< HEAD
          <Button type='button' buttonType="google" onClick={signInWithGoogle}>
=======
          <Button buttonType="google" onClick={signInWithGoogle}>
>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
