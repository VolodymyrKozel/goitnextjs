'use client';
import React from 'react';

interface Props {
  error: Error;
}

function error({ error }: Props) {
  return <div>Unexpact error in slot sales page {error.message}</div>;
}

export default error;
