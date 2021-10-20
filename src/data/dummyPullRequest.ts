// TODO: delete file
import { PullRequest } from '@/types/PullRequestType';

export const pullRequest: PullRequest = {
  repoOwner: 'git-baboo',
  repoName: 'easy-review',
  title: 'ToDoのstate管理方法の変更',
  userName: 'kacha-122',
  avatarUrl: 'https://avatars.githubusercontent.com/u/68210096?v=4',
  comment: `## ✨ Summary
            <!-- 概要を記載する -->

            GitHub API から取得したデータをマークダウン形式で表示する部分の UI を実装する
            GitHub API との通信は必要なく、ダミーデータを用意してやってみる

            ## 🔥 Requirements
            <!-- 要件を記載する -->
            <!-- 例) 〇〇ができる、xxなときに△△する -->
            - マークダウン形式でデータが表示されること

            ## 📷 Screenshot
            <!-- 必要であればスクリーンショットを追加する -->

            ![image](https://user-images.githubusercontent.com/44804976/138014969-6cb8aeca-bdc8-4554-980a-6b4de03629bd.png)

            ## 📄 References
            <!-- 参考資料などを記載する -->
            \`react-markdown\`使ったら簡単そう？
            - https://github.com/remarkjs/react-markdown

            ## ✅ Tasks
            <!-- 必要な作業を記載する -->
            - [ ] xxx

            ## 複数行コードブロックの確認
            \`\`\`ts
            import { ChakraProvider } from '@chakra-ui/react';
            import React from 'react';
            import ReactDOM from 'react-dom';

            import Router from '@/components/Router';

            ReactDOM.render(
              <ChakraProvider>
                <React.StrictMode>
                  <Router />
                </React.StrictMode>
              </ChakraProvider>,
              document.getElementById('root')
            );

            \`\`\`

            `,
};
