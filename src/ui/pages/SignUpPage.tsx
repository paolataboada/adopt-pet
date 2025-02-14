import { useState } from "react";
import { IUser } from "../../domain/models/user.interface";
import { useRegister } from "../../presentation/hooks/useRegister";

const SignUpPage = () => {
    const { handleRegister, loading, error } = useRegister();
    const [formData, setFormData] = useState<IUser>({
        id: 0,
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        userStatus: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleRegister(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-8 bg-white text-black shadow-md rounded-md md:p-4">
            <h2 className="text-xl font-bold mb-4">Registro</h2>

            {error && <p className="text-red-500">{error}</p>}

            <input
                type="text"
                name="username"
                placeholder="Username"
                className="border p-2 w-full mb-2"
                onChange={handleChange}
            />
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="border p-2 w-full mb-2"
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="border p-2 w-full mb-2"
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="border p-2 w-full mb-2"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                className="border p-2 w-full mb-2"
                onChange={handleChange}
            />
            <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="border p-2 w-full mb-2"
                onChange={handleChange}
            />

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
