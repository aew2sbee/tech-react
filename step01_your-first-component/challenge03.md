# どこが間違い？

この Profile の宣言のしかたや使われ方は何か間違っています。間違いがどこか分かりますか？（React がどのようにしてコンポーネントと普通の HTML タグを区別するのか思い出してみましょう！）

> [!WARNING]
> The tag <profile> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.

```diff App.js
# React コンポーネントの名前は大文字で始めなければなりません。
+ function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
+      <Profile />
+      <Profile />
+      <Profile />
    </section>
  );
}


```