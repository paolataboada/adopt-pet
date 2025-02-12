import { ReactNode, useState } from "react";
import { IUser } from "../../domain/user.interface";
import { AuthContext } from "./AuthContext";
import { authService } from "../../infraestructure/auth.service";

interface Props {
    children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<IUser | null>(null);

    const login = async (email: string, password: string) => {
        const loggedInUser = await authService.login(email, password);
        setUser(loggedInUser);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext value={{ user, login, logout }}>
            {children}
        </AuthContext>
    );
};