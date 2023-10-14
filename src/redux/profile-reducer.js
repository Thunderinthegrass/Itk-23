const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text: text,
});

const profileReducer = (state, action) => {
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
