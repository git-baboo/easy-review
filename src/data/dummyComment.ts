// TODO: delete file
export const dummyComment = `
# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6

  ---
  ## スタイル付きテキスト

  **太字**

  *斜体*

  ~~打ち消し線~~

  **強調**

  ***強調 + 斜体***

  ---
  ## テキストの引用

  > 引用
  >> 多重引用

  ---
  ## コード

  ### インライン

  これは \`インラインコード\` です。

  ### コードブロック

  \`\`\`
  git status
  git add
  git commit
  \`\`\`

  ### 言語識別子付き

  \`\`\`ts
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );
  \`\`\`

  ### Diff

  \`\`\`diff
  - old
  + new
  \`\`\`


  ---
  ## リスト

  - リスト1
    - リスト1_1
        - リスト1_1_1
        - リスト1_1_2
    - リスト1_2
  - リスト2
  - リスト3

  1. 番号付きリスト1
     1. 番号付きリスト1-1
     1. 番号付きリスト1-2
  1. 番号付きリスト2
  1. 番号付きリスト3

  ---
  ## リンク

  [GitHub](https://github.com/)

  ### リンク文字列 直書き

  https://github.com

  ### 相対リンク

  [このプロジェクトへのコントリビューションガイドライン](docs/CONTRIBUTING.md)

  ### コミットハッシュ

  ea18ba7a93bf3c75b554e5e73bf84621cd283956

  ---
  ## 折りたたみ

  <details>
  <summary>Summary</summary>
  details
  </details>

  ---
  ## 表

  | Left-aligned | Center-aligned | Right-aligned |
  | :---         |     :---:      |          ---: |
  | git status   | git status     | git status    |
  | git diff     | git diff       | git diff      |

  ---
  ## 画像

  ![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

  ---
  ## チェックボックス

  - [ ] Todo
  - [x] Done

  ---
  ## 人や Team のメンション

  @github/support これらのアップデートについてどう思いますか？

  ---
  ## Issue, PullRequest の参照

  #1

  ---
  ## 脚注

  Here is a simple footnote[^1].

  [^1]: My reference.

  ---
  ## コメントアウト

  <!-- コメントアウト -->

  `;
