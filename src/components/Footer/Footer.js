import React from 'react';
import style from './Footer.module.css';
import Zuri from '../../assets/zuri.png';
import I4G from '../../assets/I4G.png';

const Footer = props => {
  return (
    <footer>
      <hr className={style.Line} />
      <a href="https://github.com/skyv26" className={style.Link} rel="noreferrer noopenner" target="_blank">
        <img src={Zuri} className={style.Image} alt="Let's connect on slack" />
      </a>
      <p className={style.Text}>HNG Internship 9 Frontend Task</p>
      <a href="https://github.com/skyv26" className={style.Link} rel="noreferrer noopenner" target="_blank">
        <img src={I4G} className={style.Image} alt="Let's connect on slack" />
      </a>
    </footer>
  );
};

export default Footer;