'use client';

import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear auth token/session
    alert('Logged out successfully!');
    localStorage.removeItem('admin_token');
    // Redirect to login
    router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 w-full text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
    >
      <LogOut size={20} />
      <span className="font-medium">Logout</span>
    </button>
  );
}