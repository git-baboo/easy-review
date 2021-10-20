import React from 'react';
import { IconType } from 'react-icons';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { BiMessageAltDetail, BiAward } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';

// 6行目の空いてる1行はeslint が自動生成して、消せなかった
import Layout from '@/components/Layout';

const TopPage = () => {
  // TODO: 12行目～28行目は動作確認用で後に削除する
  const pageNumber = Math.floor(Math.random() * 3);
  let text: string;
  let icon: IconType;

  if (pageNumber === 0) {
    text = `あなた宛にレビュー依頼が届いているよ👀\nレビューするプルリクエストを選んでみよう！`;
    icon = BsFillCheckCircleFill;
  } else if (pageNumber === 1) {
    text = `REVIEWボタンを押して\nさっそくレビューを開始しよう！`;
    icon = AiOutlineThunderbolt;
  } else if (pageNumber === 2) {
    text = `テンプレートを使ってレビューしてみよう！`;
    icon = BiMessageAltDetail;
  } else {
    text = `極稀にみる確率だー！`;
    icon = BiAward;
  }

  return (
    <Layout text={text} icon={icon}>
      <h1>TopPage</h1>
    </Layout>
  );
};

export default TopPage;
