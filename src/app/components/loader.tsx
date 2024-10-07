'use client';
import React from 'react';
import { Grid } from 'react-loader-spinner';

interface Props {}

function Loader({}: Props) {
  return (
    <div className="h-full flex items-center justify-center">
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}

export default Loader;
