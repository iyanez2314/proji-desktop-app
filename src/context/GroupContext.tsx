"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { GroupData } from "@/lib/hardcodedData";

interface GroupContextType {
  groups: GroupData[];
  initialGroupState: GroupData;
  updateGroupData: (key: keyof GroupData, value: any) => void;
}

const initialGroupState: GroupData = {
  id: Math.floor(Math.random() * 1000),
  groupName: "",
  projects: [],
};

export const GroupContext = createContext<GroupContextType | undefined>({
  groups: [],
  initialGroupState: initialGroupState,
  updateGroupData: (key: keyof GroupData, value: any) => {},
});

export const useGroupContext = () => {
  const context = useContext(GroupContext);
  if (!context) {
    throw new Error("useGroupContext must be used within a GroupProvider");
  }
  return context;
};

export const GroupProvider = ({ children }: { children: ReactNode }) => {
  const [groups, setGroups] = useState<GroupData[]>([initialGroupState]);

  const updateGroupData = (key: keyof GroupData, value: any) => {
    setGroups((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    console.log(groups);
  }, [groups]);

  return (
    <GroupContext.Provider
      value={{ groups, initialGroupState, updateGroupData }}
    >
      {children}
    </GroupContext.Provider>
  );
};
