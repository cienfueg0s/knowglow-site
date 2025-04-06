import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-white border-b border-gray-200 p-4 flex justify-center space-x-6 text-black'>
      <Link href='/'>Home</Link>
      <Link href='/login'>Login</Link>
      <Link href='/dashboard'>Dashboard</Link>
    </nav>
  );
}
