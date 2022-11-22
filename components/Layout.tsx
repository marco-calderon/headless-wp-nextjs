import React from 'react';
import Navbar from './Navbar';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
