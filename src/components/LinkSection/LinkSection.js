import React from 'react';
import style from './LinkSection.module.css';

const LinkSection = props => {
  return (
    <ul className={style.LinkSection}>
      <li className={style.List}>
        <a href="." className={style.Link} rel="noreferrer noopenner" target="_blank">Twitter Link</a>
      </li>
      <li className={style.List}>
        <a href="." className={style.Link} rel="noreferrer noopenner" target="_blank">Zuri Team</a>
      </li>
      <li className={style.List}>
        <a href="." className={style.Link} rel="noreferrer noopenner" target="_blank">Zuri Books</a>
      </li>
      <li className={style.List}>
        <a href="." className={style.Link} rel="noreferrer noopenner" target="_blank">Python Books</a>
      </li>
      <li className={style.List}>
        <a href="." className={style.Link} rel="noreferrer noopenner" target="_blank">Background Check for Coders</a>
      </li>
      <li className={style.List}>
        <a href="." className={style.Link} rel="noreferrer noopenner" target="_blank">Design Books</a>
      </li>
    </ul>
  );
};

export default LinkSection;