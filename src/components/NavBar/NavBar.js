import React, { useState } from "react";

import styles from "./NavBar.module.css";

export default function NavBar({
  isSorting,
  getRange,
  createNewArr,
  onBubbleSort,
  onInsertionSort,
  onHeapSort,
  onMergeSort,
}) {
  const [value, setValue] = useState();

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
    getRange(value);
  };

  const disableClass = isSorting ? styles.disabled : "";

  return (
    <div className={styles.container}>
      <h1>Sorting Visualizer</h1>
      <div>
        <button
          className={`${styles.newArrBtn} ${disableClass}`}
          onClick={createNewArr}
        >
          Generate New Array
        </button>
      </div>
      <div className={styles.input}>
        <label>Change Size Of Array</label>
        <input
          type="range"
          onChange={inputChangeHandler}
          min="10"
          max="150"
          className={disableClass}
        />
      </div>
      <div className={styles.algos}>
        <ul>
          <li onClick={onBubbleSort} className={disableClass}>
            Bubble Sort
          </li>
          <li onClick={onInsertionSort} className={disableClass}>
            Insertion Sort
          </li>
          <li onClick={onHeapSort} className={disableClass}>
            Heap Sort
          </li>
          <li onClick={onMergeSort} className={disableClass}>
            Merge Sort
          </li>
        </ul>
      </div>
    </div>
  );
}
