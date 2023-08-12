"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  // const router = useRouter();

  const onSignup = async () => {
    // Implement signup logic here using axios or any other method
    // You can send the user data to your backend server
    // and handle the response accordingly
    try {
      const response = await axios.post("/api/signup", user);
      // Handle success or error response
      // router.push("/login"); // Redirect to login page after successful signup
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-red-500">
        <h1 className="text-2xl font-semibold mb-4 text-black">Sign Up</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={onSignup}
        >
          Sign Up
        </button>
        <p className="text-sm text-gray-600 mt-2">
          Already have an account?{" "}
          <a className="text-blue-500 hover:underline" href="/login">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
