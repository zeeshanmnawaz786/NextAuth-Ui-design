"use client";
import Link from "next/link";
import React, { useState } from "react";

function Register() {
  const [state, setState] = useState();

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  var submitFunc = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <div className="w-[400px] ">
        <form
          onSubmit={submitFunc}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm_password"
              type="password"
              name="confirm_password"
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={submitFunc}
              className="bg-white border border-gray-300 rounded-md text-center py-2 px-4 flex items-center justify-center hover:bg-blue-400 hover:text-white w-full mt-3"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              Have an account?
              <span className="font-bold text-blue-700">
                <Link href="authentication/login"> Sign in </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
