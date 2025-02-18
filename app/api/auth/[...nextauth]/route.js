// import NextAuth from 'next-auth'
// import GithubProvider from 'next-auth/providers/github'
// import GoogleProvider from 'next-auth/providers/google'

// export const authoptions = NextAuth({
//   providers: [
//     // GitHub Provider
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),

//     // Google Provider
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],

//   // Customizing session callback to use basic session data
//   callbacks: {
//     async session({ session, user }) {
//       // You can modify the session here if you need to attach more data
//       session.user.username = user.username;
//       return session
//     },
//   },

//   // Redirect configuration after successful sign-in
//   pages: {
//     signIn: '/auth/signin',  // Customize the sign-in page (optional)
//     error: '/auth/error',    // Customize the error page (optional)
//   },
// })

// export { authoptions as GET, authoptions as POST }

























import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    // GitHub Provider
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      // Attaching user ID from token (optional)
      session.user.id = token.sub;
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin", // Custom sign-in page
    error: "/auth/error",   // Custom error page
  },
};

// ✅ Correct way to export NextAuth
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

