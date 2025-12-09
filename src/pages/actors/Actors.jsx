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
  const [selectedActor, setSelectedActor] = useState(null);



  useEffect(() => {
    fetch("https://localhost:7236/api/actors/list").then((res) => res.json()).then((json) => {
      setActors(json);
    }).catch((err) => {
      console.warn(err);
      alert("Ошибка получения данных актеров...");
    })
  }, []);

  const loadActorDetails = (actorId) => {
    fetch(`https://localhost:7236/api/actors/${actorId}/details`)
      .then((res) => res.json())
      .then((json) => {
        setSelectedActor(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка получения данных об актере...");
      });
  };

  useEffect(() => {
    if (actors.length > 0 && !selectedActor) {
      setSelectedActor(actors[0]);
    }
  }, [actors, selectedActor]);

  const onChangeSearchValue = (even) => {
    setSearchValue(even.target.value);
  }

  return (
    <>
      <Header />
      <div className="container">
        <section className={styles["search-filters"]}>
          <SearchForm searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} placeholder="Поиск" type="text" />
        </section>
        <main className={styles["main-container"]}>
          <section className={styles["actors-section"]}>
            <ul className={styles["actors-list"]}>
              {actors
                .filter((obj) => {
                  const fullName = (obj.name + " " + obj.surname).toLowerCase();
                  return fullName.includes(searchValue.toLowerCase());
                })
                .map((obj) => (
                  <li key={obj.id}>
                    <ActorCard
                      {...obj}
                      isSelected={selectedActor && selectedActor.id === obj.id}
                      onClick={() => loadActorDetails(obj.id)}
                    />
                  </li>
                ))}
            </ul>
          </section>
          <section className={styles["actor-details"]}>
            {selectedActor && (
              <div>
                <div className={styles["img-wrap"]}>
                  {/* <img src={selectedActor.img} alt={selectedActor.name + " " + selectedActor.surname} /> */}
                  <img src={selectedActor.imageUrl} alt={selectedActor.name + " " + selectedActor.surname} />
                </div>
                <h2>{selectedActor.name + " " + selectedActor.surname}</h2>
                <p>{selectedActor.description}</p>
                {/* <p>{selectedActor.birthDate} лет</p> */}
              </div>
            )}
          </section>
        </main>

      </div>
      <Footer />
    </>
  );
};

export default Actors;