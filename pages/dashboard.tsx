import Navbar from '../components/Navbar';

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-white text-black">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold">Your Dashboard</h1>
          <p>This is where you’ll access your highlights.</p>
        </div>
      </main>
    </>
  );
}
