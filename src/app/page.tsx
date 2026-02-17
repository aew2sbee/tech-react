import styles from "./page.module.css";
import fs from "fs";
import path from "path";

export default function Home() {
  const appDirectory = path.join(process.cwd(), "src/app");
  const pageDirectories = fs
    .readdirSync(appDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter(
      (name) =>
        name !== "api" &&
        fs.existsSync(path.join(appDirectory, name, "page.tsx"))
    );

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Navigation</h1>
          <nav>
            <ul>
              {pageDirectories.map((name) => (
                <li key={name}>
                  <a href={`/${name}`}>{name} サンプルページ</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}
