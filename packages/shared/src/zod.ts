import {z} from "zod";

export const SignUpBodySchema = z.object({
	email: z.email(),
	username: z.string(),
	signature: z.string(),
	ownerWallet: z.string(),
})

export const BaseErrorResponseSchema = z.object({
	success: z.boolean(),
	message: z.string()
});

export const VerifyOtpBodySchema = z.object({
	email: z.email(),
	otp: z.string().min(6).max(6)
})

export const EmailSchema = z.object({
	email: z.email()
})

export const VerifySignInSchema = z.object({
	token: z.string()
})
