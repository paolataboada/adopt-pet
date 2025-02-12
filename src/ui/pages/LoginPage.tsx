import { useActionState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

async function loginUser(username: string, password: string): Promise<string | null> {
    try {
        const response = await fetch(
            `https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`,
            {
                method: "GET",
            }
        );

        if (!response.ok) {
            throw new Error("Invalid username or password");
        }

        const data = await response.json();
        console.log("Login successful", data);
        return null;
    } catch (error) {
        return error instanceof Error ? error.message : "An unknown error occurred";
    }
}

const LoginPage = () => {
    const navigate = useNavigate();
    const { saveSession } = useAuth();

    const submitHandler = async (_previousState: string | null, formData: FormData): Promise<string | null> => {
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        const errorMessage = await loginUser(username, password);
        if (!errorMessage) {
            saveSession(username);
            navigate("/pets");
            return null;
        }

        return errorMessage;
    }

    const [error, formAction, isPending] = useActionState(submitHandler, null);

    return (
        <form action={formAction} className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-md text-black">
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

            <div className="mt-2">
                <p className="inline-block">¿No tienes una cuenta?</p>
                <NavLink to="/sign-up" end>
                    Regístrate
                </NavLink>
            </div>
        </form>
    );
}

export default LoginPage