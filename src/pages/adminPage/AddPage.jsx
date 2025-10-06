import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from './AddPage.module.css';

const AddPage = () => {

	const [selectedForm, setSelectedForm] = useState('movie');
	const [genre, setGenre] = useState([]);
	const [director, setDirector] = useState([]);
	const [country, setCountry] = useState([]);

	const handleFormChange = (formType) => {
		setSelectedForm(formType);
	};

	useEffect(() => {
		fetch("https://localhost:7236/api/countries/list").then((res) => res.json()).then((json) => {
			setCountry(json);
		}).catch((err) => {
			console.warn(err);
			alert("Ошибка получения данных...");
		})
	}, [])

	useEffect(() => {
		fetch("https://localhost:7236/api/directors/list").then((res) => res.json()).then((json) => {
			setDirector(json);
		}).catch((err) => {
			console.warn(err);
			alert("Ошибка получения данных...");
		})
	}, [])

	useEffect(() => {
		fetch("https://localhost:7236/api/genres/list").then((res) => res.json()).then((json) => {
			setGenre(json);
		}).catch((err) => {
			console.warn(err);
			alert("Ошибка получения данных...");
		})
	}, [])

	return (
		<>
			<Header />
			<div className='container'>
				<div className={styles["formSwitcher"]}>
					<button onClick={() => handleFormChange('movie')} className={selectedForm === 'movie' ? styles['active'] : styles['select-bnt']}>
						Добавить фильм
					</button>
					<button onClick={() => handleFormChange('actor')} className={selectedForm === 'actor' ? styles['active'] : styles['select-bnt']}>
						Добавить актера
					</button>
					<button onClick={() => handleFormChange('news')} className={selectedForm === 'news' ? styles['active'] : styles['select-bnt']}>
						Добавить новость
					</button>
				</div>
				<div className={styles["formContainer"]}>
					{selectedForm === 'movie' && (
						<form className={styles["form"]}>
							<h2>Форма добавления фильма</h2>
							<label className={styles["label"]} htmlFor="filmName">Название фильма:</label>
							<input className={styles["input"]} type="text" id="filmName" name="filmName" required />

							<label className={styles["label"]} htmlFor="description">Описание:</label>
							<textarea className={styles["textarea"]} type="text" id="description" name="description" required />

							<label className={styles["label"]} htmlFor="year">Год:</label>
							<input className={styles["input"]} type="number" id="year" name="year" required />

							<label className={styles["label"]} htmlFor="previewImageUrl">Постер:</label>
							<input className={styles["input"]} type="text" id="previewImageUrl" name="previewImageUrl" required />

							<label className={styles["label"]} htmlFor="durationInMinutes">Продолжительность:</label>
							<input className={styles["input"]} type="text" id="durationInMinutes" name="durationInMinutes" required />

							<label className={styles["label"]} htmlFor="durationInMinutes">Ссылка на фильм:</label>
							<input className={styles["input"]} type="text" id="durationInMinutes" name="durationInMinutes" required />

							<label className={styles["label"]} htmlFor="genreId">Жанр:</label>
							{/* <input className={styles["input"]} type="text" id="genreId" name="genreId" required /> */}
							<select
								className={styles.input}
								id="genreId"
								name="genreId"
								required
							>
								<option value="">Выберите жанр</option>
								{genre.map((genre) => (
									<option key={genre.id} value={genre.id}>
										{genre.name}
									</option>
								))}
							</select>

							<label className={styles["label"]} htmlFor="directorId">Режисер:</label>
							{/* <input className={styles["input"]} type="text" id="directorId" name="directorId" required /> */}
							<select
								className={styles.input}
								id="directorId"
								name="directorId"
								required
							>
								<option value="">Выберите режиссера</option>
								{director.map((director) => (
									<option key={director.id} value={director.id}>
										{director.firstname} {director.surname}
									</option>
								))}
							</select>

							<label className={styles["label"]} htmlFor="countryId">Страна:</label>
							{/* <input className={styles["input"]} type="text" id="countryId" name="countryId" required /> */}
							<select
								className={styles.input}
								id="countryId"
								name="countryId"
								required
							>
								<option value="">Выберите страну</option>
								{country.map((country) => (
									<option key={country.id} value={country.id}>
										{country.name}
									</option>
								))}
							</select>
							<button className={styles["btn-add"]} type="submit">Добавить</button>
						</form>
					)}
					{selectedForm === 'actor' && (
						<form className={styles["form"]}>
							<h2>Форма добавления актера</h2>
							<label className={styles["label"]} htmlFor="name">Имя актера:</label>
							<input className={styles["input"]} type="text" id="name" name="name" required />

							<label className={styles["label"]} htmlFor="surname">Фамилия актера:</label>
							<input className={styles["input"]} type="text" id="surname" name="surname" required />

							<label className={styles["label"]} htmlFor="description">Описание:</label>
							<textarea className={styles["textarea"]} type="text" id="description" name="description" required />

							<label className={styles["label"]} htmlFor="birthDate">Дата рождения:</label>
							<input className={styles["input"]} type="text" id="birthDate" name="birthDate" required />

							<button className={styles["btn-add"]} type="submit">Добавить</button>
						</form>
					)}
					{selectedForm === 'news' && (
						<form className={styles["form"]}>
							<h2>Форма добавления Новости</h2>
							<label className={styles["label"]} htmlFor="news-name">Название:</label>
							<input className={styles["input"]} type="text" id="news-name" name="news-name" required />

							<label className={styles["label"]} htmlFor="text">Описание:</label>
							<textarea className={styles["textarea"]} type="text" id="text" name="text" required />

							<label className={styles["label"]} htmlFor="urlLink">Ссылка:</label>
							<input className={styles["input"]} type="text" id="urlLink" name="urlLink" required />

							<label className={styles["label"]} htmlFor="imageUrl">Картинка:</label>
							<input className={styles["input"]} type="text" id="imageUrl" name="imageUrl" required />

							<label className={styles["label"]} htmlFor="filmId">Номер фильма:</label>
							<input className={styles["input"]} type="text" id="filmId" name="filmId" required />

							<button className={styles["btn-add"]} type="submit">Добавить</button>
						</form>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};
export default AddPage;