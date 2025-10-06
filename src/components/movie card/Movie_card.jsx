import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Movie_card.module.css";

const MovieCardImpl = ({ id, title, year, runtime, genres, director, actors, plot, posterUrl }) => {
  return (
    <NavLink to={`/movie/${id}`}>
      <div className={styles["card-wrap"]}>
        <div className={styles["card-wrap__img"]}>
          <img src={posterUrl} alt="постер" />
        </div>
        <p className={styles["movie-name"]}>{title}</p>
      </div>
    </NavLink>
  );
};

export const MovieCard = memo(MovieCardImpl);
