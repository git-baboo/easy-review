import React from 'react';
import { useParams } from 'react-router-dom';

import TimelineItem from '@/components/detail/TimelineItem';
import { dummyComment as comment } from '@/data/dummyComment';

type Path = {
  owner: string;
  repo: string;
  pullNumber: string;
};

const DetailPage = () => {
  const { owner, repo, pullNumber } = useParams<Path>();
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
