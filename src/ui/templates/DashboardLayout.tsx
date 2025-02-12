import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen w-full bg-gray-100 pt-[72px]">
            <Navbar />
            <main className="bg-[#242424] flex-1 p-8">
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout