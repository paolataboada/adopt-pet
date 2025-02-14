import httpClient from './httpClient';
import { IPet } from '../../domain/models/pet.interface';

export const petApi = {
	getPets: async (): Promise<IPet[]> => {
		const response = await httpClient.get('/pet/findByStatus?status=available');
		return response.data;
	},
};
