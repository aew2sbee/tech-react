# コンポーネントファイルをさらに分割する

現在のところ Gallery.js は Profile と Gallery の両方をエクスポートしていますが、これはちょっと混乱の原因になりそうです。

Profile コンポーネントを Profile.js という別ファイルに移動し、その後で App コンポーネントも変更して <Profile /> と <Gallery /> を並べてレンダーするようにしてください。

Profile をエクスポートするのにデフォルトと名前付きのどちらの手法を使っても構いませんが、App.js と Gallery.js の両方で対応するインポート構文を使うようにしましょう！ 上記の詳細セクションで挙げたこちらの表を参照しても構いません：

| 種類 | Export 文 | Import 文 |
| --- | --- | --- |
| Default | `export default function Button() {}` | `import Button from './Button.js';` |
| Named | `export function Button() {}` | `import { Button } from './Button.js';` |

```diff App.js
import Gallery from './Gallery.js';
- import { Profile } from './Gallery.js';
+ import { Profile } from './Profile.js';

export default function App() {
  return (
    <div>
      <Profile />
+      <Gallery />
    </div>
  );
}


```
```diff Gallery.js
+ import { Profile } from './Profile.js';

- export function Profile() {
-   return (
-     <img
-       src="https://i.imgur.com/QIrZWGIs.jpg"
-       alt="Alan L. Hart"
-     />
-   );
- }

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

```

```diff Profile.js
+ export function Profile() {
+  return (
+    <img
+      src="https://i.imgur.com/QIrZWGIs.jpg"
+      alt="Alan L. Hart"
+    />
+  );
+}

```

実務の選び方
- アプリ（プロダクト）側
  - 1ファイル1コンポーネントが基本なら default でも運用しやすい
  - ただしチームが大きい／検索性重視なら named を標準にすることも多い
- コンポーネントライブラリ／共有パッケージ
  - 公開APIを明確にしやすいので named export 推奨 が多い
  - “何を提供しているか” が設計上の重要事項になるため