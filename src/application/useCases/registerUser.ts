import { userApi } from '../../infraestructure/api/userApi';
import { IReqUserRegister } from '../../presentation/pages/SignUpPage';

export const registerUser = async (user: IReqUserRegister) => {
	await userApi.registerUser(user);
};
