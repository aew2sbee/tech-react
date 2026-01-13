# return 文を直す

この return 文はどうもおかしいようです。直せますか？

```diff App.js
# このコンポーネントを修正するには、以下のように return 文を 1 行にします：
export default function Profile() {
+  return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}

```