import React from 'react';
import { useParams } from 'react-router-dom';

import TimelineItem from '@/components/detail/TimelineItem';
import { dummyComment as comment } from '@/data/dummyComment';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h1>{id}</h1>
      <TimelineItem comment={comment} />
    </>
  );
};

export default DetailPage;
