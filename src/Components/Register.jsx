import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { user, createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (emailError) {
      e.target.email.focus();
      return;
    } else if (passwordError) {
      e.target.password.focus();
      return;
    }
    createUser(email, password)
      .then((result) => {
        setErrorMessage("");
        const loggedUser = result.user;
        form.reset();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const handleEmail = (e) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const input = e.target.value;
    setEmail(input);
    if (!emailRegex.test(input)) {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }
  };
  const handlePassword = (e) => {
    const input = e.target.value;
    setPassword(input);
    if (input.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (!/\d/.test(input)) {
      setPasswordError("Password must contain at least one digit");
    } else if (!/[a-z]/.test(input)) {
      setPasswordError("Password must contain at least one lowercase letter");
    } else if (!/[A-Z]/.test(input)) {
      setPasswordError("Password must contain at least one uppercase letter");
    } else {
      setPasswordError("");
    }
  };
  return (
    <div>
      <div className="bg-cyan-100 h-64 mb-16 text-4xl text-blue-500 font-bold tracking-wide flex justify-center items-center">
        Register
      </div>
      <form className="w-full max-w-sm mx-auto mb-10" onSubmit={handleSubmit}>
        {/* <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 "
            id="name"
            type="text"
            placeholder="Enter your name"
            required
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </div> */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={handleEmail}
          />
          {emailError && <span className="text-red-500">{emailError}</span>}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={handlePassword}
          />
          {passwordError && (
            <span className="text-red-500">{passwordError}</span>
          )}
        </div>
        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
        <p className="mb-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Please Login
          </Link>
        </p>
        <button className="btn w-full" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
