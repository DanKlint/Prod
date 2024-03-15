import React from "react";
import styles from "./SearchForm.module.css";

const SearchForm = ({
  type,
  placeholder,
  searchValue,
  onChangeSearchValue,
}) => {
  return (
    <div>
      <form className={styles["form"]}>
        <input
          className={styles["input"]}
          type={type || "text"}
          placeholder={placeholder}
          value={searchValue}
          onChange={onChangeSearchValue}
        />
        <button className={styles["search-button"]} type="submit">
          <img src="./assets/icon/lupa1.png" alt="лупа" />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
