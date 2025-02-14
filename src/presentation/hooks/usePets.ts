import { useEffect, useState } from 'react';
import { IPet } from '../../domain/models/pet.interface';
import { getPets } from '../../application/useCases/getPets';

export const usePets = () => {
	const [pets, setPets] = useState<IPet[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
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

		fetchPets();
	}, []);

	return { pets, loading, error };
};
