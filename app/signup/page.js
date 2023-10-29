"use client";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

function SignUp() {
  return (
    <main className="landing-page-container overflow-hidden">
      <Header />
      <div
        style={{ backgroundColor: "#F5EFE6" }}
        className="w-full min-h-[88vh] py-8 px-8 box-border flex justify-center"
      >
        <div className="max-w-[70%] m-0 max-h-[100%] bg-white shadow sm:rounded-lg flex justify-center flex-1 rounded-lg overflow-hidden">
          <div className="lg:w-1/1 xl:w-7/12 p-6 sm:p-12">
            <div className="flex flex-col items-start">
              <h3 className="text-2xl xl:text-2xl font-medium">
                Create an account
              </h3>
              <p className="text-xs text-gray-600 text-opacity-50">
                Already have an account?
                <Link href="/login" className="text-black underline">
                  {" "}
                  Log in
                </Link>
              </p>
              <div className="w-full flex-1 mt-8">
                <div className=" w-full flex flex-col items-center">
                  <button className="min-w-full max-w-xs font-bold shadow-sm py-2 bg-white-100 border border-black rounded-full text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white p-1 rounded-full">
                      <img className="w-[2vw]" src="images/Group 2.svg" />
                    </div>
                    <span className="ml-1 md:ml-4 whitespace-nowrap md:text-base text-sm">
                      Continue with Google
                    </span>
                  </button>
                  <button className="min-w-full max-w-xs font-bold shadow-sm py-2 bg-white-100 border border-black rounded-full text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                    <div className="bg-white p-1 rounded-full">
                      <img
                        className="w-[2vw]"
                        src="images/logos_facebook.svg"
                      />
                    </div>
                    <span className="md:ml-4 whitespace-nowrap md:text-base text-sm">
                      Continue with Facebook
                    </span>
                  </button>
                  <button className="min-w-full max-w-xs font-bold shadow-sm py-2 bg-white-100 border border-black rounded-full text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                    <div className="bg-white p-1 rounded-full">
                      <img className="w-[2vw]" src="images/twitter.svg" />
                    </div>
                    <span className="ml-1 md:ml-4 whitespace-nowrap md:text-base text-sm">
                      Continue with Twitter
                    </span>
                  </button>
                </div>
                <div className="my-9 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or
                  </div>
                </div>
                <div className="min-w-full flex flex-col gap-5">
                  <div className="flex gap-5">
                    <input
                      className="w-full py-4  font-medium  border-b border-black placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="First Name"
                    />
                    <input
                      className="w-full py-4  font-medium  border-b border-black placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="Last Name"
                    />
                  </div>
                  <input
                    className="w-full py-4  font-medium  border-b border-black placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="w-full py-4  font-medium  border-b border-black placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Password"
                  />
                  <div className="flex items-center min-w-full gap-2">
                    <input type="checkbox" className="rounded-lg w-4 h-4" />
                    <span className="text-sm whitespace-nowrap">
                      Subscribe to our monthly newsletter
                    </span>
                  </div>

                  <p className="mt-6 text-xs text-gray-400">
                    By clicking below you agree to our{" "}
                    <a
                      href="#"
                      className="border-b border-gray-900 text-gray-900"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="border-b border-gray-900 text-gray-900"
                    >
                      Privacy Policy
                    </a>
                  </p>
                  <button
                    className="mt-5 tracking-wide font-semibold bg-black text-gray-100 w-full py-4 rounded-full hover:bg-white hover:text-black hover:border-black hover:border transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline"
                    onClick={() =>
                      localStorage.setItem("token", "dsdsdsdsddsdsd")
                    }
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {/* Checkmark SVG Paths */}
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <p className="min-w-full text-xs text-gray-600 text-opacity-50 text-center">
                    Already have an account?
                    <Link href="/login" className="text-black underline">
                      {" "}
                      Log in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center lg:flex">
            <div
              className="w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('images/registerImage.png')" }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
