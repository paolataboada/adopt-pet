import { useActionState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../application/auth/useAuth";

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         navigate("/pets");
    //     }
    // }, [isAuthenticated, navigate]);

    const handleLogin = async (_previousState: string | null, formData: FormData): Promise<string | null> => {
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        try {
            await login(username, password);
            navigate("/pets");
            return null;
        } catch (error) {
            console.log(error);
            alert("Error en login");
            return "Error en login";
        }
    }

    const [error, formAction, isPending] = useActionState(handleLogin, null);

    return (
        <form action={formAction} className="max-w-sm mx-auto p-8 bg-white shadow-md rounded-md text-black md:shadow-none md:p-4">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Username: </label>
                <input
                    type="text"
                    name="username"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Password: </label>
                <input
                    type="password"
                    name="password"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <button type="submit" disabled={isPending} className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                {isPending ? "Logging in..." : "Login"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}

            <div className="flex justify-center gap-1 mt-2">
                <p>¿No tienes una cuenta?</p>
                <NavLink to="/sign-up" end className="text-blue-400 underline underline-offset-2">
                    Regístrate
                </NavLink>
            </div>
        </form>
    );
}

export default LoginPage