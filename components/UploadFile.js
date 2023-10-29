"use client";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
export default function UploadFile() {
  return (
    <section class=" relative rounded-lg w-full h-full upload-file-container flex items-center justify-center gap-3 flex-col">
      <input
        className="absolute min-w-[100%] min-h-[100%] cursor-pointer z-10 opacity-0"
        type="file"
      />
      <ArchiveBoxArrowDownIcon className="text-black lg:h-[4vw] sm:h-[8vw] h-[10vw] w-[10vw] sm:w-[8vw] md:h-[5vw] lg:w-[4vw] md:w-[5vw] cursor-pointer rotate-180 rounded-full p-2 border-2 border-solid border-black " />
      <h1 class="text-center text-xl font-serif font-normal leading-normal text-gray-800">
        Upload CV
      </h1>
      <h3 class="text-center text-gray-800 font-cabin text-base font-normal leading-normal">
        ( PDF or DOCX )
      </h3>
    </section>
  );
}
