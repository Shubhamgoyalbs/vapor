export type EmailType = "OTP_VERIFICATION" | "SIGNIN_VERIFICATION";

export interface OtpVerificationData {
	otp: string;
}

export interface SigninVerificationData {
	token: string;
}

export type EmailRequestData =
	| { emailType: "OTP_VERIFICATION"; data: OtpVerificationData }
	| { emailType: "SIGNIN_VERIFICATION"; data: SigninVerificationData };

export type EmailQueuePayload = {
	email: string;
} & EmailRequestData;
