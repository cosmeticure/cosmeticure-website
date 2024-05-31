import { PrismaAdapter } from '@auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions, Session, User } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import { prisma } from '@/lib/prisma';

export enum USER_ROLES {
  ADMIN = 'Admin',
  MANAGER = 'Manager',
  USER = 'User',
}

export interface UserWithRole extends User {
  id: string;
  role?: string | null;
}

export interface SessionWithUser extends Session {
  user?: {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
  };
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      profile(profile) {
        let userRole = 'Google User';
        if (profile?.email === 'taimoor.m.k@gmail.com') {
          userRole = 'Admin';
        }

        return {
          id: profile.sub,
          role: userRole,
          image: profile.picture,
          email: profile.email,
          emailVerified: profile.email_verified,
          firstName: profile.given_name,
          lastName: profile.family_name,
        };
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT, user: UserWithRole }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }: { session: SessionWithUser, token: JWT }) {
      if (session?.user) session.user.role = token.role as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};
