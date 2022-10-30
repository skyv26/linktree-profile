import React from 'react';
import style from './SocialSection.module.css';
import SlackImage from '../../assets/slack.png';
import GithubImage from '../../assets/github.png';

const SocialSection = props => {
  return (
    <div className={style.SocialSection}>
      <ul className={style.SocialUl}>
        <li className={style.List}>
          <a href="." className={style.Link} rel="noreferrer noopenner" target="_blank">
            <img src={SlackImage} className={style.Image} alt="Let's connect on slack" />
          </a>
        </li>
        <li className={style.List}>
          <a href="https://github.com/skyv26" className={style.Link} rel="noreferrer noopenner" target="_blank">
            <img src={GithubImage} className={style.Image} alt="Let's connect on slack" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSection;