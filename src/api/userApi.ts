import { IUser } from '../domain/models/user.interface';
import httpClient from './httpClient';

export const userApi = {
	registerUser: async (user: IUser) => {
		await httpClient.post('user', user);
	},
};
