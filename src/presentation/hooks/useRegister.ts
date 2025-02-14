import { useState } from 'react';
import { IUser } from '../../domain/models/user.interface';
import { registerUser } from '../../application/useCases/registerUser';

export const useRegister = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleRegister = async (user: IUser) => {
		setLoading(true);
		setError(null);
		try {
			await registerUser(user);
		} catch {
			setError('Error al registrar usuario');
		} finally {
			setLoading(false);
		}
	};

	return { handleRegister, loading, error };
};
