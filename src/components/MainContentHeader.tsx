import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DarkModeButton } from "./DarkModeButton";

export default function MainContentHeader() {
  return (
    <div className="mt-9 flex w-full justify-between">
      <div className="ml-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="mr-3">
        <DarkModeButton />
      </div>
    </div>
  );
}
