'use client';
import CompanyForm from '@/app/components/company-form';
import Modal from '@/app/components/modal';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {}

function Page({}: Props) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
}

export default Page;
