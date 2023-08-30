import React from "react";
import styles from "./MunhwaRow.module.css";
import { useNavigate } from "react-router-dom";

function MunhwaRow(props) {
  const navigate = useNavigate();

  const onClickMunhwaItem = () => {
    navigate(`/munhwaRow/${props.title}`, {
      state: props,
    });
  };

  return (
    <div className={styles.content}>
      <div className={styles.content_box}>
        <img src={props.poster} onClick={onClickMunhwaItem} />
      </div>
      <div>{props.title}</div>
      <div>{props.singer}</div>
    </div>
  );
}

export default MunhwaRow;
