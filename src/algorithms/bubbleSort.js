import sleep from "./sleep.js";

const bubbleSort = async (inputArr, setter) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
        setter([...inputArr]);
      }
    }
    await sleep(30);
  }
  return inputArr;
};

export default bubbleSort;
