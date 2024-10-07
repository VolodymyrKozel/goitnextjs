import Sidebar from '@/app/components/sidebar';
import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}

export default layout;
