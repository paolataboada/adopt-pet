import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const DashboardLayout = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-blue-700 text-white p-5">Dashboard Sidebar</aside>
            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow p-4">Dashboard Header</header>
                <main className="flex-1 p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout