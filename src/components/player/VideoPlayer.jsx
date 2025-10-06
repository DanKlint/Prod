// import React, { useEffect, useRef } from 'react';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';
// // import 'videojs-contrib-hls'; // Для поддержки HLS

// const VideoPlayer = ({ videoUrl }) => {
// 	const videoRef = useRef(null); // Ссылка на элемент видео

// 	useEffect(() => {
// 		// Инициализация плеера Video.js
// 		const player = videojs(videoRef.current, {
// 			controls: true,
// 			autoplay: false,
// 			preload: 'auto',
// 			sources: [
// 				{
// 					src: videoUrl,
// 					type: 'application/x-mpegURL', // Тип контента для HLS
// 				},
// 			],
// 		});

// 		// Очистка при размонтировании компонента
// 		return () => {
// 			if (player) {
// 				player.dispose(); // Уничтожение плеера, чтобы избежать утечек памяти
// 			}
// 		};
// 	}, [videoUrl]); // Зависимость для повторной инициализации при изменении videoUrl

// 	return (
// 		<div data-vjs-player>
// 			<video ref={videoRef} className="video-js" />
// 		</div>
// 	);
// };

// export default VideoPlayer;

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({ videoUrl }) => {
	const videoRef = useRef(null);

	useEffect(() => {
		if (Hls.isSupported()) {
			const hls = new Hls();
			hls.loadSource(videoUrl); // Подключение к плейлисту HLS
			hls.attachMedia(videoRef.current); // Привязка к элементу <video>
		} else {
			// Если HLS не поддерживается, используем прямой путь к видео
			const videoElement = videoRef.current;
			videoElement.src = videoUrl;
		}
	}, [videoUrl]);

	return (
		<div>
			<video ref={videoRef} controls width="90%" height="80%" />
		</div>
	);
};

export default VideoPlayer;

