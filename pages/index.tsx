import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white text-black">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to KnowGlow</h1>
        <p className="text-lg">The smart AI highlighter that works where you do.</p>
        <Link href="/login">Login</Link>
      </div>
    </main>
  );
}
