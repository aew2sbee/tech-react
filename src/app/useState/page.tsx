"use client"; // クライアントコンポーネントとして宣言

import styles from "./../page.module.css";
import { useState } from 'react';
import Link from 'next/link';

export default function UseStatePractice() {
  // 1. 基本：数値のカウント
  const [count, setCount] = useState(0);

  // 2. 文字列：入力フォーム
  const [name, setName] = useState("");

  // 3. 真偽値：表示・非表示の切り替え
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
        <h1>useState 徹底攻略</h1>
        <hr />

        {/* セクション1: 数値 */}
        <section style={{ margin: '20px 0' }}>
          <h2>1. 数値の管理 (Count: {count})</h2>
          <button onClick={() => setCount(count + 1)} style={btnStyle}>+ 1</button>
          <button onClick={() => setCount(count - 1)} style={btnStyle}>- 1</button>
          <button onClick={() => setCount(0)} style={btnStyle}>リセット</button>
        </section>

        {/* セクション2: 文字列 */}
        <section style={{ margin: '20px 0' }}>
          <h2>2. 文字列の管理</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="名前を入力してください"
            style={{ padding: '8px', color: 'black', width: '100%' }}
          />
          <p>こんにちは、<strong>{name || "ゲスト"}</strong> さん！</p>
        </section>

        {/* セクション3: 真偽値 */}
        <section style={{ margin: '20px 0' }}>
          <h2>3. 表示の切り替え (ON/OFF)</h2>
          <button onClick={() => setIsVisible(!isVisible)} style={btnStyle}>
            {isVisible ? "隠す" : "表示する"}
          </button>
          {isVisible && (
            <div style={{ background: '#f0f0f0', padding: '10px', marginTop: '10px', color: '#333' }}>
              🎉 隠しメッセージが表示されました！
            </div>
          )}
        </section>

        <Link href="/">Topへ戻る</Link>
        </div>
      </main>
    </div>
  );
}

// 簡単なスタイル
const btnStyle = {
  padding: '8px 16px',
  marginRight: '8px',
  cursor: 'pointer'
};
