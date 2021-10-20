import React from 'react';
// import { BiMessageAltDetail } from 'react-icons/bi';
import { BsLightningCharge } from 'react-icons/bs';

// 6行目の空いてる1行はeslint が自動生成して、消せなかった
import Layout from '@/components/Layout';

const TopPage = () => {
  return (
    <Layout text={`REVIEWボタンを押して\nさっそくレビューを開始しよう！`} icon={BsLightningCharge}>
      <h1>TopPage</h1>
    </Layout>
  );
};

export default TopPage;
