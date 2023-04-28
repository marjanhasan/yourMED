import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const userPassword = form.password.value;
    console.log(userName, userEmail, userPassword);

    createUser(userEmail, userPassword)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="bg-cyan-100 h-64 mb-16 text-4xl text-blue-500 font-bold tracking-wide flex justify-center items-center">
        Register
      </div>
      <form className="w-full max-w-sm mx-auto mb-10" onSubmit={handleSubmit}>
        <div className="mb-4">
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
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"
            id="email"
            type="email"
            placeholder="Enter your email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
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
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
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
