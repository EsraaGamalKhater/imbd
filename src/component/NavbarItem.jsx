'use client';
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  
    return (
        <div>
            <Link 
                className={`hover:text-amber-600 font-bold ${ genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-700 rounded-lg' : ''}`} 
                href={`/?genre=${param}`} 
                aria-current={genre === param ? 'page' : undefined}>
                {title}
            </Link>
        </div>
    );
}
