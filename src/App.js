import "./App.scss";
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = (props) => {
  // console.log(props)
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updatePostText={props.updatePostText} />} />
        <Route
          path="profile/"
          element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updatePostText={props.updatePostText} />}
        />
        <Route
          path="dialogs/*"
          element={<Dialogs dialogs={props.state.dialogsPage} />}
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
