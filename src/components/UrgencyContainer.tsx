import React from "react";
import ProjectStat from "./ProjectStat";

export default function UrgencyContainer() {
  return (
    <div className="border-slate-700 border w-full h-[300px] rounded-md overflow-hidden">
      <div className=" mt-3 ml-7 w-1/2 p-4">
        <h1 className="text-lg">Urgency</h1>
      </div>
      {/* This needs to be scrollable ONLY not the entire box */}
      <div className="overflow-auto">
        <div className="h-[calc(300px-5rem)] overflow-y-auto">
          {/* Projects That Have A Due Date Coming Up  */}
          <div className="flex items-center justify-center  w-full">
            <div className="dark:bg-[#ffff] bg-gray-700 w-3/4 mx-4  rounded-md dark:text-black text-white p-2 flex">
              <div>
                <h1>Project Name</h1>
                <p>Project Due date</p>
              </div>
            </div>
            <ProjectStat progress={20} />
          </div>
          <div className="flex items-center justify-center  w-full">
            <div className="dark:bg-[#ffff] bg-gray-700 w-3/4 mx-4  rounded-md dark:text-black text-white p-2 flex">
              <div>
                <h1>Project Name</h1>
                <p>Project Due date</p>
              </div>
            </div>
            <ProjectStat progress={20} />
          </div>
          <div className="flex items-center justify-center  w-full">
            <div className="dark:bg-[#ffff] bg-gray-700 w-3/4 mx-4  rounded-md dark:text-black text-white p-2 flex">
              <div>
                <h1>Project Name</h1>
                <p>Project Due date</p>
              </div>
            </div>
            <ProjectStat progress={20} />
          </div>
          <div className="flex items-center justify-center  w-full">
            <div className="dark:bg-[#ffff] bg-gray-700 w-3/4 mx-4  rounded-md dark:text-black text-white p-2 flex">
              <div>
                <h1>Project Name</h1>
                <p>Project Due date</p>
              </div>
            </div>
            <ProjectStat progress={20} />
          </div>
          <div className="flex items-center justify-center  w-full">
            <div className="dark:bg-[#ffff] bg-gray-700 w-3/4 mx-4  rounded-md dark:text-black text-white p-2 flex">
              <div>
                <h1>Project Name</h1>
                <p>Project Due date</p>
              </div>
            </div>
            <ProjectStat progress={20} />
          </div>
          <div className="flex items-center justify-center  w-full">
            <div className="dark:bg-[#ffff] bg-gray-700 w-3/4 mx-4  rounded-md dark:text-black text-white p-2 flex">
              <div>
                <h1>Project Name</h1>
                <p>Project Due date</p>
              </div>
            </div>
            <ProjectStat progress={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
