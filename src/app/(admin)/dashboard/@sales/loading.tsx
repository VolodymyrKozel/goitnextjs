import Loader from '@/app/components/loader';
import LoadingSkeleton from '@/app/components/loading-skeleton';
import React from 'react';

interface Props {}

const loading = (props: Props) => {
  return (
    <LoadingSkeleton
      data={['Company', 'Sold', 'Income', 'Company', 'Sold', 'Income']}
    />
  );
};

export default loading;
