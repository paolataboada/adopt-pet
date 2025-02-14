import axios from 'axios';

const httpClient = axios.create({
	baseURL: 'https://petstore.swagger.io/v2',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default httpClient;
