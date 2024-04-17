import React from "react";
import "./App.scss";
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
// import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = (props) => {
  // debugger;
  // console.log(props)
  return (
    <div className="container">
      <Header />
      <NavbarContainer />
      <Routes>
        <Route 
          path="/" 
          element={<Profile />} 
        />
        <Route
          path="profile/"
          element={<Profile />}
        />
        <Route
          path="dialogs/*"
          element={<DialogsContainer />}
        />
        <Route path="news/" element={<News />} />
        <Route path="music/" element={<Music />} />
        <Route path="settings/" element={<Settings />} />
        <Route path="friends/" element={<Friends />} />
      </Routes>
    </div>
  );
};

export default App;
