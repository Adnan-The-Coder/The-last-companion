'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      
      return;
    }
    
    // This is a mock registration - in a real app, you would connect to an auth service
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, just redirect to sign in page after "registration"
      router.push('/auth/signin');
    } catch (error) {
      console.error('Registration error:', error);
      setError('Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-b from-[#2D3142] to-[#4F5D75] py-12 sm:px-6 lg:px-8">
      <motion.div 
        className="sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mt-6 text-center font-serif text-3xl font-bold text-[#2D3142]">
          Create your <span className="text-[#EF8354]">account</span>
        </h2>
        <p className="mt-2 text-center text-sm text-[#4F5D75]">
          Or{' '}
          <Link href="/auth/signin" className="font-medium text-[#EF8354] transition-colors duration-300 hover:text-[#D64C1B]">
            sign in to your existing account
          </Link>
        </p>
      </motion.div>
      <motion.div 
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div 
          className="rounded-lg border border-gray-300 bg-white px-4 py-8 shadow-xl sm:px-10"
          whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
          transition={{ duration: 0.3 }}
        >
          {error && (
            <div className="mb-4 border-l-4 border-red-500 bg-red-50 p-4 text-red-700">
              <p>{error}</p>
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#2D3142]">
                Full name
              </label>
              <div className="mt-1">
                <motion.input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-[#BFC0C0]/30 px-3 py-2 text-black shadow-sm transition-colors duration-200 placeholder:text-[#4F5D75]/50 focus:border-[#EF8354] focus:outline-none focus:ring-[#EF8354] sm:text-sm"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#2D3142]">
                Email address
              </label>
              <div className="mt-1">
                <motion.input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-[#BFC0C0]/30 px-3 py-2 text-black shadow-sm transition-colors duration-200 placeholder:text-[#4F5D75]/50 focus:border-[#EF8354] focus:outline-none focus:ring-[#EF8354] sm:text-sm"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#2D3142]">
                Password
              </label>
              <div className="mt-1">
                <motion.input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-[#BFC0C0]/30 px-3 py-2 text-black shadow-sm transition-colors duration-200 placeholder:text-[#4F5D75]/50 focus:border-[#EF8354] focus:outline-none focus:ring-[#EF8354] sm:text-sm"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-[#2D3142]">
                Confirm password
              </label>
              <div className="mt-1">
                <motion.input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                  className="block w-full appearance-none rounded-md border border-[#BFC0C0]/30 px-3 py-2 text-black shadow-sm transition-colors duration-200 placeholder:text-[#4F5D75]/50 focus:border-[#EF8354] focus:outline-none focus:ring-[#EF8354] sm:text-sm"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="size-4 rounded border-[#BFC0C0]/30 text-[#EF8354] focus:ring-[#EF8354]"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-[#2D3142]">
                I agree to the{' '}
                <a href="#" className="font-medium text-[#EF8354] transition-colors duration-300 hover:text-[#D64C1B]">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium text-[#EF8354] transition-colors duration-300 hover:text-[#D64C1B]">
                  Privacy Policy
                </a>
              </label>
            </div>
            <div>
              <motion.button
                type="submit"
                disabled={loading}
                className="group relative flex w-full justify-center overflow-hidden rounded-md border border-transparent bg-[#EF8354] px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#EF8354]/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#EF8354] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">{loading ? 'Creating account...' : 'Create account'}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#EF8354]/80 to-[#D64C1B]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </motion.button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#BFC0C0]/30" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-[#4F5D75]">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="group relative inline-flex w-full justify-center overflow-hidden rounded-md border border-[#BFC0C0]/30 bg-white px-4 py-2 text-sm font-medium text-[#4F5D75] shadow-sm transition-colors duration-300 hover:border-[#BFC0C0]/50 hover:text-[#2D3142]"
                >
                  <span className="sr-only">Sign up with Google</span>
                  <svg className="size-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                  <span className="absolute inset-0 bg-[#BFC0C0]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="group relative inline-flex w-full justify-center overflow-hidden rounded-md border border-[#BFC0C0]/30 bg-white px-4 py-2 text-sm font-medium text-[#4F5D75] shadow-sm transition-colors duration-300 hover:border-[#BFC0C0]/50 hover:text-[#2D3142]"
                >
                  <span className="sr-only">Sign up with Facebook</span>
                  <svg className="size-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                  <span className="absolute inset-0 bg-[#BFC0C0]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
