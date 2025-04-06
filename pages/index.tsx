import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-white text-black">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to KnowGlow</h1>
          <p className="text-lg">Highlight smarter. Work faster.</p>
        </div>
      </main>
    </>
  );
}
