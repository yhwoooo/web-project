import React from "react";
import styles from "./Input_signup.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Input_signup(props) {
  const initialData = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : [];
  const [userData, setUserData] = useState(initialData);
  //   const [isMember, setIsMember] = useState(false);

  const onClick = () => {
    localStorage.removeItem("userData");
    sessionStorage.setItem("userId", initialData.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_body}>
        <div className={styles.container_body_inner}>
          <div>
            <h1>
              회원가입 <hr style={{ border: 0 }} />
            </h1>
          </div>
          <div className={styles.body}>
            <div className={styles.a}>
              <div className={styles.text}>닉네임 |</div>
              {/* <div id={styles.text_age}>나이 |</div> */}
              <div className={styles.text}>관심지역 |</div>
              <div className={styles.text}>관심문화 |</div>
              <div id={styles.text}>
                <a
                  className={styles.text_link}
                  href="http://localhost:3000"
                  onClick={onClick}
                >
                  <button type="submit" form="profileForm">
                    회원가입 완료하기
                  </button>
                </a>
              </div>
            </div>
            <div className={styles.b}>
              <form
                action="/members/new"
                method="post"
                name="profile"
                target=""
                encType=""
                id="profileForm"
              >
                <div className={styles.text} id={styles.nickname}>
                  <input type="text" name="nickName" />
                </div>
                <div className={styles.text} id={styles.age}>
                  <input
                    type="hidden"
                    name="age_range"
                    value={userData.age_range}
                  />
                  <input type="hidden" name="email" value={userData.email} />
                  <input type="hidden" name="gender" value={userData.gender} />
                  <input type="hidden" name="id" value={userData.id} />
                </div>
                <div className={styles.text} id={styles.interest_region}>
                  <select name="district">
                    <option value="dobong">도봉구</option>
                    <option value="nowon">노원구</option>
                    <option value="kangbook">강북구</option>
                    <option value="sungbook">성북구</option>
                    <option value="jungrang">중랑구</option>
                    <option value="dongdaemon">동대문구</option>
                    <option value="gwangjin">광진구</option>
                    <option value="sungdong">성동구</option>
                    <option value="jung">중구</option>
                    <option value="youngsan">용산구</option>
                    <option value="joungro">종로구</option>
                    <option value="seodaemon">서대문구</option>
                    <option value="eunpyeng">은평구</option>
                    <option value="mapo">마포구</option>
                    <option value="gangseo">강서구</option>
                    <option value="yangchun">양천구</option>
                    <option value="guro">구로구</option>
                    <option value="youngdeung">영등포구</option>
                    <option value="geumcheon">금천구</option>
                    <option value="dongjak">동작구</option>
                    <option value="gwanak">관악구</option>
                    <option value="seocho">서초구</option>
                    <option value="gangnam">강남구</option>
                    <option value="songpa">송파구</option>
                    <option value="gangdong">강동구</option>
                  </select>
                </div>
                <div className={styles.text} id={styles.interest_culture}>
                  <div>
                    <input type="checkbox" name="favoriteCategory" />
                    뮤지컬/오페라
                  </div>
                  <div>
                    <input type="checkbox" name="favoriteCategory" />
                    콘서트
                  </div>
                  <div>
                    <input type="checkbox" name="favoriteCategory" />
                    독주/독창회
                  </div>
                  <div>
                    <input type="checkbox" name="favoriteCategory" />
                    문화교양/강좌
                  </div>
                  <div>
                    <input type="checkbox" name="favoriteCategory" />
                    교육/체험
                  </div>
                  <div>
                    <input type="checkbox" name="favoriteCategory" />
                    전시/미술
                  </div>
                  <div>
                    <input type="checkbox" name="favoriteCategory" />
                    클래식
                  </div>
                  <div>
                    <input type="checkbox" name="favoriteCategory" />
                    국악
                  </div>
                  <div>
                    <input type="checkbox" name="favoriteCategory" />
                    무용
                  </div>
                  <div>
                    <input type="checkbox" name="favoriteCategory" />
                    연극
                  </div>
                  <div>
                    <input type="checkbox" name="favoriteCategory" />
                    영화
                  </div>
                  <div>
                    <input type="checkbox" name="favoriteCategory" />
                    축제
                  </div>
                  <div>
                    <input type="checkbox" name="favoriteCategory" />
                    기타
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input_signup;
