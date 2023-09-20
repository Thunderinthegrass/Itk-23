import cl from './MyPosts.module.scss';
import Post from './Post/Post';

let postsData = [
  {id: 1, post: 'Первый пост', likesCount: 10},
  {id: 2, post: 'Вторый пост', likesCount: 15},
  {id: 3, post: 'Третый пост', likesCount: 17},
  {id: 4, post: 'Четвертый пост', likesCount: 19},
]

const MyPosts = (props) => {
  return (
    <div>
      <div className={cl.myPosts}>
        <h3>{props.title}</h3>
        <div className="addPost">
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>{props.addBtn}</button>
          <button>{props.removeBtn}</button>
        </div>
      </div>
      <div className="posts">
        <Post massage={postsData[0].post} likesCount={postsData[0].likesCount} />
        <Post massage={postsData[1].post} likesCount={postsData[1].likesCount} />
        <Post massage={postsData[2].post} likesCount={postsData[2].likesCount} />
        <Post massage={postsData[3].post} likesCount={postsData[3].likesCount} />
      </div>
    </div>
  )
}

export default MyPosts;