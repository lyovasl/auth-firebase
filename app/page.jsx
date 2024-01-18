"use client";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  console.log({ user }, "====");
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  if (!user && !userSession) {
    router.push("/sign-up");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>

      <button
        className="p-5 rounded-lg bg-slate-600 text-gray-300 hover:bg-slate-400"
        onClick={() => {
          signOut(auth);
          sessionStorage.removeItem("user");
        }}
      >
        Log out
      </button>
    </main>
  );
}
