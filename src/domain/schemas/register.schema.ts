import { z } from 'zod';

export const registerSchema = z.object({
	username: z
		.string()
		.min(3, 'Username must be at least 3 characters long')
		.max(20, 'Username must not exceed 20 characters')
		.nonempty('Username is required.'),

	firstName: z
		.string()
		.min(2, 'First name is required')
		.max(50, 'First name must not exceed 50 characters')
		.nonempty('First name is required.'),

	lastName: z
		.string()
		.min(2, 'Last name is required')
		.max(50, 'Last name must not exceed 50 characters')
		.nonempty('Last name is required.'),

	email: z.string().email('Invalid email format').nonempty('Username is required.'),

	password: z
		.string()
		.min(6, 'Password must be at least 6 characters long')
		.max(60, 'Password must not exceed 60 characters')
		.regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.regex(/[a-z]/, 'Password must contain at least one lowercase letter')
		.regex(/\d/, 'Password must contain at least one number')
		.regex(/[@$!%*?&]/, 'Password must contain at least one special character (@$!%*?&)')
		.nonempty('Password is required.'),

	phone: z
		.string()
		.regex(/^\d{10}$/, 'Phone number must be exactly 10 digits')
		.nonempty('Phone number is required.'),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
