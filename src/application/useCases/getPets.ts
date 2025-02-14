import { petApi } from '../../infraestructure/api/petApi';
import { IPet } from '../../domain/models/pet.interface';

export const getPets = async (): Promise<IPet[]> => {
	return await petApi.getPets();
};
