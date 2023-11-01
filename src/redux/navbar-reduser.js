let initialState = {
    navBar: [
      { id: 1, name: "Profile", path: "/profile" },
      { id: 1, name: "Messages", path: "/Dialogs" },
      { id: 1, name: "News", path: "/News" },
      { id: 1, name: "Music", path: "/Music" },
      { id: 1, name: "Settings", path: "/Settings" },
      { id: 1, name: "Friends", path: "/Friends" },
    ],
};

const navbarReducer = (state = initialState, action) => {
  return state;
};

export default navbarReducer;
