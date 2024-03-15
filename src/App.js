import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
// import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import React from "react";
// import Footer from "./components/footer/Footer";
import Actors from "./pages/actors/Actors";
import Contacts from "./pages/contacts/Contacts";
import Profile from "./pages/profile/Profile";
import Movie from "./pages/movie/Movie";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        {/* <React.Fragment className="container"> */}
        <Route path="/" index element={<Home />} />
        <Route path="/news" index element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/:id" element={<Movie />} />

        {/* <Route path='*' element={<Error/>}/> */}
        {/* </React.Fragment> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
