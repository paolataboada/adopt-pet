import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
    const { clearSession } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        clearSession();
        navigate("/login");
    };

    return (
        <nav className="fixed top-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center">
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