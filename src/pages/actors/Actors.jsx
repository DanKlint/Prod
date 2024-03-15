import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { ActorCard } from "../../components/actor card/ActorCard";
import styles from "./Actors.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import Modal from "../../components/modalFilter/Modal";
import SearchForm from "../../components/searchForm/SearchForm";

const Actors = () => {
  // const [open, setOpen] = useState(false);
  const [actors, setActors] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch("http://localhost:3300/actors").then((res) => res.json()).then((json) => {
      setActors(json);
    }).catch((err) => {
      console.warn(err);
      alert("Ошибка получения данных актеров...");
    })
  }, [])

  const onChangeSearchValue = (even) => {
    setSearchValue(even.target.value);
  }


  return (
    <>
      <Header />
      <div className="container">
        <main>
          <section className={styles["search-filters"]}>
            <SearchForm searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} placeholder="Поиск" type="text" />
          </section>
          <section className={styles["actors-section"]}>
            <ul className={styles["actors-list"]}>
              {
                actors.filter((obj) => {
                  const fullName = (obj.first_name + " " + obj.last_name).toLowerCase();

                  return (
                    fullName.includes(searchValue.toLowerCase())
                  );
                }).map((obj) => (
                  <li>
                    <ActorCard
                      key={obj.id}
                      {...obj}
                    />
                  </li>
                ))
              }
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Actors;