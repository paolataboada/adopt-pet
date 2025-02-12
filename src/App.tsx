import { Route, Routes } from 'react-router';
import './App.css';
import LoginPage from './ui/pages/LoginPage';
import SignUpPage from './ui/pages/SignUpPage';
import AuthLayout from './ui/templates/AuthLayout';
import DashboardLayout from './ui/templates/DashboardLayout';
import PetsPage from './ui/pages/PetsPage';
import CartPage from './ui/pages/CartPage';
import ProfilePage from './ui/pages/ProfilePage';

function App() {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path="login" element={<LoginPage />} />
				<Route path="sign-up" element={<SignUpPage />} />
				<Route path="*" element={<LoginPage />} />
			</Route>
			<Route element={<DashboardLayout />}>
				<Route path="/pets" element={<PetsPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/cart" element={<CartPage />} />
			</Route>
		</Routes>
	);
}

export default App;
