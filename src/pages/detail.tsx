import React from 'react';
import { useParams } from 'react-router-dom';

import TimelineItem from '@/components/detail/TimelineItem';
import { dummyComment } from '@/components/detail/dummyComment';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const comment = dummyComment;

  return (
    <>
      <h1>{id}</h1>
      <TimelineItem comment={comment} />
    </>
  );
};

export default DetailPage;
