import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    signIn(email, password)
      .then((result) => {
        setErrorMessage("");
        const loggedUser = result.user;
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const handleEmail = (e) => {
    const input = e.target.value;
    setEmail(input);
  };
  const handlePassword = (e) => {
    const input = e.target.value;
    setPassword(input);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setErrorMessage("");
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div>
      <div className="bg-cyan-100 h-64 mb-16 text-4xl font-bold tracking-wide flex justify-center items-center">
        Login
      </div>
      <form className="w-full max-w-sm mx-auto mb-5" onSubmit={handleSubmit}>
        {/* <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 "
            id="name"
            type="text"
            placeholder="Enter your name"
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
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            required
            value={password}
            onChange={handlePassword}
          />
          <p onClick={() => setShow(!show)}>
            <small>
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </small>
          </p>
        </div>
        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
        <p className="mb-4">
          Don't have account?{" "}
          <Link to="/register" state={location.state} className="text-blue-600">
            Please Register
          </Link>
        </p>
        <button className="btn w-full" type="submit">
          Login
        </button>
      </form>
      <div className="w-full max-w-sm mx-auto mb-10">
        <button onClick={handleGoogleSignIn} className="btn w-full">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
