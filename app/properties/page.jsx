'use-client';
import Link from 'next/link';

export default function PropertiesPage() {
    console.log('Hello Server');

    return (
        <div>
            <h1 className="text-3xl">Properties</h1>
            <Link href="/">Go Home</Link>
        </div>
    );
}
