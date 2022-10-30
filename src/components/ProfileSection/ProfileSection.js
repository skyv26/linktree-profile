import React from 'react';
import style from './ProfileSection.module.css';
import ProfileImage from '../../assets/skyv.jpg';

const ProfileSection = () => {
  return (
    <div>
      <img id="profile__img" class={style.Picture} src={ProfileImage} alt="See Aakash Verma" />

    </div>
  );
};

export default ProfileSection;