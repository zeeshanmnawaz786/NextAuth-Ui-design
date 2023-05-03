"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

export function HomePage() {
  const { data: session } = useSession();
  const handleGoogleSignOut = () => {
    signOut();
  };
  return <>{session ? User({ session, handleGoogleSignOut }) : Guest()}</>;
}

// Guest
export function Guest() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[400px] ">
          <div>This is our Guest Page</div>
          <Link href="/authentication/login">
            <div className="flex items-center justify-between">
              <button className="bg-white border border-gray-300 rounded-md text-center mt-3 py-2 w-full px-4 flex items-center justify-center hover:bg-blue-400 hover:text-white">
                Sign In
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

// User
export function User({ session, handleGoogleSignOut }) {
  console.log("🚀 ~ file: homePage.jsx:33 ~ User ~ session:", session);
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[400px] ">
          <div>This is our Profile Page</div>
          <div>{session.user.name}</div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleGoogleSignOut}
              className="bg-white border border-gray-300 rounded-md text-center mt-3 py-2 w-full px-4 flex items-center justify-center hover:bg-blue-400 hover:text-white"
            >
              Sign Out
            </button>
          </div>
          <Link href="/profile">
            <div className="flex items-center justify-between">
              <button className="bg-white border border-gray-300 rounded-md text-center mt-3 py-2 w-full px-4 flex items-center justify-center hover:bg-blue-400 hover:text-white">
                Profile Page
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  console.log("🚀rverSideProps ~ session:", session);

  if (!session) {
    return {
      redirect: {
        destination: "/authentication/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
