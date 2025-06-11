// app/components/Navbar.tsx or inside layout.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/pages/home">Home</Link> | <Link href="/pages/about">About</Link> | <Link href="/pages/contact">Contact</Link>
    </nav>
  );
}