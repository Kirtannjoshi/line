import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</nLink>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        {/* Footer content will go here */}
      </footer>
    </div>
  );
};

export default Layout;