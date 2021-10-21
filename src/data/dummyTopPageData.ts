const DummyTopPageData = () => {
  type DummyDataTmp = {
    pullRequwstName: string;
    repository: string;
  };

  const data1: DummyDataTmp = {
    pullRequwstName: 'ToDoのstate管理方法の変更',
    repository: 'git-baboo/minihackathon-a',
  };

  const data2: DummyDataTmp = {
    pullRequwstName: 'Feature/7 change todo state',
    repository: 'git-baboo/react-study-sugimizu',
  };

  const data3: DummyDataTmp = {
    pullRequwstName: '認証機能の実装',
    repository: 'zemi-team2/sake',
  };

  const dataset = [];

  dataset.push(data1);
  dataset.push(data2);
  dataset.push(data3);

  return dataset;
};

export default DummyTopPageData;
