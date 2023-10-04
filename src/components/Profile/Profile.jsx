import cl from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={cl.content}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.postsData} addPost={props.addPost} updatePostText={props.updatePostText} />
    </div>
  );
};

export default Profile;
