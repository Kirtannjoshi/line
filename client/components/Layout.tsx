import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
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