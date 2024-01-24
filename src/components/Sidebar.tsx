"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { Toggle } from "@/components/ui/toggle";
import { Button as ShadButton } from "@/components/ui/button";
import { DragnDrop } from "@/components/mantine/DragnDrop";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import HardCoded from "../../HardCoded.json";
import { GroupData } from "@/lib/hardcodedData";
import GroupInputsWrapper from "./GroupInputsWrapper";

export default function Sidebar() {
  return (
    <div className="h-full w-[90%]">
      <div className="w-full flex justify-between p-3 mt-6 overflow-hidden">
        <Sheet>
          <SheetTrigger>
            <ShadButton className="dark:bg-gray-900 bg-white" variant="outline">
              <Icon icon="lucide:plus" className="dark:text-white text-black" />
            </ShadButton>
          </SheetTrigger>
          <SheetContent className="bg-[#ffff] dark:bg-gray-900">
            <SheetHeader>
              <SheetTitle>Create A New Group</SheetTitle>
            </SheetHeader>
            <GroupInputsWrapper />
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <ShadButton className="dark:bg-gray-900 bg-white" variant="outline">
              <Icon
                icon="lucide:settings"
                className="dark:text-white text-black"
              />
            </ShadButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="w-[90%] mt-2">
        <div className="flex text-black dark:text-white justify-between">
          <h1 className="font-semibold">All Groups</h1>
          <p>3</p>
        </div>
        <hr className="border-black dark:border-white" />
      </div>

      <div className="h-5/6 overflow-auto w-[90%]">
        {HardCoded.map((group: GroupData) => (
          <DragnDrop group={group} key={group.id} />
        ))}
      </div>
    </div>
  );
}
