import { IUser } from '../../domain/models/user.interface';
import httpClient from '../api/httpClient';

export const authService = {
	login: async (username: string, password: string): Promise<IUser> => {
		try {
			const response = await httpClient.get<IUser>('/user/login', {
				params: { username, password },
			});

			localStorage.setItem('user', JSON.stringify(response.data));
			return response.data;
		} catch {
			throw new Error('Invalid credentials');
		}
	},

	logout: () => {
		localStorage.removeItem('user');
	},

	getUser: (): IUser | null => {
		const user = localStorage.getItem('user');
		return user ? JSON.parse(user) : null;
	},
};
