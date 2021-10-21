import React from 'react';
import { BsLightningCharge } from 'react-icons/bs';

import Layout from '@/components/Layout';

const TopPage = () => {
  return (
    <Layout text={`REVIEWボタンを押して\nさっそくレビューを開始しよう！`} icon={BsLightningCharge}>
      <h1>TopPage</h1>
    </Layout>
  );
};

export default TopPage;
