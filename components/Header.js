"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  return (
    <header className="w-full flex items-center justify-between p-2">
      <Link
        href="/"
        className="text-center text-2xl sm:text-4xl font-bold landing-page-title whitespace-nowrap"
      >
        <h1>AI Ignition</h1>
      </Link>
      <div className=" flex justify-center items-center w-64 gap-4">
        <button
          type="button"
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
        <button
          className="border border-indigo-500 text-indigo-500 px-4 py-2 rounded-lg whitespace-nowrap"
          onClick={() => router.push("/signup")}
        >
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
