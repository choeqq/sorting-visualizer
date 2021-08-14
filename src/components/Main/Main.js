import React from "react";
import styles from "./Main.module.css";

export default function Main({ data }) {
  const width = 1400 / data.length;
  return (
    <div className={styles.container}>
      {data.map((size, i) => (
        <div
          className={styles.bar}
          style={{
            height: `${size}px`,
            width: `${width}px`,
          }}
          key={i}
        ></div>
      ))}
    </div>
  );
}
