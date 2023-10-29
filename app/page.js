"use client";
import CreateCV from "@/components/CreateCV";
import Demo from "@/components/Demo";
import Header from "@/components/Header";
import Testimonial from "@/components/Testimonial";
import UploadFile from "@/components/UploadFile";
import { useSession } from "next-auth/react";

export default function Home() {
  //get user from localStorage
  const auth = localStorage.getItem("user");

  return (
    <main
      className="landing-page-container overflow-hidden"
      style={{ backgroundColor: "#F5EFE6" }}
    >
      <Header />
      <div
        style={{ backgroundColor: "#F5EFE6" }}
        className="w-full min-h-[88vh] md:py-0 py-8 px-24 box-border"
      >
        <div
          className="flex items-center justify-center gap-5 w-full min-h-[88vh] flex-wrap 
        "
        >
          <div
            className={
              auth
                ? "w-[80vw] md:w-[35vw] h-[40vh] sm:h-[40vw] md:h-[36vh]"
                : "w-[40vw] h-[40vh]"
            }
          >
            <Demo />
          </div>
          {auth ? (
            <div className="w-[80vw] md:w-[35vw] h-[40vh] sm:h-[40vw] md:h-[36vh]">
              <UploadFile />
            </div>
          ) : null}

          <div
            className={
              auth
                ? "w-[70vw] sm:w-[75vw] md:w-[35vw] h-[40vh] sm:h-[40vw] md:h-[36vh]"
                : "w-[40vw] h-[40vh]"
            }
          >
            <Testimonial />
          </div>
          {auth && (
            <div className="w-[80vw] md:w-[35vw] h-[40vh] sm:h-[40vw] md:h-[36vh]">
              <CreateCV />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
