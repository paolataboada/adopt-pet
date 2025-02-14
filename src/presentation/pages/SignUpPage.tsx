import { useState } from "react";
import { IUser } from "../../domain/models/user.interface";
import { useRegister } from "../hooks/useRegister";
import { useNavigate } from "react-router";
import { RegisterSchema, registerSchema } from "../../domain/schemas/register.schema";

export type IReqUserRegister = Omit<IUser, 'id' | 'userStatus'>;

const SignUpPage = () => {
    const navigate = useNavigate();

    const { handleRegister, loading, error } = useRegister();
    const [errors, setErrors] = useState<Partial<Record<keyof RegisterSchema, string>>>({});

    const [formData, setFormData] = useState<IReqUserRegister>({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validation = registerSchema.safeParse(formData);
        if (!validation.success) {
            const formattedErrors: Partial<Record<keyof RegisterSchema, string>> = {};
            validation.error.errors.forEach((err) => {
                if (err.path[0]) formattedErrors[err.path[0] as keyof RegisterSchema] = err.message;
            });
            setErrors(formattedErrors);
            return;
        }

        await handleRegister(formData);
        navigate('/login')
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-8 bg-white text-black shadow-md rounded-md md:p-4 md:shadow-none">
            <h2 className="text-xl font-bold mb-4">Registro</h2>

            {error && <p className="text-xs text-red-500">{error}</p>}

            <div className="mb-3">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className={`border border-gray-300 rounded-sm p-2 w-full ${errors?.username ? 'border-red-500' : 'border-gray-300'}`}
                    onChange={handleChange}
                />
                {errors.username && <p className="text-xs text-red-500 mt-1">{errors.username}</p>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className={`border border-gray-300 rounded-sm p-2 w-full ${errors?.firstName ? 'border-red-500' : 'border-gray-300'}`}
                    onChange={handleChange}
                />
                {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className={`border border-gray-300 rounded-sm p-2 w-full ${errors?.lastName ? 'border-red-500' : 'border-gray-300'}`}
                    onChange={handleChange}
                />
                {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className={`border border-gray-300 rounded-sm p-2 w-full ${errors?.email ? 'border-red-500' : 'border-gray-300'}`}
                    onChange={handleChange}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`border border-gray-300 rounded-sm p-2 w-full ${errors?.password ? 'border-red-500' : 'border-gray-300'}`}
                    onChange={handleChange}
                />
                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className={`border border-gray-300 rounded-sm p-2 w-full ${errors?.phone ? 'border-red-500' : 'border-gray-300'}`}
                    onChange={handleChange}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white p-2 w-full rounded-md"
                disabled={loading}
            >
                {loading ? "Registrando..." : "Registrarse"}
            </button>
        </form>
    );
};

export default SignUpPage;
