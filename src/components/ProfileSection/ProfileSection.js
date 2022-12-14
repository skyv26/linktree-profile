import React from 'react';
import style from './ProfileSection.module.css';
import ProfileImage from '../../assets/skyv.jpg';

const ProfileSection = () => {
  return (
    <div className={style.ProfileContainer}>
      <img id="profile__img" className={style.Picture} src={ProfileImage} alt="See Aakash Verma" />
      <a href="https://twitter.com/vrma_aakash" target="_blank" rel="noreferrer noopenner" id="twitter" className={style.ProfileLink}>Aakash Verma</a>
      <a href="." target="_blank" rel="noreferrer noopenner" id="slack" className={`${style.ProfileLink} ${style.ShouldNotVisible}`}>skyv26</a>
    </div>
  );
};

export default ProfileSection;