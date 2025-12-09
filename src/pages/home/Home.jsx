import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { MovieCard } from "../../components/movie card/Movie_card";
import Footer from "../../components/footer/Footer";
import styles from './Home.module.css';
import Modal from "../../components/modalFilter/Modal";
import SearchForm from "../../components/searchForm/SearchForm";

import { getDailyTheme, filterMoviesByTheme } from "./dailyMovieSelection";

const Home = () => {
	const [open, setOpen] = useState(false);
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [selectedGenre, setSelectedGenre] = useState('Все');
	const [selectedCountry, setSelectedCountry] = useState('Все');
	const [showCatalog, setShowCatalog] = useState(false);


	useEffect(() => {
		fetch("https://localhost:7236/api/movies/list").then((res) => res.json()).then((json) => {
			setMovies(json);
		}).catch((err) => {
			console.warn(err);
			alert("Ошибка получения данных...");
		})
	}, [])

	const onChangeSearchValue = (even) => {
		setSearchValue(even.target.value);
	}

	const handleGenreChange = (event) => {
		setSelectedGenre(event.target.value);
	}

	const handleCountryChange = (event) => {
		setSelectedCountry(event.target.value);
	}

	const handleShowCatalog = () => {
		setShowCatalog(true);
	};

	const dailyTheme = getDailyTheme();
	const filteredMovies = filterMoviesByTheme(movies, dailyTheme);

	return (
		<>
			<Header />
			<div className='container'>
				<main>
					{!showCatalog ? (
						<div>
							<section className={styles["search-filters"]}>

								<SearchForm searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} type="text" placeholder={"Поиск..."} />

								<button onClick={() => setOpen(true)} className={styles["filters-button"]}>
									<img src="./assets/icon/filter.png" alt="фильтры" />
								</button>

							</section>

							<section className={styles["section-slider"]} id={styles['section-slider']}>
								<div className={styles["fantasy"]}>
									<p className={styles["slider-genre-catalog"]} onClick={handleShowCatalog}>Весь каталог</p>
									<div className={styles["slider-line"]}>
										<ul className={styles["list"]}>
											{
												movies.filter((obj) => {
													return (
														// obj.filmName.toLowerCase().includes(searchValue.toLowerCase()) &&
														// (selectedGenre === 'All' || obj.genres.includes(selectedGenre)) &&
														// (selectedCountry === 'All' || obj.country.includes(selectedCountry))
														obj.filmName.toLowerCase().includes(searchValue.toLowerCase()) &&
														(selectedGenre === 'Все' || obj.genre.name === selectedGenre) &&
														(selectedCountry === "Все" || obj.country.name === selectedCountry)
													);
												}).map((obj) => (
													<li>
														<MovieCard
															key={obj.id}
															{...obj}
														/>
													</li>
												))
											}
										</ul>
									</div>
								</div>
								<div className={styles["fantasy"]}>
									<p className={styles["slider-genre"]}>НОВИНКИ</p>
									<div className={styles["slider-line"]}>
										<ul className={styles["list"]}>
											{movies
												.filter((obj) => obj.year > 2021)
												.map((obj) => (
													<li key={obj.id}>
														<MovieCard {...obj} />
													</li>
												))}
										</ul>
									</div>
								</div>
								<div className={styles["fantasy"]}>
									<p className={styles["slider-genre"]}>Наша подборка сегодня: {dailyTheme}</p>
									<div className={styles["slider-line"]}>
										<ul className={styles["list"]}>
											{filteredMovies.map((obj) => (
												<li key={obj.id}>
													<MovieCard {...obj} />
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className={styles["fantasy"]}>
									<p className={styles["slider-genre"]}>ТОП месяца</p>
									<div className={styles["slider-line"]}>
										<ul className={styles["list"]}>
											{
												movies.map((obj) => (
													<li>
														<MovieCard
															key={obj.id}
															{...obj}
														/>
													</li>
												))
											}
										</ul>
									</div>
								</div>

							</section>
							<section className={styles["home-page__search&filters"]}>

							</section>
						</div>
					) : (
						<section className={styles["section-slider"]} id={styles["section-slider"]}>
							<h1 className={styles["catalog-title"]}>Каталог</h1>
							<button onClick={() => setShowCatalog(false)} className={styles["back-button"]}>
								Назад
							</button>
							<ul className={styles["list-movies"]}>
								{movies
									.filter((obj) => {
										return (
											obj.filmName.toLowerCase().includes(searchValue.toLowerCase()) &&
											(selectedGenre === 'Все' || obj.genre.name === selectedGenre) &&
											(selectedCountry === "Все" || obj.country.name === selectedCountry)
										);
									})
									.map((obj) => (
										<li key={obj.id}>
											<MovieCard key={obj.id} {...obj} />
										</li>
									))}
							</ul>
						</section>
					)}
					<section className={styles["home-page__search&filters"]}></section>
				</main>

			</div>

			<Modal open={open} setOpen={setOpen}>
				<div className={styles["filter-title"]}>Жанры:</div>
				<input type="radio" id="All" name="genres" value="Все" checked={selectedGenre === 'Все'}
					onChange={handleGenreChange} />
				<input type="radio" id="Comedy" name="genres" value="Комедия" checked={selectedGenre === 'Комедия'}
					onChange={handleGenreChange} />
				<input type="radio" id="Crime" name="genres" value="Криминал" checked={selectedGenre === 'Криминал'}
					onChange={handleGenreChange} />
				<input type="radio" id="Drama" name="genres" value="Драма" checked={selectedGenre === 'Драма'}
					onChange={handleGenreChange} />
				<input type="radio" id="Detective" name="genres" value="Детектив" checked={selectedGenre === 'Детектив'}
					onChange={handleGenreChange} />
				<input type="radio" id="Documentaries" name="genres" value="Документальное" checked={selectedGenre === 'Документальное'}
					onChange={handleGenreChange} />
				<input type="radio" id="Action" name="genres" value="Боевик" checked={selectedGenre === 'Боевик'}
					onChange={handleGenreChange} />
				<input type="radio" id="Western" name="genres" value="Вестерн" checked={selectedGenre === 'Вестерн'}
					onChange={handleGenreChange} />
				<input type="radio" id="War" name="genres" value="Военный" checked={selectedGenre === 'Военный'}
					onChange={handleGenreChange} />
				<input type="radio" id="Horrors" name="genres" value="Хоррор" checked={selectedGenre === 'Хоррор'}
					onChange={handleGenreChange} />
				<input type="radio" id="Fiction" name="genres" value="Фантастика" checked={selectedGenre === 'Фантастика'}
					onChange={handleGenreChange} />
				<input type="radio" id="Fantasy" name="genres" value="Фэнтези" checked={selectedGenre === 'Фэнтези'}
					onChange={handleGenreChange} />
				<input type="radio" id="Adventures" name="genres" value="Приключения" checked={selectedGenre === 'Приключения'}
					onChange={handleGenreChange} />
				<input type="radio" id="Melodrama" name="genres" value="Мелодрамы" checked={selectedGenre === 'Мелодрамы'}
					onChange={handleGenreChange} />
				<input type="radio" id="Thrillers" name="genres" value="Триллер" checked={selectedGenre === 'Триллер'}
					onChange={handleGenreChange} />

				<ol className={styles["filters-genre"]}>
					<li>
						<label for="All">Все</label>
					</li>
					<li>
						<label for="Comedy">Комедии</label>
					</li>
					<li>
						<label for="Crime">Криминал</label>
					</li>
					<li>
						<label for="Drama">Драмы</label>
					</li>
					<li>
						<label for="Detective">Детективы</label>
					</li>
					<li>
						<label for="Documentaries">Документальные</label>
					</li>
					<li>
						<label for="Action">Боевики</label>
					</li>
					<li>
						<label for="Western">Вестерны</label>
					</li>
					<li>
						<label for="War">Военные</label>
					</li>
					<li>
						<label for="Horrors">Ужасы</label>
					</li>
					<li>
						<label for="Fiction">Фантастика</label>
					</li>
					<li>
						<label for="Fantasy">Фэнтези</label>
					</li>
					<li>
						<label for="Adventure">Приключения</label>
					</li>
					<li>
						<label for="Melodrama">Мелодрамы</label>
					</li>
					<li>
						<label for="Thriller">Триллеры</label>
					</li>
				</ol>

				<div className="line"></div>

				<div className={styles["filter-title"]}>Страна:</div>
				<input type="radio" id="Все" name="country" value="Все" checked={selectedCountry === 'Все'}
					onChange={handleCountryChange} />
				<input type="radio" id="Russia" name="country" value="Russia" checked={selectedCountry === 'Russia'}
					onChange={handleCountryChange} />
				<input type="radio" id="USSR" name="country" value="USSR" checked={selectedCountry === 'USSR'}
					onChange={handleCountryChange} />
				<input type="radio" id="Dorama" name="country" value="Dorama" checked={selectedCountry === 'Dorama'}
					onChange={handleCountryChange} />
				<input type="radio" id="USA" name="country" value="США" checked={selectedCountry === 'США'}
					onChange={handleCountryChange} />

				<ol className={styles["filters-country"]}>
					<li>
						<label for="Все">Все</label>
					</li>
					<li>
						<label for="Russia">Россия</label>
					</li>
					<li>
						<label for="USSR">СССР</label>
					</li>
					<li>
						<label for="USA">США</label>
					</li>
					<li>
						<label for="Dorama">Дорамы</label>
					</li>
				</ol>
			</Modal>
			<Footer />
		</>

	);
};

export default Home;