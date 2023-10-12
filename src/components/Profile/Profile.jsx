import cl from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  // console.log(props)
  return (
    <div className={cl.content}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.postsData} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
