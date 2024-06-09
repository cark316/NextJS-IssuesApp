'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { RiBug2Fill } from "react-icons/ri";
import classnames from 'classnames';

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);

  const links = [ 
    { label: 'Dashboard', href: '/'},
    { label: 'Issues', href: '/issues'}
  ]
  
  return (
    <nav className='flex items-center space-x-6 border-b mb-5 px-5 h-14'>
        <Link href="/"><RiBug2Fill /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => <Link 
                key={link.href} 
                className={classnames({
                    'text-zinc-900': link.href === currentPath,
                    'text-zinc-500': link.href !== currentPath,
                    'hover:text-zinc-800 transition-colors': true
                })} 
                href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default Navbar