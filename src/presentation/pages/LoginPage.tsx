import { useActionState, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../../application/auth/useAuth";
import { LoginSchema, loginSchema } from "../../domain/schemas/login.schema";

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [errors, setErrors] = useState<{ username?: string; password?: string, server?: string }>({});

    const handleLogin = async (_previousState: string | null, formData: FormData): Promise<null> => {
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        const validation = loginSchema.safeParse({ username, password });

        if (!validation.success) {
            const fieldErrors: { username?: string; password?: string } = {};

            validation.error.issues.forEach(issue => {
                const field = issue.path[0] as keyof LoginSchema;
                if (!fieldErrors[field]) {
                    fieldErrors[field] = issue.message;
                }
            });

            setErrors(fieldErrors);
            return null;
        }

        setErrors({});

        try {
            await login(username, password);
            navigate("/pets");
            return null;
        } catch {
            setErrors({ server: "Invalid username or password." });
            return null;
        }
    }

    const [, formAction, isPending] = useActionState(handleLogin, null);

    return (
        <form action={formAction} className="max-w-sm mx-auto p-8 bg-white shadow-md rounded-md text-black md:shadow-none md:p-4">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Username: </label>
                <input
                    type="text"
                    name="username"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {errors.username && <p className="text-xs text-red-500 mt-2">{errors.username}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Password: </label>
                <input
                    type="password"
                    name="password"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
                {errors.password && <p className="text-xs text-red-500 mt-2">{errors.password}</p>}
            </div>
            <button type="submit" disabled={isPending} className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                {isPending ? "Logging in..." : "Login"}
            </button>
            {errors.server && <p className="text-xs text-red-500 mt-2">{errors.server}</p>}

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