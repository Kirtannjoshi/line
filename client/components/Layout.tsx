import React from 'react';
import Link from 'next/link';
import { useAuth } from '../utils/useAuth';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user, logout } = useAuth();
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
          {user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 Line App</p>
      </footer>
    </div>
  );
};

export default Layout;