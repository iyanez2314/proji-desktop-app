import React from "react";
import ProjectStat from "./ProjectStat";

export default function UrgencyContainer() {
  return (
    <div className="border-slate-700 border w-full h-[300px] rounded-md overflow-auto">
      <div className=" w-full mt-3 p-4">
        <h1 className="text-lg">Urgency</h1>
      </div>
      <div className="flex justify-center flex-col overflow-auto space-y-1">
        {/* Projects That Have A Due Date Coming Up  */}
        <div className="flex items-center justify-center">
          <div className="dark:bg-[#ffff] bg-gray-700 w-3/4 mx-4  rounded-md dark:text-black text-white p-2 flex">
            <div>
              <h1>Project Name</h1>
              <p>Project Due date</p>
            </div>
          </div>
          <ProjectStat progress={20} />
        </div>
        <div className="flex items-center justify-center">
          <div className="dark:bg-[#ffff] bg-gray-700 w-3/4 mx-4  rounded-md dark:text-black text-white p-2 flex">
            <div>
              <h1>Project Name</h1>
              <p>Project Due date</p>
            </div>
          </div>
          <ProjectStat progress={70} />
        </div>
        <div className="flex items-center justify-center">
          <div className="dark:bg-[#ffff] bg-gray-700 w-3/4 mx-4  rounded-md dark:text-black text-white p-2 flex">
            <div>
              <h1>Project Name</h1>
              <p>Project Due date</p>
            </div>
          </div>
          <ProjectStat progress={30} />
        </div>
        <div className="flex items-center justify-center">
          <div className="dark:bg-[#ffff] bg-gray-700 w-3/4 mx-4  rounded-md dark:text-black text-white p-2 flex">
            <div>
              <h1>Project Name</h1>
              <p>Project Due date</p>
            </div>
          </div>
          <ProjectStat progress={30} />
        </div>
      </div>
    </div>
  );
}
