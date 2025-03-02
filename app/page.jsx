'use-client';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl">Home</h1>
            <Link href="/properties">Properties</Link>
        </div>
    );
}
