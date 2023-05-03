import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn";
import Users from "../../../database/model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    // GOOGLE PROVIDER
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // CREDENTIALS PROVIDER
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: "Connection Failed In NextAuth File!";
        });

        // check user existence
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No users found with email please Sign Up");
        }

        // compare()
        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        // incorrectPassword
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or password does,not match");
        }
        return result;
      },
    }),
  ],
});
