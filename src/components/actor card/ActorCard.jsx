import React, { memo } from "react";
// import { NavLink } from "react-router-dom";
import styles from "./ActorCard.module.css";

const ActorCardImpl = ({ id, imageUrl, name, surname, birthDate, description, onClick }) => {

  const truncatedDescription = description.length > 300 ? `${description.slice(0, 300)}...` : description;

  const handleClick = () => {
    if (onClick) {
      onClick(id); // Вызываем функцию onClick и передаем ей id актера
    }
  };

  return (
    // <NavLink to="#">
    // <div className={styles["actor"]} onClick={handleClick}>
    <div className={styles["actor"]} onClick={handleClick}>
      <div className={styles["image__wrap"]}>
        <img src={imageUrl} alt="Актер" className={styles["image"]} />
      </div>
      <div className={styles["info"]}>
        <p className={styles["info__name"]}>{name} {surname}</p>
        <p className={styles["info__description"]}>
          {truncatedDescription}
        </p>
        {/* <p className={styles["info__age"]}>Возаст: {age} лет</p> */}
      </div>
    </div>
    // </div>
    // </NavLink>
  );
};

export const ActorCard = memo(ActorCardImpl);