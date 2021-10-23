export const dummyDiff = `
diff --git a/package.json b/package.json
index 64b38e8..5594c84 100644
--- a/package.json
+++ b/package.json
@@ -22,6 +22,7 @@
     "@types/node": "^12.0.0",
     "@types/react": "^17.0.0",
     "@types/react-dom": "^17.0.0",
+    "@types/react-syntax-highlighter": "^13.5.2",
     "chakra-ui-markdown-renderer": "^3.0.1",
     "firebase": "^9.1.3",
     "framer-motion": "^4.1.17",
@@ -30,6 +31,8 @@
     "react-icons": "^4.3.1",
     "react-markdown": "^7.0.1",
     "react-scripts": "4.0.3",
+    "react-syntax-highlighter": "^15.4.4",
+    "remark-gfm": "^3.0.0",
     "typescript": "^4.1.2",
     "web-vitals": "^1.0.1"
   },
diff --git a/src/components/detail/TimelineItem.tsx b/src/components/detail/TimelineItem.tsx
index 4b881b9..2bd4d6d 100644
--- a/src/components/detail/TimelineItem.tsx
+++ b/src/components/detail/TimelineItem.tsx
@@ -1,19 +1,52 @@
 import { Box, BoxProps } from '@chakra-ui/layout';
 import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
 import ReactMarkdown from 'react-markdown';
+import remarkGfm from 'remark-gfm';
+
+import CheckboxTheme from '@/components/detail/theme/CheckboxTheme';
+import CodeTheme from '@/components/detail/theme/CodeTheme';
+import DividerTheme from '@/components/detail/theme/DividerTheme';
+import HeadingTheme from '@/components/detail/theme/HeaderTheme';
+import LinkTheme from '@/components/detail/theme/LinkTheme';
+import QuoteTheme from '@/components/detail/theme/QuoteTheme';

 type CustomProps = {
-  comment: string;
+  comment: string | null;
 };

 type Props = BoxProps & CustomProps;

 const TimelineItem = ({ comment, ...boxProps }: Props) => {
-  return (
-    <Box {...boxProps}>
-      <ReactMarkdown components={ChakraUIRenderer()}>{comment}</ReactMarkdown>
-    </Box>
-  );
+  // eslint-disable-next-line @typescript-eslint/no-explicit-any
+  const customTheme: any = {
+    h1: HeadingTheme,
+    h2: HeadingTheme,
+    h3: HeadingTheme,
+    h4: HeadingTheme,
+    h5: HeadingTheme,
+    h6: HeadingTheme,
+    code: CodeTheme,
+    blockquote: QuoteTheme,
+    hr: DividerTheme,
+    a: LinkTheme,
+    input: CheckboxTheme,
+  };
+
+  if (comment) {
+    return (
+      <Box {...boxProps}>
+        <ReactMarkdown
+          skipHtml={true}
+          components={ChakraUIRenderer(customTheme)}
+          remarkPlugins={[remarkGfm]}
+        >
+          {comment}
+        </ReactMarkdown>
+      </Box>
+    );
+  } else {
+    return <></>;
+  }
 };

 export default TimelineItem;
diff --git a/src/components/detail/theme/CheckboxTheme.tsx b/src/components/detail/theme/CheckboxTheme.tsx
new file mode 100644
index 0000000..98f7bdf
--- /dev/null
+++ b/src/components/detail/theme/CheckboxTheme.tsx
@@ -0,0 +1,12 @@
+import { Text } from '@chakra-ui/layout';
+import { ReactNode } from 'react';
+
+type Props = {
+  children: ReactNode;
+};
+
+const CheckboxTheme = ({ children }: Props) => {
+  return <Text>{children}</Text>;
+};
+
+export default CheckboxTheme;
diff --git a/src/components/detail/theme/CodeTheme.tsx b/src/components/detail/theme/CodeTheme.tsx
new file mode 100644
index 0000000..ef61d24
--- /dev/null
+++ b/src/components/detail/theme/CodeTheme.tsx
@@ -0,0 +1,30 @@
+import { Code } from '@chakra-ui/layout';
+import { ReactNode } from 'react';
+import SyntaxHighlighter from 'react-syntax-highlighter';
+import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
+
+type Props = {
+  inline: boolean; // インラインかコードブロックか
+  className: string; // コードブロックに指定した言語名 (prefix: 'language-')
+  children: ReactNode;
+};
+
+const CodeTheme = ({ inline, className, children }: Props) => {
+  // 正規表現で言語名を抽出する (ex. 'language-ts' -> 'ts')
+  // 正規表現にマッチした場合、配列が返り、言語名は match[1] に入る
+  // マッチしなかった場合、null が返る
+  const match = /language-(\\w+)/.exec(className || '');
+  const langage = match != null ? match[1] : '';
+
+  return inline ? (
+    // インラインコード
+    <Code>{children}</Code>
+  ) : (
+    // コードブロック
+    <SyntaxHighlighter style={github} language={langage} PreTag="div">
+      {String(children).replace(/\\n$/, '')}
+    </SyntaxHighlighter>
+  );
+};
+
+export default CodeTheme;
diff --git a/src/components/detail/theme/DividerTheme.tsx b/src/components/detail/theme/DividerTheme.tsx
new file mode 100644
index 0000000..757a5b2
--- /dev/null
+++ b/src/components/detail/theme/DividerTheme.tsx
@@ -0,0 +1,7 @@
+import { Divider } from '@chakra-ui/layout';
+
+const DividerTheme = () => {
+  return <Divider borderColor="gray.300" borderWidth={2} my={4} />;
+};
+
+export default DividerTheme;
diff --git a/src/components/detail/theme/HeaderTheme.tsx b/src/components/detail/theme/HeaderTheme.tsx
new file mode 100644
index 0000000..7ed4d5d
--- /dev/null
+++ b/src/components/detail/theme/HeaderTheme.tsx
@@ -0,0 +1,50 @@
+import { Heading } from '@chakra-ui/react';
+import { ReactNode } from 'react';
+
+type Props = {
+  level: number;
+  children: ReactNode;
+};
+
+const HeadingTheme = ({ level, children }: Props) => {
+  switch (level) {
+    case 1:
+      return (
+        <Heading as="h1" my={4} pb={2} size="xl" borderBottom="1px" borderColor="gray.300">
+          {children}
+        </Heading>
+      );
+    case 2:
+      return (
+        <Heading as="h2" my={4} pb={2} size="lg" borderBottom="1px" borderColor="gray.300">
+          {children}
+        </Heading>
+      );
+    case 3:
+      return (
+        <Heading as="h3" my={4} size="md">
+          {children}
+        </Heading>
+      );
+    case 4:
+      return (
+        <Heading as="h4" my={4} size="sm">
+          {children}
+        </Heading>
+      );
+    case 5:
+      return (
+        <Heading as="h5" my={4} size="xs">
+          {children}
+        </Heading>
+      );
+    case 6:
+      return (
+        <Heading as="h6" my={4} size="xs" color="gray.500">
+          {children}
+        </Heading>
+      );
+  }
+};
+
+export default HeadingTheme;
diff --git a/src/components/detail/theme/LinkTheme.tsx b/src/components/detail/theme/LinkTheme.tsx
new file mode 100644
index 0000000..116c568
--- /dev/null
+++ b/src/components/detail/theme/LinkTheme.tsx
@@ -0,0 +1,17 @@
+import { Link } from '@chakra-ui/react';
+import { ReactNode } from 'react';
+
+type Props = {
+  href: string;
+  children: ReactNode;
+};
+
+const LinkTheme = ({ href, children }: Props) => {
+  return (
+    <Link color="blue.500" href={href}>
+      {children}
+    </Link>
+  );
+};
+
+export default LinkTheme;
diff --git a/src/components/detail/theme/QuoteTheme.tsx b/src/components/detail/theme/QuoteTheme.tsx
new file mode 100644
index 0000000..0d6db69
--- /dev/null
+++ b/src/components/detail/theme/QuoteTheme.tsx
@@ -0,0 +1,16 @@
+import { Box } from '@chakra-ui/layout';
+import { ReactNode } from 'react';
+
+type Props = {
+  children: ReactNode;
+};
+
+const QuoteTheme = ({ children }: Props) => {
+  return (
+    <Box pl={3} borderLeft="4px" borderColor="gray.300">
+      {children}
+    </Box>
+  );
+};
+
+export default QuoteTheme;
diff --git a/src/data/dummyPullRequest.ts b/src/data/dummyPullRequest.ts
deleted file mode 100644
index 0b9331d..0000000
--- a/src/data/dummyPullRequest.ts
+++ /dev/null
@@ -1,54 +0,0 @@
-// TODO: delete file
-import { PullRequest } from '@/types/PullRequestType';
-
-export const pullRequest: PullRequest = {
-  title: 'ToDoのstate管理方法の変更',
-  userName: 'kacha-122',
-  avatarUrl: 'https://avatars.githubusercontent.com/u/68210096?v=4',
-  comment: \`
-  ## ✨ Summary
-  <!-- 概要を記載する -->
-
-  GitHub API から取得したデータをマークダウン形式で表示する部分の UI を実装する
-  GitHub API との通信は必要なく、ダミーデータを用意してやってみる
-
-  ## 🔥 Requirements
-  <!-- 要件を記載する -->
-  <!-- 例) 〇〇ができる、xxなときに△△する -->
-  - マークダウン形式でデータが表示されること
-
-  ## 📷 Screenshot
-  <!-- 必要であればスクリーンショットを追加する -->
-
-  ![image](https://user-images.githubusercontent.com/44804976/138014969-6cb8aeca-bdc8-4554-980a-6b4de03629bd.png)
-
-  ## 📄 References
-  <!-- 参考資料などを記載する -->
-  \`react-markdown\`使ったら簡単そう？
-  - https://github.com/remarkjs/react-markdown
-
-  ## ✅ Tasks
-  <!-- 必要な作業を記載する -->
-  - [ ] xxx
-
-  ## 複数行コードブロックの確認
-  \`\`\`ts
-  import { ChakraProvider } from '@chakra-ui/react';
-  import React from 'react';
-  import ReactDOM from 'react-dom';
-
-  import Router from '@/components/Router';
-
-  ReactDOM.render(
-    <ChakraProvider>
-      <React.StrictMode>
-        <Router />
-      </React.StrictMode>
-    </ChakraProvider>,
-    document.getElementById('root')
-  );
-
-  \`\`\`
-
-  \`,
-};
diff --git a/src/pages/detail.tsx b/src/pages/detail.tsx
index 4acee49..fecfcee 100644
--- a/src/pages/detail.tsx
+++ b/src/pages/detail.tsx
@@ -1,5 +1,6 @@
 import { Container, Heading, Text } from '@chakra-ui/layout';
-import React from 'react';
+import { Octokit } from '@octokit/rest';
+import React, { useEffect, useState } from 'react';
 import { AiOutlineThunderbolt } from 'react-icons/ai';
 import { useParams } from 'react-router-dom';

@@ -7,7 +8,7 @@ import Layout from '@/components/Layout';
 import ReviewButton from '@/components/detail/ReviewButton';
 import Reviewee from '@/components/detail/Reviewee';
 import TimelineItem from '@/components/detail/TimelineItem';
-import { pullRequest } from '@/data/dummyPullRequest';
+import { PullRequest } from '@/types/PullRequestType';

 type Path = {
   owner: string;
@@ -15,11 +16,39 @@ type Path = {
   pullNumber: string;
 };

+// TODO: octokit の宣言を抽象化する
+const octokit = new Octokit({
+  auth: process.env.REACT_APP_TOKEN,
+});
+
+const initialPullRequest: PullRequest = {
+  title: '',
+  userName: '',
+  avatarUrl: '',
+  comment: '',
+};
+
 const DetailPage = () => {
-  // TODO: eslint の例外設定を削除
-  // eslint-disable-next-line @typescript-eslint/no-unused-vars
+  const [pullRequest, setPullRequest] = useState<PullRequest>(initialPullRequest);
   const { owner, repo, pullNumber } = useParams<Path>();

+  useEffect(() => {
+    octokit
+      .request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
+        owner: owner,
+        repo: repo,
+        pull_number: Number(pullNumber), // NOTE: useParams の型定義は string でなければならない
+      })
+      .then((res) => {
+        setPullRequest({
+          title: res.data.title,
+          userName: res.data.assignee?.login,
+          avatarUrl: res.data.assignee?.avatar_url,
+          comment: res.data.body,
+        });
+      });
+  }, []);
+
   return (
     <Layout
       text={\`REVIEWボタンを押して\nさっそくレビューを開始しよう！\`}
diff --git a/src/types/PullRequestType.ts b/src/types/PullRequestType.ts
index 847b7ae..2236c80 100644
--- a/src/types/PullRequestType.ts
+++ b/src/types/PullRequestType.ts
@@ -1,6 +1,6 @@
 export type PullRequest = {
   title: string;
-  userName: string;
-  avatarUrl: string;
-  comment: string;
+  userName: string | undefined;
+  avatarUrl: string | undefined;
+  comment: string | null;
 };
diff --git a/yarn.lock b/yarn.lock
index a74f667..3dfc066 100644
--- a/yarn.lock
+++ b/yarn.lock
@@ -1157,7 +1157,7 @@
   dependencies:
     regenerator-runtime "^0.13.4"

-"@babel/runtime@^7.0.0", "@babel/runtime@^7.1.2", "@babel/runtime@^7.10.2", "@babel/runtime@^7.11.2", "@babel/runtime@^7.12.1", "@babel/runtime@^7.12.13", "@babel/runtime@^7.12.5", "@babel/runtime@^7.13.10", "@babel/runtime@^7.5.5", "@babel/runtime@^7.7.2", "@babel/runtime@^7.8.4", "@babel/runtime@^7.9.2":
+"@babel/runtime@^7.0.0", "@babel/runtime@^7.1.2", "@babel/runtime@^7.10.2", "@babel/runtime@^7.11.2", "@babel/runtime@^7.12.1", "@babel/runtime@^7.12.13", "@babel/runtime@^7.12.5", "@babel/runtime@^7.13.10", "@babel/runtime@^7.3.1", "@babel/runtime@^7.5.5", "@babel/runtime@^7.7.2", "@babel/runtime@^7.8.4", "@babel/runtime@^7.9.2":
   version "7.15.4"
   resolved "https://registry.yarnpkg.com/@babel/runtime/-/runtime-7.15.4.tgz#fd17d16bfdf878e6dd02d19753a39fa8a8d9c84a"
   integrity sha512-99catp6bHCaxr4sJ/DbTGgHS4+Rs2RVd2g7iOap6SLGPDknRK9ztKNsE/Fg6QhSeh1FGE5f6gHGQmvvn3I3xhw==
@@ -3122,7 +3122,7 @@
   resolved "https://registry.yarnpkg.com/@types/long/-/long-4.0.1.tgz#459c65fa1867dafe6a8f322c4c51695663cc55e9"
   integrity sha512-5tXH6Bx/kNGd3MgffdmP4dy2Z+G4eaXw0SE81Tq3BNadtnMR5/ySMzX4SLEzHJzSmPNn4HIdpQsBvXMUykr58w==

-"@types/mdast@^3.0.0":
+"@types/mdast@^3.0.0", "@types/mdast@^3.0.3":
   version "3.0.10"
   resolved "https://registry.yarnpkg.com/@types/mdast/-/mdast-3.0.10.tgz#4724244a82a4598884cbbe9bcfd73dff927ee8af"
   integrity sha512-W864tg/Osz1+9f4lrGTZpCSO5/z4608eUp19tbozkq2HJK6i3z1kT0H9tlADXuYIb1YYOBByU4Jsqkk75q48qA==
@@ -3145,9 +3145,9 @@
   integrity sha512-iiUgKzV9AuaEkZqkOLDIvlQiL6ltuZd9tGcW3gwpnX8JbuiuhFlEGmmFXEXkN50Cvq7Os88IY2v0dkDqXYWVgA==

 "@types/node@*", "@types/node@>=12.12.47", "@types/node@>=13.7.0":
-  version "16.11.2"
-  resolved "https://registry.yarnpkg.com/@types/node/-/node-16.11.2.tgz#31c249c136c3f9b35d4b60fb8e50e01a1f0cc9a5"
-  integrity sha512-w34LtBB0OkDTs19FQHXy4Ig/TOXI4zqvXS2Kk1PAsRKZ0I+nik7LlMYxckW0tSNGtvWmzB+mrCTbuEjuB9DVsw==
+  version "16.11.3"
+  resolved "https://registry.yarnpkg.com/@types/node/-/node-16.11.3.tgz#fad0b069ec205b0e81429c805d306d2c12e26be1"
+  integrity sha512-aIYL9Eemcecs1y77XzFGiSc+FdfN58k4J23UEe6+hynf4Wd9g4DzQPwIKL080vSMuubFqy2hWwOzCtJdc6vFKw==

 "@types/node@^12.0.0":
   version "12.20.33"
@@ -3203,6 +3203,13 @@
     "@types/history" "*"
     "@types/react" "*"

+"@types/react-syntax-highlighter@^13.5.2":
+  version "13.5.2"
+  resolved "https://registry.yarnpkg.com/@types/react-syntax-highlighter/-/react-syntax-highlighter-13.5.2.tgz#357cc03581dc434c57c3b31f70e0eecdbf7b3ab0"
+  integrity sha512-sRZoKZBGKaE7CzMvTTgz+0x/aVR58ZYUTfB7HN76vC+yQnvo1FWtzNARBt0fGqcLGEVakEzMu/CtPzssmanu8Q==
+  dependencies:
+    "@types/react" "*"
+
 "@types/react@*", "@types/react@^17.0.0":
   version "17.0.31"
   resolved "https://registry.yarnpkg.com/@types/react/-/react-17.0.31.tgz#fe05ebf91ff3ae35bb6b13f6c1b461db8089dff8"
@@ -4569,6 +4576,11 @@ case-sensitive-paths-webpack-plugin@2.3.0:
   resolved "https://registry.yarnpkg.com/case-sensitive-paths-webpack-plugin/-/case-sensitive-paths-webpack-plugin-2.3.0.tgz#23ac613cc9a856e4f88ff8bb73bbb5e989825cf7"
   integrity sha512-/4YgnZS8y1UXXmC02xD5rRrBEu6T5ub+mQHLNRj0fzTRbgdBYhsNo2V5EqwgqrExjxsjtF/OpAKAMkKsxbD5XQ==

+ccount@^2.0.0:
+  version "2.0.0"
+  resolved "https://registry.yarnpkg.com/ccount/-/ccount-2.0.0.tgz#3d6fb55803832766a24c6f339abc507297eb5d25"
+  integrity sha512-VOR0NWFYX65n9gELQdcpqsie5L5ihBXuZGAgaPEp/U7IOSjnPMEH6geE+2f6lcekaNEfWzAHS45mPvSo5bqsUA==
+
 chakra-ui-markdown-renderer@^3.0.1:
   version "3.0.1"
   resolved "https://registry.yarnpkg.com/chakra-ui-markdown-renderer/-/chakra-ui-markdown-renderer-3.0.1.tgz#5a8afb650a1fadfb3219dd0fe388c1491aa1f6ee"
@@ -4606,16 +4618,31 @@ char-regex@^1.0.2:
   resolved "https://registry.yarnpkg.com/char-regex/-/char-regex-1.0.2.tgz#d744358226217f981ed58f479b1d6bcc29545dcf"
   integrity sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw==

+character-entities-legacy@^1.0.0:
+  version "1.1.4"
+  resolved "https://registry.yarnpkg.com/character-entities-legacy/-/character-entities-legacy-1.1.4.tgz#94bc1845dce70a5bb9d2ecc748725661293d8fc1"
+  integrity sha512-3Xnr+7ZFS1uxeiUDvV02wQ+QDbc55o97tIV5zHScSPJpcLm/r0DFPcoY3tYRp+VZukxuMeKgXYmsXQHO05zQeA==
+
 character-entities-legacy@^2.0.0:
   version "2.0.0"
   resolved "https://registry.yarnpkg.com/character-entities-legacy/-/character-entities-legacy-2.0.0.tgz#57f4d00974c696e8f74e9f493e7fcb75b44d7ee7"
   integrity sha512-YwaEtEvWLpFa6Wh3uVLrvirA/ahr9fki/NUd/Bd4OR6EdJ8D22hovYQEOUCBfQfcqnC4IAMGMsHXY1eXgL4ZZA==

+character-entities@^1.0.0:
+  version "1.2.4"
+  resolved "https://registry.yarnpkg.com/character-entities/-/character-entities-1.2.4.tgz#e12c3939b7eaf4e5b15e7ad4c5e28e1d48c5b16b"
+  integrity sha512-iBMyeEHxfVnIakwOuDXpVkc54HijNgCyQB2w0VfGQThle6NXn50zU6V/u+LDhxHcDUPojn6Kpga3PTAD8W1bQw==
+
 character-entities@^2.0.0:
   version "2.0.0"
   resolved "https://registry.yarnpkg.com/character-entities/-/character-entities-2.0.0.tgz#508355fcc8c73893e0909efc1a44d28da2b6fdf3"
   integrity sha512-oHqMj3eAuJ77/P5PaIRcqk+C3hdfNwyCD2DAUcD5gyXkegAuF2USC40CEqPscDk4I8FRGMTojGJQkXDsN5QlJA==

+character-reference-invalid@^1.0.0:
+  version "1.1.4"
+  resolved "https://registry.yarnpkg.com/character-reference-invalid/-/character-reference-invalid-1.1.4.tgz#083329cda0eae272ab3dbbf37e9a382c13af1560"
+  integrity sha512-mKKUkUbhPpQlCOfIuZkvSEgktjPFIsZKRRbC6KWVEMvlzblj3i3asQv5ODsrwt0N3pHAEvjP8KTQPHkp0+6jOg==
+
 character-reference-invalid@^2.0.0:
   version "2.0.0"
   resolved "https://registry.yarnpkg.com/character-reference-invalid/-/character-reference-invalid-2.0.0.tgz#a0bdeb89c051fe7ed5d3158b2f06af06984f2813"
@@ -4816,6 +4843,11 @@ combined-stream@^1.0.8:
   dependencies:
     delayed-stream "~1.0.0"

+comma-separated-tokens@^1.0.0:
+  version "1.0.8"
+  resolved "https://registry.yarnpkg.com/comma-separated-tokens/-/comma-separated-tokens-1.0.8.tgz#632b80b6117867a158f1080ad498b2fbe7e3f5ea"
+  integrity sha512-GHuDRO12Sypu2cV70d1dkA2EUmXHgntrzbpvOB+Qy+49ypNfGgFQIC2fhhXbnyrJRynDCAARsT7Ou0M6hirpfw==
+
 comma-separated-tokens@^2.0.0:
   version "2.0.2"
   resolved "https://registry.yarnpkg.com/comma-separated-tokens/-/comma-separated-tokens-2.0.2.tgz#d4c25abb679b7751c880be623c1179780fe1dd98"
@@ -5938,6 +5970,11 @@ escape-string-regexp@^4.0.0:
   resolved "https://registry.yarnpkg.com/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz#14ba83a5d373e3d311e5afca29cf5bfad965bf34"
   integrity sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==

+escape-string-regexp@^5.0.0:
+  version "5.0.0"
+  resolved "https://registry.yarnpkg.com/escape-string-regexp/-/escape-string-regexp-5.0.0.tgz#4683126b500b61762f2dbebace1806e8be31b1c8"
+  integrity sha512-/veY75JbMK4j1yjvuUxuVsiS/hr/4iHs9FTT6cgTexxdE0Ly/glccBAkloH/DofkjRbZU3bnoj38mOmhkZ0lHw==
+
 escodegen@^2.0.0:
   version "2.0.0"
   resolved "https://registry.yarnpkg.com/escodegen/-/escodegen-2.0.0.tgz#5e32b12833e8aa8fa35e1bf0befa89380484c7dd"
@@ -6428,6 +6465,13 @@ fastq@^1.6.0:
   dependencies:
     reusify "^1.0.4"

+fault@^1.0.0:
+  version "1.0.4"
+  resolved "https://registry.yarnpkg.com/fault/-/fault-1.0.4.tgz#eafcfc0a6d214fc94601e170df29954a4f842f13"
+  integrity sha512-CJ0HCB5tL5fYTEA7ToAq5+kTwd++Borf1/bifxd9iT70QcXr4MRrO3Llf8Ifs70q+SJcGHFtnIE/Nw6giCtECA==
+  dependencies:
+    format "^0.2.0"
+
 faye-websocket@0.11.4, faye-websocket@^0.11.3:
   version "0.11.4"
   resolved "https://registry.yarnpkg.com/faye-websocket/-/faye-websocket-0.11.4.tgz#7f0d9275cfdd86a1c963dc8b65fcc451edcbb1da"
@@ -6644,6 +6688,11 @@ form-data@^3.0.0:
     combined-stream "^1.0.8"
     mime-types "^2.1.12"

+format@^0.2.0:
+  version "0.2.2"
+  resolved "https://registry.yarnpkg.com/format/-/format-0.2.2.tgz#d6170107e9efdc4ed30c9dc39016df942b5cb58b"
+  integrity sha1-1hcBB+nv3E7TDJ3DkBbflCtctYs=
+
 forwarded@0.2.0:
   version "0.2.0"
   resolved "https://registry.yarnpkg.com/forwarded/-/forwarded-0.2.0.tgz#2269936428aad4c15c7ebe9779a84bf0b2a81811"
@@ -7023,11 +7072,27 @@ hash.js@^1.0.0, hash.js@^1.0.3:
     inherits "^2.0.3"
     minimalistic-assert "^1.0.1"

+hast-util-parse-selector@^2.0.0:
+  version "2.2.5"
+  resolved "https://registry.yarnpkg.com/hast-util-parse-selector/-/hast-util-parse-selector-2.2.5.tgz#d57c23f4da16ae3c63b3b6ca4616683313499c3a"
+  integrity sha512-7j6mrk/qqkSehsM92wQjdIgWM2/BW61u/53G6xmC8i1OmEdKLHbk419QKQUjz6LglWsfqoiHmyMRkP1BGjecNQ==
+
 hast-util-whitespace@^2.0.0:
   version "2.0.0"
   resolved "https://registry.yarnpkg.com/hast-util-whitespace/-/hast-util-whitespace-2.0.0.tgz#4fc1086467cc1ef5ba20673cb6b03cec3a970f1c"
   integrity sha512-Pkw+xBHuV6xFeJprJe2BBEoDV+AvQySaz3pPDRUs5PNZEMQjpXJJueqrpcHIXxnWTcAGi/UOCgVShlkY6kLoqg==

+hastscript@^6.0.0:
+  version "6.0.0"
+  resolved "https://registry.yarnpkg.com/hastscript/-/hastscript-6.0.0.tgz#e8768d7eac56c3fdeac8a92830d58e811e5bf640"
+  integrity sha512-nDM6bvd7lIqDUiYEiu5Sl/+6ReP0BMk/2f4U/Rooccxkj0P5nm+acM5PrGJ/t5I8qPGiqZSE6hVAwZEdZIvP4w==
+  dependencies:
+    "@types/hast" "^2.0.0"
+    comma-separated-tokens "^1.0.0"
+    hast-util-parse-selector "^2.0.0"
+    property-information "^5.0.0"
+    space-separated-tokens "^1.0.0"
+
 he@^1.2.0:
   version "1.2.0"
   resolved "https://registry.yarnpkg.com/he/-/he-1.2.0.tgz#84ae65fa7eafb165fddb61566ae14baf05664f0f"
@@ -7043,6 +7108,11 @@ hey-listen@^1.0.8:
   resolved "https://registry.yarnpkg.com/hey-listen/-/hey-listen-1.0.8.tgz#8e59561ff724908de1aa924ed6ecc84a56a9aa68"
   integrity sha512-COpmrF2NOg4TBWUJ5UVyaCU2A88wEMkUPK4hNqyCkqHbxT92BbvfjoSozkAIIm6XhicGlJHhFdullInrdhwU8Q==

+highlight.js@^10.4.1, highlight.js@~10.7.0:
+  version "10.7.3"
+  resolved "https://registry.yarnpkg.com/highlight.js/-/highlight.js-10.7.3.tgz#697272e3991356e40c3cac566a74eef681756531"
+  integrity sha512-tzcUFauisWKNHaRkN4Wjl/ZA07gENAjFl3J/c480dprkGTg5EQstgaNFqBfUqCq54kZRIEcreTsAgF/m2quD7A==
+
 history@^4.9.0:
   version "4.10.1"
   resolved "https://registry.yarnpkg.com/history/-/history-4.10.1.tgz#33371a65e3a83b267434e2b3f3b1b4c58aad4cf3"
@@ -7462,11 +7532,24 @@ is-accessor-descriptor@^1.0.0:
   dependencies:
     kind-of "^6.0.0"

+is-alphabetical@^1.0.0:
+  version "1.0.4"
+  resolved "https://registry.yarnpkg.com/is-alphabetical/-/is-alphabetical-1.0.4.tgz#9e7d6b94916be22153745d184c298cbf986a686d"
+  integrity sha512-DwzsA04LQ10FHTZuL0/grVDk4rFoVH1pjAToYwBrHSxcrBIGQuXrQMtD5U1b0U2XVgKZCTLLP8u2Qxqhy3l2Vg==
+
 is-alphabetical@^2.0.0:
   version "2.0.0"
   resolved "https://registry.yarnpkg.com/is-alphabetical/-/is-alphabetical-2.0.0.tgz#ef6e2caea57c63450fffc7abb6cbdafc5eb96e96"
   integrity sha512-5OV8Toyq3oh4eq6sbWTYzlGdnMT/DPI5I0zxUBxjiigQsZycpkKF3kskkao3JyYGuYDHvhgJF+DrjMQp9SX86w==

+is-alphanumerical@^1.0.0:
+  version "1.0.4"
+  resolved "https://registry.yarnpkg.com/is-alphanumerical/-/is-alphanumerical-1.0.4.tgz#7eb9a2431f855f6b1ef1a78e326df515696c4dbf"
+  integrity sha512-UzoZUr+XfVz3t3v4KyGEniVL9BDRoQtY7tOyrRybkVNjDFWyo1yhXNGrrBTQxp3ib9BLAWs7k2YKBQsFRkZG9A==
+  dependencies:
+    is-alphabetical "^1.0.0"
+    is-decimal "^1.0.0"
+
 is-alphanumerical@^2.0.0:
   version "2.0.0"
   resolved "https://registry.yarnpkg.com/is-alphanumerical/-/is-alphanumerical-2.0.0.tgz#0fbfeb6a72d21d91143b3d182bf6cf5909ee66f6"
@@ -7584,6 +7667,11 @@ is-date-object@^1.0.1:
   dependencies:
     has-tostringtag "^1.0.0"

+is-decimal@^1.0.0:
+  version "1.0.4"
+  resolved "https://registry.yarnpkg.com/is-decimal/-/is-decimal-1.0.4.tgz#65a3a5958a1c5b63a706e1b333d7cd9f630d3fa5"
+  integrity sha512-RGdriMmQQvZ2aqaQq3awNA6dCGtKpiDFcOzrTWrDAT2MiWrKQVPmxLGHl7Y2nNu6led0kEyoX0enY0qXYsv9zw==
+
 is-decimal@^2.0.0:
   version "2.0.0"
   resolved "https://registry.yarnpkg.com/is-decimal/-/is-decimal-2.0.0.tgz#db1140337809fd043a056ae40a9bd1cdc563034c"
@@ -7663,6 +7751,11 @@ is-glob@^4.0.0, is-glob@^4.0.1, is-glob@^4.0.3, is-glob@~4.0.1:
   dependencies:
     is-extglob "^2.1.1"

+is-hexadecimal@^1.0.0:
+  version "1.0.4"
+  resolved "https://registry.yarnpkg.com/is-hexadecimal/-/is-hexadecimal-1.0.4.tgz#cc35c97588da4bd49a8eedd6bc4082d44dcb23a7"
+  integrity sha512-gyPJuv83bHMpocVYoqof5VDiZveEoGoFL8m3BXNb2VW8Xs+rz9kqO8LOQ5DH6EsuvilT1ApazU0pyl+ytbPtlw==
+
 is-hexadecimal@^2.0.0:
   version "2.0.0"
   resolved "https://registry.yarnpkg.com/is-hexadecimal/-/is-hexadecimal-2.0.0.tgz#8e1ec9f48fe3eabd90161109856a23e0907a65d5"
@@ -8724,6 +8817,11 @@ long@^4.0.0:
   resolved "https://registry.yarnpkg.com/long/-/long-4.0.0.tgz#9a7b71cfb7d361a194ea555241c92f7468d5bf28"
   integrity sha512-XsP+KhQif4bjX1kbuSiySJFNAehNxgLb6hPRGJ9QsUr8ajHkuXGdrHmFUTUUXhDwVX2R5bY4JNZEwbUiMhV+MA==

+longest-streak@^3.0.0:
+  version "3.0.0"
+  resolved "https://registry.yarnpkg.com/longest-streak/-/longest-streak-3.0.0.tgz#f127e2bded83caa6a35ac5f7a2f2b2f94b36f3dc"
+  integrity sha512-XhUjWR5CFaQ03JOP+iSDS9koy8T5jfoImCZ4XprElw3BXsSk4MpVYOLw/6LTDKZhO13PlAXnB5gS4MHQTpkSOw==
+
 loose-envify@^1.0.0, loose-envify@^1.1.0, loose-envify@^1.2.0, loose-envify@^1.3.1, loose-envify@^1.4.0:
   version "1.4.0"
   resolved "https://registry.yarnpkg.com/loose-envify/-/loose-envify-1.4.0.tgz#71ee51fa7be4caec1a63839f7e682d8132d30caf"
@@ -8738,6 +8836,14 @@ lower-case@^2.0.2:
   dependencies:
     tslib "^2.0.3"

+lowlight@^1.17.0:
+  version "1.20.0"
+  resolved "https://registry.yarnpkg.com/lowlight/-/lowlight-1.20.0.tgz#ddb197d33462ad0d93bf19d17b6c301aa3941888"
+  integrity sha512-8Ktj+prEb1RoCPkEOrPMYUN/nCggB7qAWe3a7OpMjWQkh3l2RD5wKRQ+o8Q8YuI9RG/xs95waaI/E6ym/7NsTw==
+  dependencies:
+    fault "^1.0.0"
+    highlight.js "~10.7.0"
+
 lru-cache@^5.1.1:
   version "5.1.1"
   resolved "https://registry.yarnpkg.com/lru-cache/-/lru-cache-5.1.1.tgz#1da27e6710271947695daf6848e847f01d84b920"
@@ -8798,6 +8904,11 @@ map-visit@^1.0.0:
   dependencies:
     object-visit "^1.0.0"

+markdown-table@^3.0.0:
+  version "3.0.1"
+  resolved "https://registry.yarnpkg.com/markdown-table/-/markdown-table-3.0.1.tgz#88c48957aaf2a8014ccb2ba026776a1d736fe3dc"
+  integrity sha512-CBbaYXKSGnE1uLRpKA1SWgIRb2PQrpkllNWpZtZe6VojOJ4ysqiq7/2glYcmKsOYN09QgH/HEBX5hIshAeiK6A==
+
 md5.js@^1.3.4:
   version "1.3.5"
   resolved "https://registry.yarnpkg.com/md5.js/-/md5.js-1.3.5.tgz#b5d07b8e3216e3e27cd728d72f70d1e6a342005f"
@@ -8816,6 +8927,15 @@ mdast-util-definitions@^5.0.0:
     "@types/unist" "^2.0.0"
     unist-util-visit "^3.0.0"

+mdast-util-find-and-replace@^2.0.0:
+  version "2.1.0"
+  resolved "https://registry.yarnpkg.com/mdast-util-find-and-replace/-/mdast-util-find-and-replace-2.1.0.tgz#69728acd250749f8aac6e150e07d1fd15619e829"
+  integrity sha512-1w1jbqAd13oU78QPBf5223+xB+37ecNtQ1JElq2feWols5oEYAl+SgNDnOZipe7NfLemoEt362yUS15/wip4mw==
+  dependencies:
+    escape-string-regexp "^5.0.0"
+    unist-util-is "^5.0.0"
+    unist-util-visit-parents "^4.0.0"
+
 mdast-util-from-markdown@^1.0.0:
   version "1.0.4"
   resolved "https://registry.yarnpkg.com/mdast-util-from-markdown/-/mdast-util-from-markdown-1.0.4.tgz#b1fefae59cf4a6368779e01b7e830281ee277532"
@@ -8834,6 +8954,61 @@ mdast-util-from-markdown@^1.0.0:
     unist-util-stringify-position "^3.0.0"
     uvu "^0.5.0"

+mdast-util-gfm-autolink-literal@^1.0.0:
+  version "1.0.2"
+  resolved "https://registry.yarnpkg.com/mdast-util-gfm-autolink-literal/-/mdast-util-gfm-autolink-literal-1.0.2.tgz#4032dcbaddaef7d4f2f3768ed830475bb22d3970"
+  integrity sha512-FzopkOd4xTTBeGXhXSBU0OCDDh5lUj2rd+HQqG92Ld+jL4lpUfgX2AT2OHAVP9aEeDKp7G92fuooSZcYJA3cRg==
+  dependencies:
+    "@types/mdast" "^3.0.0"
+    ccount "^2.0.0"
+    mdast-util-find-and-replace "^2.0.0"
+    micromark-util-character "^1.0.0"
+
+mdast-util-gfm-footnote@^1.0.0:
+  version "1.0.0"
+  resolved "https://registry.yarnpkg.com/mdast-util-gfm-footnote/-/mdast-util-gfm-footnote-1.0.0.tgz#355c1e8dc9e17e871d1b3fa5da8824923fc756e0"
+  integrity sha512-qeg9YoS2YYP6OBmMyUFxKXb6BLwAsbGidIxgwDAXHIMYZQhIwe52L9BSJs+zP29Jp5nSERPkmG3tSwAN23/ZbQ==
+  dependencies:
+    "@types/mdast" "^3.0.0"
+    mdast-util-to-markdown "^1.0.0"
+    micromark-util-normalize-identifier "^1.0.0"
+    unist-util-visit "^4.0.0"
+
+mdast-util-gfm-strikethrough@^1.0.0:
+  version "1.0.0"
+  resolved "https://registry.yarnpkg.com/mdast-util-gfm-strikethrough/-/mdast-util-gfm-strikethrough-1.0.0.tgz#6cc72ef5d9539f4cee76af3f15dd0daa9e3af40f"
+  integrity sha512-gM9ipBUdRxYa6Yq1Hd8Otg6jEn/dRxFZ1F9ZX4QHosHOexLGqNZO2dh0A+YFbUEd10RcKjnjb4jOfJJzoXXUew==
+  dependencies:
+    "@types/mdast" "^3.0.3"
+    mdast-util-to-markdown "^1.0.0"
+
+mdast-util-gfm-table@^1.0.0:
+  version "1.0.1"
+  resolved "https://registry.yarnpkg.com/mdast-util-gfm-table/-/mdast-util-gfm-table-1.0.1.tgz#07c269a219d66ec2deb6de38aed0ba1d1f9442df"
+  integrity sha512-NByKuaSg5+M6r9DZBPXFUmhMHGFf9u+WE76EeStN01ghi8hpnydiWBXr+qj0XCRWI7SAMNtEjGvip6zci9axQA==
+  dependencies:
+    markdown-table "^3.0.0"
+    mdast-util-to-markdown "^1.0.0"
+
+mdast-util-gfm-task-list-item@^1.0.0:
+  version "1.0.0"
+  resolved "https://registry.yarnpkg.com/mdast-util-gfm-task-list-item/-/mdast-util-gfm-task-list-item-1.0.0.tgz#a0aa2a00c893f9f006d13ba096cbc64608559c7f"
+  integrity sha512-dwkzOTjQe8JCCHVE3Cb0pLHTYLudf7t9WCAnb20jI8/dW+VHjgWhjtIUVA3oigNkssgjEwX+i+3XesUdCnXGyA==
+  dependencies:
+    "@types/mdast" "^3.0.3"
+    mdast-util-to-markdown "^1.0.0"
+
+mdast-util-gfm@^2.0.0:
+  version "2.0.0"
+  resolved "https://registry.yarnpkg.com/mdast-util-gfm/-/mdast-util-gfm-2.0.0.tgz#2545856bc18a66d5cc63fbef0b097a020a8e9e3d"
+  integrity sha512-wMwejlTN3EQADPFuvxe8lmGsay3+f6gSJKdAHR6KBJzpcxvsjJSILB9K6u6G7eQLC7iOTyVIHYGui9uBc9r1Tg==
+  dependencies:
+    mdast-util-gfm-autolink-literal "^1.0.0"
+    mdast-util-gfm-footnote "^1.0.0"
+    mdast-util-gfm-strikethrough "^1.0.0"
+    mdast-util-gfm-table "^1.0.0"
+    mdast-util-gfm-task-list-item "^1.0.0"
+
 mdast-util-to-hast@^11.0.0:
   version "11.3.0"
   resolved "https://registry.yarnpkg.com/mdast-util-to-hast/-/mdast-util-to-hast-11.3.0.tgz#ea9220617a710e80aa5cc3ac7cc9d4bb0440ae7a"
@@ -8849,7 +9024,20 @@ mdast-util-to-hast@^11.0.0:
     unist-util-position "^4.0.0"
     unist-util-visit "^4.0.0"

-mdast-util-to-string@^3.1.0:
+mdast-util-to-markdown@^1.0.0:
+  version "1.2.3"
+  resolved "https://registry.yarnpkg.com/mdast-util-to-markdown/-/mdast-util-to-markdown-1.2.3.tgz#2b3af92bf0e29080927eb59a8a10cd0a7398e093"
+  integrity sha512-040jJYtjOUdbvYAXCfPrpLJRdvMOmR33KRqlhT4r+fEbVM+jao1RMbA8RmGeRmw8RAj3vQ+HvhIaJPijvnOwCg==
+  dependencies:
+    "@types/mdast" "^3.0.0"
+    "@types/unist" "^2.0.0"
+    longest-streak "^3.0.0"
+    mdast-util-to-string "^3.0.0"
+    micromark-util-decode-string "^1.0.0"
+    unist-util-visit "^4.0.0"
+    zwitch "^2.0.0"
+
+mdast-util-to-string@^3.0.0, mdast-util-to-string@^3.1.0:
   version "3.1.0"
   resolved "https://registry.yarnpkg.com/mdast-util-to-string/-/mdast-util-to-string-3.1.0.tgz#56c506d065fbf769515235e577b5a261552d56e9"
   integrity sha512-n4Vypz/DZgwo0iMHLQL49dJzlp7YtAJP+N07MZHpjPf/5XJuHUWstviF4Mn2jEiR/GNmtnRRqnwsXExk3igfFA==
@@ -8915,7 +9103,7 @@ microevent.ts@~0.1.1:
   resolved "https://registry.yarnpkg.com/microevent.ts/-/microevent.ts-0.1.1.tgz#70b09b83f43df5172d0205a63025bce0f7357fa0"
   integrity sha512-jo1OfR4TaEwd5HOrt5+tAZ9mqT4jmpNAusXtyfNzqVm9uiSYFZlKM1wYL4oU7azZW/PxQW53wM0S6OR1JHNa2g==

-micromark-core-commonmark@^1.0.1:
+micromark-core-commonmark@^1.0.0, micromark-core-commonmark@^1.0.1:
   version "1.0.4"
   resolved "https://registry.yarnpkg.com/micromark-core-commonmark/-/micromark-core-commonmark-1.0.4.tgz#fee459d29c5912a32f059c3a9836d4318ac85f30"
   integrity sha512-HAtoZisp1M/sQFuw2zoUKGo1pMKod7GSvdM6B2oBU0U2CEN5/C6Tmydmi1rmvEieEhGQsjMyiiSoYgxISNxGFA==
@@ -8937,6 +9125,85 @@ micromark-core-commonmark@^1.0.1:
     parse-entities "^3.0.0"
     uvu "^0.5.0"

+micromark-extension-gfm-autolink-literal@^1.0.0:
+  version "1.0.2"
+  resolved "https://registry.yarnpkg.com/micromark-extension-gfm-autolink-literal/-/micromark-extension-gfm-autolink-literal-1.0.2.tgz#aafadc9ef2f8078d359eb635f144d913c669e0f6"
+  integrity sha512-z2Asd0v4iV/QoI1l23J1qB6G8IqVWTKmwdlP45YQfdGW47ZzpddyzSxZ78YmlucOLqIbS5H98ekKf9GunFfnLA==
+  dependencies:
+    micromark-util-character "^1.0.0"
+    micromark-util-sanitize-uri "^1.0.0"
+    micromark-util-symbol "^1.0.0"
+    micromark-util-types "^1.0.0"
+    uvu "^0.5.0"
+
+micromark-extension-gfm-footnote@^1.0.0:
+  version "1.0.2"
+  resolved "https://registry.yarnpkg.com/micromark-extension-gfm-footnote/-/micromark-extension-gfm-footnote-1.0.2.tgz#cd6309f842db8859556b3708302abc7721351b5f"
+  integrity sha512-C6o+B7w1wDM4JjDJeHCTszFYF1q46imElNY6mfXsBfw4E91M9TvEEEt3sy0FbJmGVzdt1pqFVRYWT9ZZ0FjFuA==
+  dependencies:
+    micromark-core-commonmark "^1.0.0"
+    micromark-factory-space "^1.0.0"
+    micromark-util-character "^1.0.0"
+    micromark-util-normalize-identifier "^1.0.0"
+    micromark-util-sanitize-uri "^1.0.0"
+    micromark-util-symbol "^1.0.0"
+    uvu "^0.5.0"
+
+micromark-extension-gfm-strikethrough@^1.0.0:
+  version "1.0.3"
+  resolved "https://registry.yarnpkg.com/micromark-extension-gfm-strikethrough/-/micromark-extension-gfm-strikethrough-1.0.3.tgz#010900cfc9a2bf35d2859612c356a21d7fb19af5"
+  integrity sha512-PJKhBNyrNIo694ZQCE/FBBQOQSb6YC0Wi5Sv0OCah5XunnNaYbtak9CSv9/eq4YeFMMyd1jX84IRwUSE+7ioLA==
+  dependencies:
+    micromark-util-chunked "^1.0.0"
+    micromark-util-classify-character "^1.0.0"
+    micromark-util-resolve-all "^1.0.0"
+    micromark-util-symbol "^1.0.0"
+    micromark-util-types "^1.0.0"
+    uvu "^0.5.0"
+
+micromark-extension-gfm-table@^1.0.0:
+  version "1.0.2"
+  resolved "https://registry.yarnpkg.com/micromark-extension-gfm-table/-/micromark-extension-gfm-table-1.0.2.tgz#83f1c81d6416400283fa309ee765edb266b9f748"
+  integrity sha512-mRtt0S/jVT8IRWqIw2Wnl8dr/9yHh+b3NgiDQ4zdgheiAtkFYalng5CUQooFfQeSxQjfV+QKXqtPpjdIHu3AqQ==
+  dependencies:
+    micromark-factory-space "^1.0.0"
+    micromark-util-character "^1.0.0"
+    micromark-util-symbol "^1.0.0"
+    micromark-util-types "^1.0.0"
+    uvu "^0.5.0"
+
+micromark-extension-gfm-tagfilter@^1.0.0:
+  version "1.0.0"
+  resolved "https://registry.yarnpkg.com/micromark-extension-gfm-tagfilter/-/micromark-extension-gfm-tagfilter-1.0.0.tgz#a38c7c462c2007b534fcb485e9310165879654a7"
+  integrity sha512-GGUZhzQrOdHR8RHU2ru6K+4LMlj+pBdNuXRtw5prOflDOk2hHqDB0xEgej1AHJ2VETeycX7tzQh2EmaTUOmSKg==
+  dependencies:
+    micromark-util-types "^1.0.0"
+
+micromark-extension-gfm-task-list-item@^1.0.0:
+  version "1.0.2"
+  resolved "https://registry.yarnpkg.com/micromark-extension-gfm-task-list-item/-/micromark-extension-gfm-task-list-item-1.0.2.tgz#953c1cd565df864790815c3a162d452d004255ed"
+  integrity sha512-8AZib9xxPtppTKig/d00i9uKi96kVgoqin7+TRtGprDb8uTUrN1ZfJ38ga8yUdmu7EDQxr2xH8ltZdbCcmdshg==
+  dependencies:
+    micromark-factory-space "^1.0.0"
+    micromark-util-character "^1.0.0"
+    micromark-util-symbol "^1.0.0"
+    micromark-util-types "^1.0.0"
+    uvu "^0.5.0"
+
+micromark-extension-gfm@^2.0.0:
+  version "2.0.0"
+  resolved "https://registry.yarnpkg.com/micromark-extension-gfm/-/micromark-extension-gfm-2.0.0.tgz#d9d1b82967f43c346a335864060c16b735e3861f"
+  integrity sha512-yYPlZ48Ss8fRFSmlQP/QXt3/M6tEvawEVFO+jDPnFA3mGeVgzIyaeHgrIV/9AMFAjQhctKA47Bk8xBhcuaL74Q==
+  dependencies:
+    micromark-extension-gfm-autolink-literal "^1.0.0"
+    micromark-extension-gfm-footnote "^1.0.0"
+    micromark-extension-gfm-strikethrough "^1.0.0"
+    micromark-extension-gfm-table "^1.0.0"
+    micromark-extension-gfm-tagfilter "^1.0.0"
+    micromark-extension-gfm-task-list-item "^1.0.0"
+    micromark-util-combine-extensions "^1.0.0"
+    micromark-util-types "^1.0.0"
+
 micromark-factory-destination@^1.0.0:
   version "1.0.0"
   resolved "https://registry.yarnpkg.com/micromark-factory-destination/-/micromark-factory-destination-1.0.0.tgz#fef1cb59ad4997c496f887b6977aa3034a5a277e"
@@ -9870,6 +10137,18 @@ parse-asn1@^5.0.0, parse-asn1@^5.1.5:
     pbkdf2 "^3.0.3"
     safe-buffer "^5.1.1"

+parse-entities@^2.0.0:
+  version "2.0.0"
+  resolved "https://registry.yarnpkg.com/parse-entities/-/parse-entities-2.0.0.tgz#53c6eb5b9314a1f4ec99fa0fdf7ce01ecda0cbe8"
+  integrity sha512-kkywGpCcRYhqQIchaWqZ875wzpS/bMKhz5HnN3p7wveJTkTtyAB/AlnS0f8DFSqYW1T82t6yEAkEcB+A1I3MbQ==
+  dependencies:
+    character-entities "^1.0.0"
+    character-entities-legacy "^1.0.0"
+    character-reference-invalid "^1.0.0"
+    is-alphanumerical "^1.0.0"
+    is-decimal "^1.0.0"
+    is-hexadecimal "^1.0.0"
+
 parse-entities@^3.0.0:
   version "3.0.0"
   resolved "https://registry.yarnpkg.com/parse-entities/-/parse-entities-3.0.0.tgz#9ed6d6569b6cfc95ade058d683ddef239dad60dc"
@@ -10830,6 +11109,11 @@ pretty-format@^27.0.0, pretty-format@^27.3.1:
     ansi-styles "^5.0.0"
     react-is "^17.0.1"

+prismjs@^1.22.0, prismjs@~1.25.0:
+  version "1.25.0"
+  resolved "https://registry.yarnpkg.com/prismjs/-/prismjs-1.25.0.tgz#6f822df1bdad965734b310b315a23315cf999756"
+  integrity sha512-WCjJHl1KEWbnkQom1+SzftbtXMKQoezOCYs5rECqMN+jP+apI7ftoflyqigqzopSO3hMhTEb0mFClA8lkolgEg==
+
 process-nextick-args@~2.0.0:
   version "2.0.1"
   resolved "https://registry.yarnpkg.com/process-nextick-args/-/process-nextick-args-2.0.1.tgz#7820d9b16120cc55ca9ae7792680ae7dba6d7fe2"
@@ -10887,6 +11171,13 @@ prop-types@^15.0.0, prop-types@^15.6.2, prop-types@^15.7.2:
     object-assign "^4.1.1"
     react-is "^16.8.1"

+property-information@^5.0.0:
+  version "5.6.0"
+  resolved "https://registry.yarnpkg.com/property-information/-/property-information-5.6.0.tgz#61675545fb23002f245c6540ec46077d4da3ed69"
+  integrity sha512-YUHSPk+A30YPv+0Qf8i9Mbfe/C0hdPXk1s1jPVToV8pk8BQtpw10ct89Eo7OWkutrwqvT0eicAxlOg3dOAu8JA==
+  dependencies:
+    xtend "^4.0.0"
+
 property-information@^6.0.0:
   version "6.0.1"
   resolved "https://registry.yarnpkg.com/property-information/-/property-information-6.0.1.tgz#7c668d9f2b9cb63bc3e105d8b8dfee7221a17800"
@@ -11311,6 +11602,17 @@ react-style-singleton@^2.1.0:
     invariant "^2.2.4"
     tslib "^1.0.0"

+react-syntax-highlighter@^15.4.4:
+  version "15.4.4"
+  resolved "https://registry.yarnpkg.com/react-syntax-highlighter/-/react-syntax-highlighter-15.4.4.tgz#dc9043f19e7bd063ff3ea78986d22a6eaa943b2a"
+  integrity sha512-PsOFHNTzkb3OroXdoR897eKN5EZ6grht1iM+f1lJSq7/L0YVnkJaNVwC3wEUYPOAmeyl5xyer1DjL6MrumO6Zw==
+  dependencies:
+    "@babel/runtime" "^7.3.1"
+    highlight.js "^10.4.1"
+    lowlight "^1.17.0"
+    prismjs "^1.22.0"
+    refractor "^3.2.0"
+
 react@^17.0.2:
   version "17.0.2"
   resolved "https://registry.yarnpkg.com/react/-/react-17.0.2.tgz#d0b5cc516d29eb3eee383f75b62864cfb6800037"
@@ -11391,6 +11693,15 @@ redent@^3.0.0:
     indent-string "^4.0.0"
     strip-indent "^3.0.0"

+refractor@^3.2.0:
+  version "3.5.0"
+  resolved "https://registry.yarnpkg.com/refractor/-/refractor-3.5.0.tgz#334586f352dda4beaf354099b48c2d18e0819aec"
+  integrity sha512-QwPJd3ferTZ4cSPPjdP5bsYHMytwWYnAN5EEnLtGvkqp/FCCnGsBgxrm9EuIDnjUC3Uc/kETtvVi7fSIVC74Dg==
+  dependencies:
+    hastscript "^6.0.0"
+    parse-entities "^2.0.0"
+    prismjs "~1.25.0"
+
 regenerate-unicode-properties@^9.0.0:
   version "9.0.0"
   resolved "https://registry.yarnpkg.com/regenerate-unicode-properties/-/regenerate-unicode-properties-9.0.0.tgz#54d09c7115e1f53dc2314a974b32c1c344efe326"
@@ -11475,6 +11786,16 @@ relateurl@^0.2.7:
   resolved "https://registry.yarnpkg.com/relateurl/-/relateurl-0.2.7.tgz#54dbf377e51440aca90a4cd274600d3ff2d888a9"
   integrity sha1-VNvzd+UUQKypCkzSdGANP/LYiKk=

+remark-gfm@^3.0.0:
+  version "3.0.0"
+  resolved "https://registry.yarnpkg.com/remark-gfm/-/remark-gfm-3.0.0.tgz#a2efb06eceb8472610f095ccbff82d17daa1f415"
+  integrity sha512-CXJw5h1iwUW6czFwi4tveoOSlsEZU44hcdNzUxC5uiNi7r/OQySf46AoEihM8/NwBbW1LcsnyGIsHBnbURFw2g==
+  dependencies:
+    "@types/mdast" "^3.0.0"
+    mdast-util-gfm "^2.0.0"
+    micromark-extension-gfm "^2.0.0"
+    unified "^10.0.0"
+
 remark-parse@^10.0.0:
   version "10.0.0"
   resolved "https://registry.yarnpkg.com/remark-parse/-/remark-parse-10.0.0.tgz#65e2b2b34d8581d36b97f12a2926bb2126961cb4"
@@ -12192,6 +12513,11 @@ sourcemap-codec@^1.4.4:
   resolved "https://registry.yarnpkg.com/sourcemap-codec/-/sourcemap-codec-1.4.8.tgz#ea804bd94857402e6992d05a38ef1ae35a9ab4c4"
   integrity sha512-9NykojV5Uih4lgo5So5dtw+f0JgJX30KCNI8gwhz2J9A15wD0Ml6tjHKwf6fTSa6fAdVBdZeNOs9eJ71qCk8vA==

+space-separated-tokens@^1.0.0:
+  version "1.1.5"
+  resolved "https://registry.yarnpkg.com/space-separated-tokens/-/space-separated-tokens-1.1.5.tgz#85f32c3d10d9682007e917414ddc5c26d1aa6899"
+  integrity sha512-q/JSVd1Lptzhf5bkYm4ob4iWPjx0KiRe3sRFBNrVqbJkFaBm5vbbowy1mymoPNLRa52+oadOhJ+K49wsSeSjTA==
+
 space-separated-tokens@^2.0.0:
   version "2.0.1"
   resolved "https://registry.yarnpkg.com/space-separated-tokens/-/space-separated-tokens-2.0.1.tgz#43193cec4fb858a2ce934b7f98b7f2c18107098b"
@@ -13929,3 +14255,8 @@ yocto-queue@^0.1.0:
   version "0.1.0"
   resolved "https://registry.yarnpkg.com/yocto-queue/-/yocto-queue-0.1.0.tgz#0294eb3dee05028d31ee1a5fa2c556a6aaf10a1b"
   integrity sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==
+
+zwitch@^2.0.0:
+  version "2.0.2"
+  resolved "https://registry.yarnpkg.com/zwitch/-/zwitch-2.0.2.tgz#91f8d0e901ffa3d66599756dde7f57b17c95dce1"
+  integrity sha512-JZxotl7SxAJH0j7dN4pxsTV6ZLXoLdGME+PsjkL/DaBrVryK9kTGq06GfKrwcSOqypP+fdXGoCHE36b99fWVoA==
`;
