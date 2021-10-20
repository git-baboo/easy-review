import React from 'react';
import { useParams } from 'react-router-dom';

import TimelineItem from '@/components/detail/TimelineItem';
import { dummyComment as comment } from '@/data/dummyComment';

const DetailPage = () => {
  const { owner, repo, pullNumber } =
    useParams<{ owner: string; repo: string; pullNumber: string }>();
  return (
    <>
      <p>
        owner:{owner}
        <br />
        repo:{repo}
        <br />
        pullNumber:{pullNumber}
        <br />
      </p>
      <TimelineItem comment={comment} />
    </>
  );
};

export default DetailPage;
