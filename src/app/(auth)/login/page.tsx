'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  // Hardcoded demo users with roles (remove/replace in production with real auth)
  const demoUsers = {
    'admin@hatchery.com': { password: 'admin123', role: 'admin', name: 'Admin User' },
    'moderator@hatchery.com': { password: 'mod123', role: 'moderator', name: 'Moderator User' },
    'hatchery@hatchery.com': { password: 'hatch123', role: 'hatchery_member', name: 'Hatchery Member' },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password');
      setLoading(false);
      return;
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = demoUsers[email as keyof typeof demoUsers];

    if (user && user.password === password) {
      // Success! Set role in cookie so middleware can read it
      document.cookie = `role=${user.role}; path=/; max-age=86400`; // 24 hours
      document.cookie = `userName=${encodeURIComponent(user.name)}; path=/; max-age=86400`;

      console.log('Login successful:', user.role);

      // Redirect based on role
      switch (user.role) {
        case 'admin':
          router.push('/admin/dashboard');
          break;
        case 'moderator':
          router.push('/moderator/dashboard');
          break;
        case 'hatchery_member':
          router.push('/hatchery/dashboard');
          break;
        default:
          setError('Invalid user role. Please contact administrator.');
      }
    } else {
      setError('Invalid email or password');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold">
            H
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your hatchery management system
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-sm rounded-xl border border-gray-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm"
                placeholder="you@hatchery.com"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black sm:text-sm"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm font-medium text-black hover:text-gray-800">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 space-y-3 text-sm text-gray-600">
            <p className="font-medium text-gray-800">Demo Accounts:</p>
            <ul className="space-y-2 text-xs bg-gray-50 p-4 rounded-lg">
              <li>
                <strong>Admin:</strong> admin@hatchery.com / <strong>admin123</strong>
              </li>
              <li>
                <strong>Moderator:</strong> moderator@hatchery.com / <strong>mod123</strong>
              </li>
              <li>
                <strong>Hatchery Member:</strong> hatchery@hatchery.com / <strong>hatch123</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}