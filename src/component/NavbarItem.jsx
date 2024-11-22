'use client';
import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavbarLink title={title} param={param} />
    </Suspense>
  );
}

function NavbarLink({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  
  return (
    <div>
      <Link 
        className={`hover:text-amber-600 font-bold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-700 rounded-lg' : ''}`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
