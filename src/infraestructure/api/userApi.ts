import { IReqUserRegister } from '../../presentation/pages/SignUpPage';
import httpClient from './httpClient';

export const userApi = {
	registerUser: async (user: IReqUserRegister) => {
		await httpClient.post('user', user);
	},
};
