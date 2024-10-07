import Header from '@/app/components/header';
import React from 'react';

export interface DashboardProps {}

function Page({}: DashboardProps) {
  return (
    <>
      <Header>Dashboard / new Company</Header>
      <div>some additional content</div>
    </>
  );
}

export default Page;
