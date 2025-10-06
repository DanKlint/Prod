import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from './Error.module.css';

const Error = () => {


	return (
		<>
			<Header />
			<div className='container'>
				<div className={styles["error-block"]}>
					<p>Error 404</p>
					<p>Страница не найдена</p>
				</div>
			</div>
			<Footer />
		</>
	);
};
export default Error;