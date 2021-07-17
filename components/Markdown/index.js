import styles from "./Markdown.module.css";

export default function Markdown({ children }) {
  return (
    <div
      className={styles["markdown"]}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
