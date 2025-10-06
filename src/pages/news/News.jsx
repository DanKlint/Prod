import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./News.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const News = () => {
  return (
    <>
      <Header />
      <div className="container">
        <main className={styles["columns"]}>
          <section className={styles["main-column"]}>
            <NavLink
              className={styles["article first-article"]}
              to="https://www.rbc.ru/life/news/650814999a79476e40e3d43f"
            >
              <div className={styles["article-body"]}>
                <figure className={styles["article-image"]}>
                  <img src="./assets/img/news/oppenheimer.jpg" alt="" />
                </figure>
                <h2 className={styles["article-title"]}>
                  Фильм Нолана «Оппенгеймер» стал самым кассовым байопиком в
                  истории
                </h2>
                <br />
                <h3>О чем фильм?</h3>
                <p className={styles["article-content"]}>
                  Биографическая киноистория о создателе атомной бомбы
                  «Оппенгеймер» режиссера Кристофера Нолана собрала в мировом
                  прокате $912 млн и оставила позади прежнего рекордсмена среди
                  байопиков — фильм о Фредди Меркьюри «Богемская рапсодия». Касса
                  картины про музыканта, по данным, которые приводит издание The
                  Wrap, составила в 2018 году $902 млн. Сборы байопика про Роберта
                  Оппенгеймера в минувшие выходные превысили эту сумму более чем
                  на $10 млн.
                </p>
                <br />
                <h3>Отсылки в прошлое или новый повод задуматься о будущем?</h3>
                <p className={styles["article-content"]}>
                  Мысли создателя фильма говорят нам...
                </p>
                <div className={styles["article-info"]}>
                  <span>Автор: Ева Акимова</span>
                  <span>0 комментариев</span>
                </div>
              </div>
            </NavLink>

            <NavLink
              className={styles["article"]}
              to="https://ren.tv/longread/1133155-skandaly-barbi"
            >
              <div className={styles["article-body"]}>
                <figure className={styles["article-image"]}>
                  <img src="./assets/img/news/Barbie.jpg" alt="" />
                </figure>
                <h2 className={styles["article-title"]}>
                  "Барби" стал самым скандальным фильмом года
                </h2>
                <p className={styles["article-content"]}>
                  "Барби" – новая работа режиссера Греты Гервиг. Фильм вышел в
                  мировой прокат 21 июля 2023 года и всего за три недели успел
                  собрать более миллиарда долларов, тем самым установив новый
                  кинорекорд. В то же время лента также стала причиной многих
                  скандалов и бурных обсуждений...
                </p>
                <div className={styles["article-info"]}>
                  <span>Автор: ren.tv</span>
                  <span>158 комментариев</span>
                </div>
              </div>
            </NavLink>
          </section>

          <section className={styles["column"]}>
            <NavLink
              className={styles["article one"]}
              to="https://dzen.ru/NavLink/ZF-zbCFZ9ypTyQyB"
            >
              <div className={styles["article-body"]}>
                <figure className={styles["article-image"]}>
                  <img src="./assets/img/news/guardians.jpg" alt="" />
                </figure>
                <h2 className={styles["article-title"]}>
                  "Стражи галактики 3": 12 вопросов, которые остались без ответа
                  после финала трилогии
                </h2>
                <p className={styles["article-content"]}>
                  Параллельный импорт работает отлично – прошла всего неделя после
                  старта мирового проката, а "Стражи галактики 3" уже нарисовались
                  в наших кинотеатрах и на онлайн-площадках...
                </p>
                <div className={styles["article-info"]}>
                  <span>Автор: Дзен</span>
                  <span>61 комментарий</span>
                </div>
              </div>
            </NavLink>
            <NavLink
              className={styles["article"]}
              to="https://journal.tinkoff.ru/news/new-dc-universe/"
            >
              <div className={styles["article-body"]}>
                <figure className={styles["article-image"]}>
                  <img src="./assets/img/news/DC.jpg" alt="" />
                </figure>
                <h2 className={styles["article-title"]}>
                  DC перезапускает супергеройскую вселенную: какие фильмы и
                  сериалы снимут, а от каких откажутся
                </h2>
                <p className={styles["article-content"]}>
                  Что ждет Бэтмена, Супермена и других членов Лиги справедливости
                </p>
                <div className={styles["article-info"]}>
                  <span>Автор: Journal Tinkoff</span>
                  <span>26 комментариев</span>
                </div>
              </div>
            </NavLink>
            <NavLink
              className={styles["article"]}
              to="https://kanobu.ru/news/premeru-anime-malchik-i-ptitsa-hayao-miyadzaki-v-rossii-perenesli-na-dekabr-475711/"
            >
              <div className={styles["article-body"]}>
                <figure className={styles["article-image"]}>
                  <img src="./assets/img/news/BoyAndBird.jpg" alt="" />
                </figure>
                <h2 className={styles["article-title"]}>
                  Премьеру аниме «Мальчик и птица» Хаяо Миядзаки в России
                  перенесли на декабрь
                </h2>
                <p className={styles["article-content"]}>
                  Анимационный фильм Хаяо Миядзаки «Мальчик и птица» (Kimitachi wa
                  Dou Ikiru ka / The Boy and the Heron) покажут в России 7 декабря
                  — об этом сообщил Telegram-канал «Кинопоиска».
                </p>
                <div className={styles["article-info"]}>
                  <span>Автор: Сергей Васильев </span>
                  <span>0 комментариев</span>
                </div>
              </div>
            </NavLink>

            <NavLink
              className={styles["article"]}
              to="https://www.kinoafisha.info/news/nachalis-semki-filma-govorit-zemlya-s-irinoy-gorbachevoy-i-goshey-kucenko/"
            >
              <div className={styles["article-body"]}>
                <figure className={styles["article-image"]}>
                  <img src="./assets/img/news/съемки.jpg" alt="" />
                </figure>
                <h2 className={styles["article-title"]}>
                  Начались съемки фильма «Говорит Земля!» с Ириной Горбачевой и
                  Гошей Куценко
                </h2>
                <p className={styles["article-content"]}>
                  Российский ответ «Не смотрите наверх».
                </p>
                <div className={styles["article-info"]}>
                  <span>Автор: Александр Цикалов</span>
                  <span>0 комментариев</span>
                </div>
              </div>
            </NavLink>
          </section>
        </main>
      </div>
      <Footer />
    </>

  );
};
export default News;
