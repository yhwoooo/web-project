import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./MunhwaDetail.module.css";

export default function MunhwaDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  console.log(state);
  console.log(title);
  console.log(state.singer);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          src={state.poster}
          className={styles.poster}
          alt="문화 포스터 이미지"
        />
        <div className={styles.inner_content}>
          <div className={styles.title}>
            <div>{title}</div>
          </div>
          <div>
            <div>{state.singer}</div>
          </div>
          <div>
            <div>9/15 ~ 9/23</div>
          </div>
          <div>
            <div>서울시 노원구 중계동</div>
          </div>
          <div>
            <div>20대</div>
          </div>
          <div>
            <div>4.5</div>
          </div>
        </div>
      </div>
    </div>
  );
}
