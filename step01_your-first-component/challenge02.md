# return 文を直す

この return 文はどうもおかしいようです。直せますか？

```diff App.js
export default function Profile() {
+  return (
+    <>
+      <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
+    </>
+  );
}

```