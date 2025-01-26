import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>Hello from Zenova Online Shop</h2>
      <button className="btn btn-primary">
        <i className="bi bi-clock mr"></i>&nbsp; Primary
      </button>
      <button className="btn btn-outline-primary">
        <i className="bi bi-bell mr"></i>&nbsp; Outline
      </button>
    </div>
  );
}
