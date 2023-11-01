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
  // debugger;
  // console.log(props)
  return (
    <div className="container">
      <Header />
      <Navbar navbar={props.state.navbar} />
      <Routes>
        <Route 
          path="/" 
          element={<Profile store={props.store} />} 
        />
        <Route
          path="profile/"
          element={<Profile store={props.store} />}
        />
        <Route
          path="dialogs/*"
          element={<Dialogs dialogs={props.state.dialogsPage} dispatch={props.dispatch} />}
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
