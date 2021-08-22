import * as React from "react";

import Number from "./Number";

import styles from "./Grid.css";

interface Props {}

const numbers = [];
for (let i = 1; i <= 144; i += 1) {
  numbers.push(i);
}

const Grid: React.FC<Props> = () => {
  const [selectedNumber, setSelectedNumber] = React.useState<
    number | undefined
  >(undefined);
  return (
    <div className={styles.grid}>
      {numbers.map((num) => (
        <Number
          key={String(num)}
          thisNumber={num}
          selectedNumber={selectedNumber}
          setSelected={setSelectedNumber}
        />
      ))}
    </div>
  );
};

export default Grid;
