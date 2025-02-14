import { useEffect, useState } from 'react';
import { IPet } from '../../application/interfaces/pet.interface';
import { getPets } from '../../application/useCases/getPets';

export const usePets = () => {
	const [pets, setPets] = useState<IPet[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		getPets().then((data) => {
			setPets(data);
			setLoading(false);
		});
	}, []);

	return { pets, loading };
};
