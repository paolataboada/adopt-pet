import httpClient from './httpClient';
import { IPet } from '../application/interfaces/pet.interface';

export const petApi = {
	getPets: async (): Promise<IPet[]> => {
		const response = await httpClient.get('/pet/findByStatus?status=available');
		return response.data;
	},
};
