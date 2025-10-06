import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { authenticateUser } from "../../redux/reducers/authSlice";
// import { Button } from "../../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faVk, faYoutube, faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";
import InputForm from "../../components/inputForm/InputForm";
import { NavLink } from "react-router-dom";
import styles from './Login.module.css';

const Login = () => {
	return (
		// <div className="container">
		<main className={styles['wrapper']}>
			<form action="" className={styles["form"]} autocomplete="off">
				<h1 className={styles["title"]}>SomeSeries</h1>
				<div className={styles["inp"]}>
					<FontAwesomeIcon icon={faUser} className={styles["icon"]} />
					<InputForm className={styles["inp-inputForm"]} name="" id="" inputPlaceholder="Логин" />
					{/* <i className={styles["fa-solid fa-user"]}></i> */}

				</div>
				<div className={styles["inp"]}>
					<FontAwesomeIcon icon={faLock} className={styles["icon"]} />
					<InputForm type="password" name="" id="" inputPlaceholder="Пароль" />
					{/* <i className={styles["fa-solid fa-lock"]}></i> */}

				</div>
				<button className={styles["submit"]}>Войти</button>
				<p className={styles["footer"]}>Нет аккаунта? <NavLink to="/register" className={styles["link"]}>Зарегистрироваться</NavLink></p>
			</form>


			<div className={styles["banner"]}>
				<div className={styles['container']}>
					<p className={styles['para']} id={styles["head1"]}>Добро пожаловать!</p>
					<p className={styles['para']} id={styles["head2"]}>SomeSeries - ваш проводник</p>
					<p className={styles['para']} id={styles["head3"]}>По миру кино и сериалов</p>
					<p className={styles['para']} id={styles["head4"]}>Начнём!</p>
					<div className={styles["icons"]} id={styles["head5"]}>
						<FontAwesomeIcon icon={faVk} className={styles["icon"]} id={styles["vk"]} />
						<FontAwesomeIcon icon={faYoutube} className={styles["icon"]} />
						<FontAwesomeIcon icon={faTelegram} className={styles["icon"]} />
						<FontAwesomeIcon icon={faGithub} className={styles["icon"]} />
					</div>
				</div>
			</div>
		</main>
		// </div>
	);
};

export default Login;