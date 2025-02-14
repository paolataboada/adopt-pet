import { petApi } from '../../api/petApi';
import { IPet } from '../interfaces/pet.interface';

export const getPets = async (): Promise<IPet[]> => {
	return await petApi.getPets();
};
