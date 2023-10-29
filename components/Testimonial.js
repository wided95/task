"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function Testimonial() {
  const testimonials = [
    {
      name: "James",
      description:
        "I have tested out your app and I really liked how simple, detailed and easy to use it is.",
      imageURL: "images/avatar1.png",
    },
    {
      name: "Emilie",
      description:
        "I appreciate the feedback regarding the CV.It’s concise and straight to he point. This is a great tool!",
      imageURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Anderson",
      description:
        "Your app really helped me to evaluate my chances for a job I was applying for. I’ll use it for my future applications.",
      imageURL: "images/avatar2.png",
    },
  ];
  const properties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinity: true,
  };
  return (
    <section class="relative w-[100%] h-[100%] rounded-lg overflow-hidden section-slider-container">
      <Slide {...properties}>
        {testimonials.map((testimonial) => (
          <div className="">
            <div class="h-[100%] absolute inset-0 -z-10 bg-white opacity-20"></div>
            <div class=" h-[100%] absolute inset-y-0 right-1/2 -z-10 mr-16 w-[100%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
            <div class="h-[100%]  mx-auto max-w-2xl lg:max-w-4xl">
              <figcaption class="md:mt-5 mt-10">
                <img
                  class="mx-auto h-10 w-10 rounded-full"
                  src={testimonial.imageURL}
                  alt=""
                />
                <div class="mt-2 flex items-center justify-center space-x-3 text-base">
                  <div class="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                </div>
              </figcaption>
              <figure class="mt-5 flex  justify-center">
                <blockquote class="text-center text-sm sm:text-xl font-normal leading-6 text-gray-400 md:text-sm sm:leading-6 w-[80%]">
                  <p>{testimonial.description}</p>
                </blockquote>
              </figure>
            </div>
          </div>
        ))}
      </Slide>
    </section>
  );
}
