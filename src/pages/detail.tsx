import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return <h1>{id}</h1>;
};

export default DetailPage;
