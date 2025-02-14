import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../../application/auth/useAuth";

const DashboardLayout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="flex min-h-screen w-full bg-gray-100 pt-[72px]">
            <nav className="fixed top-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-10">
                <div className="flex gap-4">
                    <NavLink to="/pets" className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}>
                        Pets
                    </NavLink>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}>
                        Cart
                    </NavLink>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}>
                        Profile
                    </NavLink>
                </div>
                <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
                    Logout
                </button>
            </nav>
            <main className="bg-[#242424] flex-1 p-8">
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout