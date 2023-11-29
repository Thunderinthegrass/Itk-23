import cl from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  // console.log(props)
  return (
    <div className={cl.content}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
