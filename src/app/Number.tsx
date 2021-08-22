import * as React from "react";

import styles from "./Number.css";

interface Props {
  thisNumber: number;
  selectedNumber: number | undefined;
  setSelected: (thisNumber: number) => void;
}

const Number: React.FC<Props> = (props) => {
  const classes = [styles.number]; // probably worth using classnames here...
  const onClick = () => {
    props.setSelected(props.thisNumber);
  };
  if (props.selectedNumber || 0 > 0) {
    if (props.thisNumber === props.selectedNumber) {
      classes.push(styles.selected);
    } else if (props.thisNumber % props.selectedNumber === 0) {
      classes.push(styles.highlight);
    }
  }

  return (
    <button className={classes.join(" ")} onClick={onClick}>
      {props.thisNumber}
    </button>
  );
};

export default Number;
