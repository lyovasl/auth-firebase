"use client";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res }, "***");
      setEmail("");
      sessionStorage.setItem("user", true);
      setPassword("");
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className=" bg-gray-700 p-10 rounded-lg outline-none shadow-xl w-96">
        <h1 className="text-blue-400 text-2xl mb-5">Sign In</h1>
        <input
          className="w-full p-3 mb-4 bg-gray-600 rounded outline-none text-white placeholder-grey-300"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-3 mb-4 bg-gray-300 rounded outline-none text-white placeholder-grey-400"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSignIn}
          className="w-full p-3 bg-indigo-400 rounded text-blue-200 hover:bg-indigo-600"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
