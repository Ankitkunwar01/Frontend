'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export default function NavItem({ href, icon: Icon, label }: NavItemProps) {
  const pathname = usePathname();
  
  // Better active state checking
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
        ${isActive 
          ? 'bg-blue-600 text-white' 
          : 'hover:bg-gray-800 text-gray-300'
        }
      `}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </Link>
  );
}