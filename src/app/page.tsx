import AIContainer from "@/components/AIContainer";
import { DarkModeButton } from "@/components/DarkModeButton";
import MainContentHeader from "@/components/MainContentHeader";
import QuickNotesContainer from "@/components/QuickNotesContainer";
import Sidebar from "@/components/Sidebar";
import UrgencyContainer from "@/components/UrgencyContainer";

export default function Home() {
  return (
    <main className="bg-[#ffff] dark:bg-gray-900 flex min-h-screen ">
      <div className="h-[1025px] w-[275px] flex flex-col border border-slate-800 items-center">
        <Sidebar />
      </div>

      {/* Main Page Content */}
      <div className="w-full">
        <MainContentHeader />

        {/* Urgency & Quick Notes Section*/}
        <div className="flex justify-evenly  mt-4 ">
          <div className=" w-1/2 space-y-4 p-4 flex flex-col align-top justify-center ">
            <UrgencyContainer />
            <QuickNotesContainer />
          </div>
          {/* AI Section*/}
          <div>
            <AIContainer />
          </div>
        </div>
      </div>
    </main>
  );
}
