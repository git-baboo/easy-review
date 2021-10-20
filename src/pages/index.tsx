import React from 'react';
import { BiMessageAltDetail } from 'react-icons/bi';

import Layout from '@/components/Layout';

const TopPage = () => {
  return (
    <Layout text={`テンプレートを使ってレビューしてみよう！`} icon={BiMessageAltDetail}>
      <h1>TopPage</h1>
    </Layout>
  );
};

export default TopPage;
