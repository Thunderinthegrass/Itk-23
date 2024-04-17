import React from 'react';
import cl from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
  <div className={cl.userInfoWrapper}>
    <div className={cl.banner}>
      
    </div>
    <div className={cl.userInfo}>
      <div className={cl.avatar}>
        <img
          src="img/avatar.jpg"
          alt="аватар пользователя"
        />
      </div>
      <div className={cl.userDescr}>Владимир Петров</div>
    </div>
  </div>
  )
};

export default ProfileInfo;
