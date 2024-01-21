"use client";
import React from "react";
import { Input } from "./ui/input";
import { Icon } from "@iconify/react";

export default function AIContainer() {
  return (
    <div className="border-slate-700 border w-[500px] h-full rounded-md flex flex-col justify-center">
      <div className="w-[500px] rounded-md h-[500px] text-white dark:text-black mt-7">
        <h1>hi</h1>
      </div>
      <div className="p-3 gap-3 flex items-center justify-center dark:text-white text-black">
        <div className="w-4/5">
          <Input placeholder="Ask away..." />
        </div>
        <Icon icon="lucide:send" />
      </div>
    </div>
  );
}
