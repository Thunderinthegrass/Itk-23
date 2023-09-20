import cl from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={cl.content}>
      <ProfileInfo />
      <MyPosts addBtn="Добавить пост" removeBtn="Удалить пост" title="Мои посты"/>
    </div>
  );
};

export default Profile;
