import React from 'react';
const DataTable = dynamic(() => import('react-data-table-component'), {
  ssr: false,
});

import clsx from 'clsx';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

type Props = {
  data: any;
  columns?: any;
  className?: string;
};

export type DataTableProps = Props;
export const Table = ({
  data,
  columns,
  className,
  ...props
}: DataTableProps) => {
  return (
    <StyledTable className={clsx('image', className)}>
      <DataTable columns={columns} data={data} {...props} />
    </StyledTable>
  );
};

const StyledTable = styled.div``;
