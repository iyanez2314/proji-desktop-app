import { DarkModeButton } from "@/components/DarkModeButton";
import MainContentHeader from "@/components/MainContentHeader";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="bg-[#ffff] dark:bg-gray-900 flex min-h-screen">
      <Sidebar />
      {/* Main Page Content */}
      <div className="w-full">
        <MainContentHeader />
      </div>
    </main>
  );
}
