"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/homepage" });
  };

  const [state, setState] = useState();
  const router = useRouter();

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  var submitFunc = async (e) => {
    e.preventDefault();
    const statusCredentils = await signIn("credentials", {
      redirect: false,
      email: state.email,
      password: state.password,
      callbackUrl: "http://localhost:3000/homepage",
    });
    if (statusCredentils.ok) router.push(statusCredentils.url);
    console.log(
      "🚀 ~ file: login.jsx:30 ~ submitFunc ~ statusCredentils:",
      statusCredentils
    );
  };

  return (
    <div>
      <div className="w-[400px] max-w-xs">
        <form
          onSubmit={submitFunc}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="uemail"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="uemail"
              type="email"
              name="email"
              placeholder="Enter your email"
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
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={submitFunc}
              className="bg-white border border-gray-300 rounded-md text-center mt-3 py-2 w-full px-4 flex items-center justify-center hover:bg-blue-400 hover:text-white"
            >
              Sign In
            </button>
          </div>
          <div>
            <button
              className="bg-white border border-gray-300 rounded-md mt-3 py-2 w-full px-10 flex items-center"
              onClick={handleGoogleSignIn}
            >
              <svg
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.4375 12.25C23.4375 11.5469 23.3906 10.8828 23.3125 10.25H12V14.75H18.0938C17.7188 16.2188 16.7812 17.375 15.4375 18.0625V21.4375H19.8125C22.1875 19.4688 23.4375 16.4688 23.4375 12.25Z"
                  fill="#4285F4"
                />
                <path
                  d="M12 24C15.4688 24 18.5625 22.9062 20.8125 21.0625L15.4375 18.0625C14.125 18.7188 12.5625 19.25 12 19.25C10.125 19.25 8.5625 18.125 7.875 16.75H3.5625V20.125C5.8125 22.0938 8.875 24 12 24Z"
                  fill="#34A853"
                />
                <path
                  d="M7.875 16.75C7.5625 16.125 7.375 15.4062 7.375 14.625C7.375 13.8438 7.5625 13.125 7.875 12.5V9.125H3.5625C1.9375 12.1562 0.9375 15.4688 0.9375 19C3.0625 22.0938 6.21875 24 12 24C12.5625 24 14.125 23.4688 15.4375 22.8125L20.8125 19.8125C18.5625 21.0312 15.4688 22.125 12 22.125C8.875 22.125 5.8125 20.2188 3.5625 18V21.375Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 4.5C13.5 4.5 14.8125 5.03125 15.875 6.125L20.875 1.125C18.5625 0.125 15.4688 -0.1875 12 -0.1875C6.21875 -0.1875 3.0625 1.71875 0.9375 4.8125L6.0625 8.0625C6.875 5.96875 9.1875 4.5 12 4.5Z"
                  fill="#EA4335"
                />
              </svg>
              <span>Sign in with Google</span>
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              don,t have an account yet?{" "}
              <span className="font-bold text-blue-700">
                <Link href="authentication/register"> Sign Up </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
