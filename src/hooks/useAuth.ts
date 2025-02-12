import { useState, useEffect } from 'react';

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState<string | null>(null);

	useEffect(() => {
		const storedSession = localStorage.getItem('session');
		setIsAuthenticated(storedSession);
	}, []);

	const saveSession = (sessionData: string) => {
		localStorage.setItem('session', sessionData);
		setIsAuthenticated(sessionData);
	};

	const clearSession = () => {
		localStorage.removeItem('session');
		setIsAuthenticated(null);
	};

	return {
		isAuthenticated,
		setIsAuthenticated,
		saveSession,
		clearSession,
	};
};
