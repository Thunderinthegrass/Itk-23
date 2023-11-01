const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text: text,
});

let initialState = {
  postsData: [
    { id: 1, post: "Первый пост", likesCount: 10 },
    { id: 2, post: "Вторый пост", likesCount: 15 },
    { id: 3, post: "Третий пост", likesCount: 17 },
    { id: 4, post: "Четвертый пост", likesCount: 19 },
  ],
  newPostText: "некий текст",
};

const profileReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_POST:
      let id = state.postsData.length + 1;

      let newPost = {
        id: id,
        post: state.newPostText,
        likesCount: 14,
      };
      state.newPostText = "";
      state.postsData.push(newPost);
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

export default profileReducer;
