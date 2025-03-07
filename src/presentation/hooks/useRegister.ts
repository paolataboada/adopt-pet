import { useState } from 'react';
import { registerUser } from '../../application/useCases/registerUser';
import { IReqUserRegister } from '../pages/SignUpPage';

export const useRegister = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleRegister = async (user: IReqUserRegister) => {
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
