import DashboardSidebar from "@/components/layouts/DashboardSidebar";
import DashboardHeader from "@/components/layouts/DashBoardHeader";
import { getUser } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function RootLayout({ children }) {
  const user = await getUser();

  if (!user) {
    redirect("/auth/login");
  }
  if (user.admin) {
    redirect("/admin");
  }
  return (
    <div className="flex w-full h-screen items-center justify-center bg-appPink">
      <DashboardSidebar />
      <div className="w-full flex flex-col md:w-[85%] pt-[11vh]  overflow-y-scroll h-full">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}
