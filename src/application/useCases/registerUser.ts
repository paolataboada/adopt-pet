import { userApi } from '../../api/userApi';
import { IUser } from '../../domain/models/user.interface';

export const registerUser = async (user: IUser) => {
	await userApi.registerUser(user);
};
