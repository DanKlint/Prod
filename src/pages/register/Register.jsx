import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faVk,
  faYoutube,
  faTelegram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { NavLink } from "react-router-dom";


import styles from "./Register.module.css";
import InputForm from "../../components/inputForm/InputForm";

const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    // Проверяем совпадают ли пароли
    setPasswordMatchError(value !== confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    // Проверяем совпадают ли пароли
    setPasswordMatchError(value !== password);
  };

  return (
    <main className={styles["wrapper"]}>
      <form action="" className={styles["form"]} autocomplete="off">
        <h1 className={styles["title"]}>SomeSeries</h1>
        <div className={styles["inp"]}>
          <FontAwesomeIcon icon={faUser} className={styles["icon"]} />
          <InputForm name="" id="" inputPlaceholder="Логин" />
        </div>
        <div className={styles["inp"]}>
          <FontAwesomeIcon icon={faUser} className={styles["icon"]} />
          <InputForm name="" id="" inputPlaceholder="Имя" />
        </div>
        <div className={styles["inp"]}>
          <FontAwesomeIcon icon={faUser} className={styles["icon"]} />
          <InputForm name="" id="" inputPlaceholder="Фамилия" />
        </div>
        <div className={styles["inp"]}>
          <FontAwesomeIcon icon={faUser} className={styles["icon"]} />
          <InputForm name="" id="" inputPlaceholder="Почта" />
        </div>
        <div className={styles["inp"]}>
          <FontAwesomeIcon icon={faUser} className={styles["icon"]} />
          <InputForm name="" id="" inputPlaceholder="Дата рождения" />
        </div>
        <div className={styles["inp"]}>
          <FontAwesomeIcon icon={faLock} className={styles["icon"]} />
          <InputForm
            type="password"
            name=""
            id=""
            inputPlaceholder="Пароль"
            autoComplete="new-password"
            searchValue={password}
            onChangeSearchValue={handlePasswordChange}
          />
        </div>
        <div className={styles["inp"]}>
          <FontAwesomeIcon icon={faLock} className={styles["icon"]} />
          <InputForm
            type="password"
            name=""
            id=""
            inputPlaceholder="Подтвердите пароль"
            autoComplete="new-password"
            searchValue={confirmPassword}
            onChangeSearchValue={handleConfirmPasswordChange}
          />

        </div>
        {passwordMatchError && (
          <div className={styles['error']}>Пароли не совпадают</div>
        )}
        <button className={styles["submit"]}>Зарегистрироваться</button>
        <p className={styles["footer"]}>
          Есть аккаунт?
          <NavLink to="/login" className={styles["link"]}>
            {" "}
            Войти
          </NavLink>
        </p>
      </form>

      <div className={styles["banner"]}>
        <div className={styles["container"]}>
          <p className={styles["para"]} id={styles["head1"]}>
            Добро пожаловать!
          </p>
          <p className={styles["para"]} id={styles["head2"]}>
            SomeSeries - ваш проводник
          </p>
          <p className={styles["para"]} id={styles["head3"]}>
            По миру кино и сериалов
          </p>
          <p className={styles["para"]} id={styles["head4"]}>
            Начнём!
          </p>
          <div className={styles["icons"]} id={styles["head5"]}>
            <FontAwesomeIcon icon={faVk} className={styles["icon"]} />
            <FontAwesomeIcon icon={faYoutube} className={styles["icon"]} />
            <FontAwesomeIcon icon={faTelegram} className={styles["icon"]} />
            <FontAwesomeIcon icon={faGithub} className={styles["icon"]} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
