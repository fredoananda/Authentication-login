"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const router = useRouter();

  const onLogin = async () => {
    // Implement login logic here using axios or any other method
    // You can send the user data to your backend server
    // and handle the response accordingly
    try {
      const response = await axios.post("/api/login", user);
      // Handle success or error response
      // router.push("/dashboard"); // Redirect to dashboard after successful login
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  const redirectToHome = () => {
    // router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main>
        <div className="mb-12 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <a href="/">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
              src="/next.svg"
              alt="Next.js Logo"
              width={280}
              height={37}
              priority
              onClick={redirectToHome}
            />
          </a>
        </div>
      </main>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-green-500">
        <h1 className="text-2xl font-semibold mb-4 text-black">Log In</h1>

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
          onClick={onLogin}
        >
          Log In
        </button>
        <p className="text-sm text-gray-600 mt-2">
          Don't have an account?{" "}
          <a className="text-blue-500 hover:underline" href="/signup">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
