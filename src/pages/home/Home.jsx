import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { MovieCard } from "../../components/movie card/Movie_card";
import Footer from "../../components/footer/Footer";
import styles from './Home.module.css';
import Modal from "../../components/modalFilter/Modal";
import SearchForm from "../../components/searchForm/SearchForm";

const Home = () => {
	const [open, setOpen] = useState(false);
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [selectedGenre, setSelectedGenre] = useState('All');
	const [selectedCountry, setSelectedCountry] = useState('All');

	

	useEffect(() => {
		fetch("http://localhost:3300/movies").then((res) => res.json()).then((json) => {
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

	return (
		<>
			<Header />
			<div className='container'>
				<main>
					<section className={styles["search-filters"]}>

						<SearchForm searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} type="text" placeholder={"Поиск..."} />

						<button onClick={() => setOpen(true)} className={styles["filters-button"]}>
							<img src="./assets/icon/filter.png" alt="фильтры" />
						</button>

					</section>

					<section className={styles["section-slider"]} id={styles['section-slider']}>
						<div className={styles["fantasy"]}>
							<p className={styles["slider-genre"]}>Весь каталог</p>
							<div className={styles["slider-line"]}>
								<ul className={styles["list"]}>
									{
										movies.filter((obj) => {
											return (
												obj.title.toLowerCase().includes(searchValue.toLowerCase()) &&
												(selectedGenre === 'All' || obj.genres.includes(selectedGenre)) &&
												(selectedCountry === 'All' || obj.country.includes(selectedCountry))
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
										.filter((obj) => obj.year > 2005)
										.map((obj) => (
											<li key={obj.id}>
												<MovieCard {...obj} />
											</li>
										))}
								</ul>
							</div>
						</div>
						<div className={styles["fantasy"]}>
							<p className={styles["slider-genre"]}>Наша подборка</p>
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
				</main>
			</div>

			<Modal open={open} setOpen={setOpen}>
				<div className={styles["filter-title"]}>Жанры:</div>
				<input type="radio" id="All" name="genres" value="All" checked={selectedGenre === 'All'}
					onChange={handleGenreChange} />
				<input type="radio" id="Comedy" name="genres" value="Comedy" checked={selectedGenre === 'Comedy'}
					onChange={handleGenreChange} />
				<input type="radio" id="Crime" name="genres" value="Crime" checked={selectedGenre === 'Crime'}
					onChange={handleGenreChange} />
				<input type="radio" id="Drama" name="genres" value="Drama" checked={selectedGenre === 'Drama'}
					onChange={handleGenreChange} />
				<input type="radio" id="Detective" name="genres" value="Detective" checked={selectedGenre === 'Detective'}
					onChange={handleGenreChange} />
				<input type="radio" id="Documentaries" name="genres" value="Documentaries" checked={selectedGenre === 'Documentaries'}
					onChange={handleGenreChange} />
				<input type="radio" id="Action" name="genres" value="Action" checked={selectedGenre === 'Action'}
					onChange={handleGenreChange} />
				<input type="radio" id="Western" name="genres" value="Western" checked={selectedGenre === 'Western'}
					onChange={handleGenreChange} />
				<input type="radio" id="War" name="genres" value="War" checked={selectedGenre === 'War'}
					onChange={handleGenreChange} />
				<input type="radio" id="Horrors" name="genres" value="Horrors" checked={selectedGenre === 'Horrors'}
					onChange={handleGenreChange} />
				<input type="radio" id="Fiction" name="genres" value="Fiction" checked={selectedGenre === 'Fiction'}
					onChange={handleGenreChange} />
				<input type="radio" id="Fantasy" name="genres" value="Fantasy" checked={selectedGenre === 'Fantasy'}
					onChange={handleGenreChange} />
				<input type="radio" id="Adventures" name="genres" value="Adventures" checked={selectedGenre === 'Adventures'}
					onChange={handleGenreChange} />
				<input type="radio" id="Melodrama" name="genres" value="Melodrama" checked={selectedGenre === 'Melodrama'}
					onChange={handleGenreChange} />
				<input type="radio" id="Thrillers" name="genres" value="Thrillers" checked={selectedGenre === 'Thrillers'}
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

				<div className={styles["filter-title"]}>Страна:</div>
				<input type="radio" id="All" name="country" value="All" checked={selectedCountry === 'All'}
					onChange={handleCountryChange} />
				<input type="radio" id="Russia" name="country" value="Russia" checked={selectedCountry === 'Russia'}
					onChange={handleCountryChange} />
				<input type="radio" id="USSR" name="country" value="USSR" checked={selectedCountry === 'USSR'}
					onChange={handleCountryChange} />
				<input type="radio" id="Dorama" name="country" value="Dorama" checked={selectedCountry === 'Dorama'}
					onChange={handleCountryChange} />
				<input type="radio" id="USA" name="country" value="USA" checked={selectedCountry === 'USA'}
					onChange={handleCountryChange} />

				<ol className={styles["filters-country"]}>
					<li>
						<label for="All">Все</label>
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