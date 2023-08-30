import React, { useState, useEffect, useCallback, useMemo } from "react";
import styles from "./Musical.module.css";
import Searchbar from "../searchbar/Searchbar";
import SearchResultsList from "../searchbar/SearchResultsList";
import axios from "axios";
import { Link } from "react-router-dom";

function Musical() {
  const [inputD, setInputD] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/music.json").then((res) => {
      setInputD(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container_body}>
        <div className={styles.container_body_inner}>
          <div>
            <h1>
              뮤지컬/오페라 <hr style={{ border: 0 }} />
            </h1>
          </div>
          <div className={styles.searchbarcontainer}>
            <Searchbar inputD={inputD} />
          </div>
        </div>
        {/* <div>
          <SearchResultsList inputD={inputD} data={dataa} />
        </div> */}
      </div>
    </div>
  );
}

export default Musical;
