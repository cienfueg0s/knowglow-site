import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar from '../components/Navbar'; // Assuming Navbar component exists

const supabase = createClient(
  "https://wiujosdfijziayqgbonh.supabase.co",  // Replace with your Supabase URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpdWpvc2RmaWp6aWF5cWdib25oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5MDUwMDUsImV4cCI6MjA1OTQ4MTAwNX0.nQ7CyMrrxv-epXmbLctaYt_8FFlNr1u46jRHYdqMSrk"  // Replace with your public anon key
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      setMessage("Error sending magic link.");
    } else {
      setMessage("Check your email for the magic link!");
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-white text-black">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold">Login to KnowGlow</h1>
          <p>Login functionality coming soon...</p>
          
          {/* The form for email input */}
          <form onSubmit={handleLogin} className="w-full max-w-sm mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded mb-4"
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Send Magic Link
            </button>
            {message && <p className="mt-4 text-center">{message}</p>}
          </form>
        </div>
      </main>
    </>
  );
}
