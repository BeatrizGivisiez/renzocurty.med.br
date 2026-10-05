import styles from "./NumberedList.module.css";

interface NumberedListProps {
  items: string[];
  bordered?: boolean;
  indexColor?: string;
  indexSize?: string;
  textColor?: string;
  textSize?: string;
}

export default function NumberedList({
  items,
  bordered = true,
  indexColor = "rgba(85,102,61,.7)",
  indexSize = "10px",
  textColor = "rgba(25,28,19,.84)",
  textSize = "var(--fs-body-md)",
}: NumberedListProps) {
  return (
    <div className={bordered ? styles.list : styles.listGap}>
      {items.map((item, i) => (
        <div key={item} className={`${styles.row} ${bordered ? styles.rowBordered : ""}`}>
          <span className={styles.index} style={{ color: indexColor, fontSize: indexSize }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className={styles.text} style={{ color: textColor, fontSize: textSize }}>
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}
