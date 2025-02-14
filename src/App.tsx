import { Route, Routes } from 'react-router';
import LoginPage from './presentation/pages/LoginPage';
import SignUpPage from './presentation/pages/SignUpPage';
import AuthLayout from './presentation/templates/AuthLayout';
import DashboardLayout from './presentation/templates/DashboardLayout';
import PetsPage from './presentation/pages/PetsPage';
import CartPage from './presentation/pages/CartPage';
import ProfilePage from './presentation/pages/ProfilePage';
import ProtectedRoute from './routes/ProtectedRoute';
import { PetsProvider } from './contexts/pets/PetsProvider';

function App() {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path="login" element={<LoginPage />} />
				<Route path="sign-up" element={<SignUpPage />} />
				<Route path="*" element={<LoginPage />} />
			</Route>
			<Route path="/" element={<ProtectedRoute />}>
				<Route element={<DashboardLayout />}>
					<Route
						path="pets"
						element={
							<PetsProvider>
								<PetsPage />
							</PetsProvider>
						}
					/>
					<Route path="profile" element={<ProfilePage />} />
					<Route path="cart" element={<CartPage />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
