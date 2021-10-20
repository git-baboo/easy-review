import React from 'react';
import { IconType } from 'react-icons';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { BiMessageAltDetail, BiAward } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';

// TODO: 後に削除  作業用にimportしているため
import Layout from '@/components/Layout';

const TopPage = () => {
  const pageNumber = Math.floor(Math.random() * 3);
  console.log(pageNumber);
  let text: string;
  let icon: IconType;

  if (pageNumber === 0) {
    text = `あなた宛にレビュー依頼が届いているよ👀\nレビューするプルリクエストを選んでみよう！`;
    icon = BsFillCheckCircleFill;
  } else if (pageNumber === 1) {
    text = `REVIEWボタンを押して\nさっそくレビューを開始しよう！`;
    icon = AiOutlineThunderbolt;
  } else if (pageNumber === 2) {
    text = `テンプレートを使って\nレビューしてみよう！`;
    icon = BiMessageAltDetail;
  } else {
    text = `極稀にみる確率だー！`;
    icon = BiAward;
  }

  return (
    <Layout text={text} icon={icon}>
      <div>TopPage</div>
    </Layout>
  );
};

export default TopPage;
