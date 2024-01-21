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
import GroupInputs from "./GroupInputs";

export default function Sidebar() {
  return (
    <div className="w-[275px] flex flex-col border border-slate-800 items-center space-y-10 overflow-auto">
      <div className=" h-[50px] w-full flex justify-between p-3 mt-6">
        <Sheet>
          <SheetTrigger>
            <ShadButton variant="outline">
              <Icon icon="lucide:plus" className="text-black" />
            </ShadButton>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Create A New Group</SheetTitle>
            </SheetHeader>
            <GroupInputs />
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <ShadButton variant="outline">
              <Icon icon="lucide:settings" className="text-black" />
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

      <div className="h-full w-[90%] ">
        <div className="flex text-white justify-between">
          <h1 className="font-semibold">All Groups</h1>
          <p>3</p>
        </div>

        <hr className="border-white" />
        <div className="mt-3">
          <DragnDrop groupName="👷🏼 Work" />
          <DragnDrop groupName="📈 Personal" />
          <DragnDrop groupName="😜 Freelance" />
        </div>
      </div>
    </div>
  );
}
