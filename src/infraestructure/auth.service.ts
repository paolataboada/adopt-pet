import { IUser } from '../domain/models/user.interface';

const API_URL = 'https://petstore.swagger.io/v2';

export const authService = {
	login: async (username: string, password: string): Promise<IUser> => {
		const params = new URLSearchParams({ username, password });
		const response = await fetch(`${API_URL}/user/login?${params.toString()}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		});

		if (!response.ok) {
			throw new Error('Credenciales incorrectas');
		}

		const user = await response.json();
		localStorage.setItem('user', JSON.stringify(user));
		return user;
	},

	logout: () => {
		localStorage.removeItem('user');
	},

	getUser: (): IUser | null => {
		const user = localStorage.getItem('user');
		return user ? JSON.parse(user) : null;
	},
};
