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
		.nonempty('Password is required.')
		.min(6, 'Password must be at least 6 characters.')
		.max(50, 'Password is too long.'),
});

export type AuthSchema = z.infer<typeof loginSchema>;
