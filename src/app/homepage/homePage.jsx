"use client";
import Link from "next/link";
import React, { useState } from "react";

export function HomePage() {
  const [session, setSession] = useState(true);
  return (
    <>
      {session ? Guest() : User()}
      {/* {User()} */}
    </>
  );
}

// Guest
export function Guest() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[400px] ">
          <div>This is our Guest Page</div>
          <Link href="/auth/login">
            <div class="flex items-center justify-between">
              <button class="bg-white border border-gray-300 rounded-md text-center mt-3 py-2 w-full px-4 flex items-center justify-center hover:bg-blue-400 hover:text-white">
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
export function User() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[400px] ">
          <div>This is our Profile Page</div>
          <Link href="/auth/login">
            <div class="flex items-center justify-between">
              <button class="bg-white border border-gray-300 rounded-md text-center mt-3 py-2 w-full px-4 flex items-center justify-center hover:bg-blue-400 hover:text-white">
                Sign Out
              </button>
            </div>
          </Link>
          <Link href="/profile">
            <div class="flex items-center justify-between">
              <button class="bg-white border border-gray-300 rounded-md text-center mt-3 py-2 w-full px-4 flex items-center justify-center hover:bg-blue-400 hover:text-white">
                Profile Page
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
