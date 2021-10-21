const DummyTopPageData = () => {
  type DummyDataTmp = {
    title: string;
    directory: string;
  };

  const data1: DummyDataTmp = {
    title: 'ToDoのstate管理方法の変更',
    directory: 'git-baboo/minihackathon-a',
  };

  const data2: DummyDataTmp = {
    title: 'Feature/7 change todo state',
    directory: 'git-baboo/react-study-sugimizu',
  };

  const data3: DummyDataTmp = {
    title: '認証機能の実装',
    directory: 'zemi-team2/sake',
  };

  const dataset = [];

  dataset.push(data1);
  dataset.push(data2);
  dataset.push(data3);

  return dataset;
};

export default DummyTopPageData;
