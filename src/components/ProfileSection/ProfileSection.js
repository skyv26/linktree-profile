import React from 'react';
import style from './ProfileSection.module.css';
import ProfileImage from '../../assets/skyv.jpg';

const ProfileSection = () => {
  return (
    <div>
      <img id="profile__img" class={style.Picture} src={ProfileImage} alt="See Aakash Verma" />
      <a href="https://twitter.com/vrma_aakash" target="_blank" rel="noreferrer noopenner" id="twitter" class={style.ProfileLink}>Aakash Verma</a>
      <a href="." target="_blank" rel="noreferrer noopenner" id="slack" class={`${style.ProfileLink} ${style.ShouldNotVisible}`}>skyv26</a>
    </div>
  );
};

export default ProfileSection;