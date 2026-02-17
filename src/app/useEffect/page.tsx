"use client"; // これが必須です！

import styles from "./../page.module.css";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function UseEffectPractice() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  // 練習1：入力した文字数をブラウザのタブ（タイトル）に反映させる
  useEffect(() => {
    document.title = `文字数: ${text.length}`;
    console.log("タイトルの更新完了！");
  }, [text]); // textが更新された時だけ実行

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
        <h1>useEffect 練習ページ</h1>

        <section style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
          <h2>練習1: 依存配列の動き</h2>
          <p>文字を入力するとブラウザのタブ名が変わります。</p>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="何か入力してください"
            style={{ padding: '8px', width: '300px', color: 'black' }}
          />
          <p>現在の文字数: {text.length}</p>
        </section>

        <section style={{ border: '1px solid #ccc', padding: '15px' }}>
          <h2>練習2: カウントアップ</h2>
          <p>ボタンを押しても「タイトル更新」のログは出ないことを確認してください。</p>
          <button
            onClick={() => setCount(count + 1)}
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          >
            カウント: {count}
          </button>
        </section>

        <Link href="/">Topへ戻る</Link>
        </div>
      </main>
    </div>
  );
}
