let rerenderEntireTree = () => {
  console.log('state')
}

let state = {
  profilePage: {
    postsData: [
      {id: 1, post: 'Первый пост', likesCount: 10},
      {id: 2, post: 'Вторый пост', likesCount: 15},
      {id: 3, post: 'Третый пост', likesCount: 17},
      {id: 4, post: 'Четвертый пост', likesCount: 19},
    ],
    newPostText: 'некий текст'
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Владимир'},
      {id: 2, name: 'Фёдор'},
      {id: 3, name: 'Селиван'},
      {id: 4, name: 'Дед Вовка'},
    ],
    messages: [
      {id: 1, message: 'Первое сообщение'},
      {id: 2, message: 'Второе сообщение'},
      {id: 3, message: 'Третье сообщение'},
      {id: 4, message: 'Четвертое сообщение'},
    ],
  },

}

window.state = state;

export let addPost = () => {
  let id = state.profilePage.postsData.length + 1;

  let newPost = {
    id: id,
    post: state.profilePage.newPostText,
    likesCount: 14,
  }

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updatePostText = (text) => {
  state.profilePage.newPostText = text;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;