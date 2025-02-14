import { z } from 'zod';

export const loginSchema = z.object({
	username: z
		.string()
		.nonempty('Username is required.')
		.min(3, 'Username must be at least 3 characters.')
		.max(20, 'Username must not be longer than 20 characters.')
		.refine((value) => /^[a-zA-Z0-9_]+$/.test(value), {
			message: 'Only letters, numbers and underscores are allowed.',
		}),

	password: z
		.string()
		.min(6, 'Password must be at least 6 characters long')
		.max(60, 'Password must not exceed 60 characters')
		.regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.regex(/[a-z]/, 'Password must contain at least one lowercase letter')
		.regex(/\d/, 'Password must contain at least one number')
		.regex(/[@$!%*?&]/, 'Password must contain at least one special character (@$!%*?&)')
		.nonempty('Password is required.'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
