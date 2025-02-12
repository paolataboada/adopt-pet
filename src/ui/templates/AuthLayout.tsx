import { Outlet } from "react-router"

const AuthLayout = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="relative w-full max-w-4xl rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 md:shadow-lg md:bg-white">
                <div className="hidden md:flex items-center justify-center bg-blue-500 p-10">
                    <h2 className="text-3xl font-bold text-white">Welcome!</h2>
                </div>
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout