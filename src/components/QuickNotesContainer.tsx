"use client";
import React from "react";
import { Icon } from "@iconify/react";

export default function QuickNotesContainer() {
  return (
    <div className="border-slate-700 border w-full h-[300px] rounded-md overflow-hidden">
      <div className=" mt-3 ml-7 w-1/2 p-4">
        <h1 className="text-lg">Quick Notes</h1>
      </div>

      <div className="overflow-auto">
        <div className="h-[calc(300px-5rem)] overflow-y-auto">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full space-y-3">
              <div className="hover:cursor-pointer border border-dotted border-slate-700  mx-6 rounded-md dark:text-black text-white p-6 flex">
                <div className="dark:text-white text-black flex items-center gap-3">
                  <Icon icon="lucide:plus" />
                  <h1>Create New Note</h1>
                </div>
              </div>
              <div className=" dark:bg-[#ffff] bg-gray-700 mx-6 rounded-md p-4 flex items-center">
                <div className="dark:text-black text-white flex flex-col items-start h-full">
                  <h1 className="p-0 m-0">Create New Note</h1>
                  <p className="p-0 m-0">Created: Jan 21, 2024</p>
                </div>
              </div>
              <div className=" dark:bg-[#ffff] bg-gray-700 mx-6 rounded-md p-4 flex items-center">
                <div className="dark:text-black text-white flex flex-col items-start h-full">
                  <h1 className="p-0 m-0">Create New Note</h1>
                  <p className="p-0 m-0">Created: Jan 21, 2024</p>
                </div>
              </div>
              <div className=" dark:bg-[#ffff] bg-gray-700 mx-6 rounded-md p-4 flex items-center">
                <div className="dark:text-black text-white flex flex-col items-start h-full">
                  <h1 className="p-0 m-0">Create New Note</h1>
                  <p className="p-0 m-0">Created: Jan 21, 2024</p>
                </div>
              </div>
              <div className=" dark:bg-[#ffff] bg-gray-700 mx-6 rounded-md p-4 flex items-center">
                <div className="dark:text-black text-white flex flex-col items-start h-full">
                  <h1 className="p-0 m-0">Create New Note</h1>
                  <p className="p-0 m-0">Created: Jan 21, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
