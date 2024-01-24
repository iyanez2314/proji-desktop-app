"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GroupInputDatePicker } from "./GroupInputDatePicker";
import { Button as ShadButton } from "@/components/ui/button";
import { ProjectPriority } from "./ProjectPriority";
import { GroupData } from "@/lib/hardcodedData";

interface GroupInputsProps {
  handleGroupData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProjectData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addProject: () => void;
}

export default function GroupInputs({
  handleGroupData,
  handleProjectData,
  addProject,
}: GroupInputsProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <div className="mt-3">
        <Label htmlFor="email">Group Name</Label>
        <Input
          onChange={handleGroupData}
          className=""
          type="text"
          id="groupName"
          placeholder="Work"
        />
      </div>
      <div className="my-4">
        <h1 className="font-bold text-lg">
          Create a project related to this group
        </h1>
        <p className="font-normal text-sm ">
          This is optional. You can always create a project later.
        </p>
      </div>
      <div className="w-full flex items-end gap-3 justify-center">
        <div className="w-1/2">
          <Label htmlFor="project">Project Name</Label>
          <Input
            onChange={handleProjectData}
            type="text"
            id="name"
            placeholder="Project Name"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="priority">Priority</Label>
          <ProjectPriority />
        </div>
      </div>
      <div className="mt-3 w-full">
        <Label htmlFor="startend">Projected Start - End Date</Label>
        <GroupInputDatePicker />
      </div>

      <ShadButton
        onClick={addProject}
        variant="ghost"
        className=" text-white bg-indigo-900"
      >
        Create
      </ShadButton>
    </div>
  );
}
