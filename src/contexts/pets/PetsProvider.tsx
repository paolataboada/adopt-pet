import { ReactNode, useEffect, useState } from "react";
import { PetContext } from "./PetsContext";
import { IPet } from "../../domain/models/pet.interface";
import { getPets } from "../../application/useCases/getPets";

interface Props {
    children: ReactNode;
}

export const PetsProvider = ({ children }: Props) => {
    const [pets, setPets] = useState<IPet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPets = async () => {
        try {
            const data = await getPets();
            setPets(data);
        } catch {
            setError('Error al obtener pets');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPets();
    }, [])

    return (
        <PetContext value={{ pets, fetchPets, error, loading }}>
            {children}
        </PetContext>
    );
};