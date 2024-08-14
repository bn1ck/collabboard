"use client";

import Loading from "@/components/auth/Loading";
import { ClerkProvider, SignInButton, useAuth } from "@clerk/nextjs";
import {
  ConvexReactClient,
  Authenticated,
  AuthLoading,
  Unauthenticated,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

import React from "react";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Unauthenticated>
          <SignInButton />
        </Unauthenticated>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
