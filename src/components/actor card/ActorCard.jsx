import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ActorCard.module.css";

const ActorCardImpl = ({ id, img, first_name, last_name, years, description }) => {
  return (
    <NavLink to="#">
      <div className={styles["actor"]}>
        <div className={styles["image__wrap"]}>
          <img src={img} alt="Актер" className={styles["image"]} />
        </div>
        <div className={styles["info"]}>
          <p className={styles["info__name"]}>{first_name} {last_name}</p>
          <p className={styles["info__description"]}>
            {description}
          </p>
          <p className={styles["info__age"]}>{years} лет</p>
        </div>
      </div>
    </NavLink>
  );
};

export const ActorCard = memo(ActorCardImpl);
