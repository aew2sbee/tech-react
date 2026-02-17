import styles from "./page.module.css";
import fs from "fs";
import path from "path";
import NavLinkList from "./components/NavLinkList"; // Import the new client component

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

  const navLinks = pageDirectories.map((name) => ({
    href: `/${name}`,
    text: `${name} Example`, // I'll use "Example" here for consistency with the new client component
  }));

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Navigation</h1>
          <nav>
            <NavLinkList links={navLinks} /> {/* Use the client component */}
          </nav>
        </div>
      </main>
    </div>
  );
}
