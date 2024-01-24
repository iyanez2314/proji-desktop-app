"use client";
import React, { FormEventHandler, useEffect, useState } from "react";
import GroupInputs from "./GroupInputs";
import { useGroupContext } from "@/context/GroupContext";
import { GroupData } from "@/lib/hardcodedData";

export default function GroupInputsWrapper() {
  const { initialGroupState } = useGroupContext();
  const [groupData, setGroupData] = useState<GroupData>(initialGroupState);
  const [currentProject, setCurrentProject] = useState({
    id: Math.floor(Math.random() * 1000),
    name: "",
    description: "",
    priority: "",
    expectedStartDate: "",
    expectedEndDate: "",
  });

  const handleGroupData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleProjectData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentProject({
      ...currentProject,
      [e.target.id]: e.target.value,
    });
  };

  const addProject = () => {
    setGroupData((prev) => ({
      ...prev,
      projects: [...prev.projects, currentProject],
    }));
    setCurrentProject({
      id: Math.floor(Math.random() * 1000),
      name: "",
      description: "",
      priority: "",
      expectedStartDate: "",
      expectedEndDate: "",
    });
  };

  useEffect(() => {
    console.log(groupData);
    console.log(currentProject);
  }, [groupData, currentProject]);

  return (
    <>
      <GroupInputs
        addProject={addProject}
        handleGroupData={handleGroupData}
        handleProjectData={handleProjectData}
      />
    </>
  );
}
