import DashboardSidebar from "@/components/layouts/DashboardSidebar";
import DashboardHeader from "@/components/layouts/DashBoardHeader";
import { getUser } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function RootLayout({ children }) {
  const user = await getUser();

  if (!user) {
    redirect("/auth/login");
  }
  if (!user.admin) {
    redirect("/dashboard");
  }
  return (
    <div className='flex w-full h-screen items-center justify-center'>
      <DashboardSidebar />
      <div className='w-full md:w-[85%] bg-appPink pt-[11vh]  overflow-y-scroll  flex flex-col  h-full'>
        <DashboardHeader />
        <div className='w-full  bg-appPink   overflow-y-scroll flex-1'>
          {children}
        </div>
      </div>
    </div>
  );
}
