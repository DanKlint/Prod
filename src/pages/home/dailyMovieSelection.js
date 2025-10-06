// dailyMovieSelection.js

// Функция для определения темы на каждый день
export function getDailyTheme() {
	const themes = ['Боевик', 'Хоррор', 'Комедия', 'Драма', 'Фантастика', 'Документальное', 'Мелодрамы', 'Детектив'];
	const today = new Date();
	const themeIndex = today.getDay() % themes.length; // Или любая другая логика для выбора темы
	return themes[themeIndex];
}

// Функция для фильтрации фильмов по теме
export function filterMoviesByTheme(movies, theme) {
	return movies.filter(movie => movie.genre.name === theme);
}
