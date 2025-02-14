import { createContext } from "react";
import { IPet } from "../../domain/models/pet.interface";

interface PetContextType {
    pets: IPet[] | null;
    fetchPets: () => Promise<void>;
    loading: boolean;
    error: string | null;
}

export const PetContext = createContext<PetContextType | undefined>(undefined);