import { Email } from "@convex-dev/auth/providers/Email";
import axios from "axios";
import { alphabet, generateRandomString } from "oslo/crypto";

export const emailOtp = Email({
  id: "email-otp",
  maxAge: 60 * 15, // 15 minutes
  // This function can be asynchronous
  generateVerificationToken() {
    return generateRandomString(6, alphabet("0-9"));
  },
  async sendVerificationRequest({ identifier: email, provider, token }) {
    try {
      // TODO: Replace with your own email service (e.g., SendGrid, Resend, AWS SES, etc.)
      // Example using a generic email service endpoint:
      const emailServiceUrl = process.env.EMAIL_SERVICE_URL;
      const emailApiKey = process.env.EMAIL_API_KEY;
      const appName = process.env.APP_NAME || "Infinity Modern";

      if (!emailServiceUrl || !emailApiKey) {
        throw new Error("Email service not configured. Please set EMAIL_SERVICE_URL and EMAIL_API_KEY environment variables.");
      }

      await axios.post(
        emailServiceUrl,
        {
          to: email,
          otp: token,
          appName: appName,
        },
        {
          headers: {
            "x-api-key": emailApiKey,
          },
        },
      );
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },
});
