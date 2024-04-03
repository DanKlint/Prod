import React from "react";
import styles from "./Profile.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="container">
        <main className={styles["profile-main"]}>
          <div className={styles["profile-info"]}>
            <div className={styles["profile-photo"]}>
              <img src="./assets/icon/D.jpg" alt="" />
            </div>
            <div className={styles["profile-details"]}>
              <p className={styles["name"]}>Клинцев Даниил</p>
              <p className={styles["login"]}>Логин</p>
              <p className={styles["e-mail"]}>klintcevd@mail.ru</p>
              <p className={styles["birthday"]}>08.11.2001</p>
              {/*ПОЛЬЗОВАТЕЛЬ: логин, пароль, имейл, имя, фамиллия, дата рождения */}
              <button>Редактировать</button>
              <button>Сменить пароль</button>
            </div>
          </div>
          <div className={styles["profile-favourites"]}></div>
        </main>
      </div>
      <Footer />
    </>

  );
};

export default Profile;
