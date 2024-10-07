// LoadingSkeleton.tsx

'use client';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SummaryTable from './summary-table';
import SummaryTableHeader from './summary-table-header';
import DashboardCard from './dashboard-card';
import SummaryTableCell from './summary-table-cell';

export interface LoadingSkeletonProps {
  data: string[];
}

function LoadingSkeleton({ data }: LoadingSkeletonProps) {
  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map((item) => (
          <tr key={item}>
            <SummaryTableCell>
              <Skeleton />
            </SummaryTableCell>
            <SummaryTableCell align="center">
              <Skeleton />
            </SummaryTableCell>
            <SummaryTableCell align="center">
              <Skeleton />
            </SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}

export default LoadingSkeleton;
