import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../application/auth/useAuth";

const Navbar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
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
    );
};

export default Navbar;