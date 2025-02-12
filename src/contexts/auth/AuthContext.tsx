import { createContext } from "react";
import { IUser } from "../../domain/user.interface";

interface AuthContextType {
    user: IUser | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);