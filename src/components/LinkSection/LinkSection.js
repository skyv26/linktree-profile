import React from 'react';
import style from './LinkSection.module.css';

const LinkSection = props => {
  return (
    <ul className={style.LinkSection}>
      <li className={style.List}>
        <a href="https://twitter.com/vrma_aakash" id="twitter__link" className={style.Link} rel="noreferrer noopenner" target="_blank">Twitter Link</a>
      </li>
      <li className={style.List}>
        <a href="https://training.zuri.team/" id="btn__zuri" className={style.Link} rel="noreferrer noopenner" target="_blank">Zuri Team</a>
      </li>
      <li className={style.List}>
        <a href="http://books.zuri.team/" id="books" className={style.Link} rel="noreferrer noopenner" target="_blank">Zuri Books</a>
      </li>
      <li className={style.List}>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=skyv26" id="book__python" className={style.Link} rel="noreferrer noopenner" target="_blank">Python Books</a>
      </li>
      <li className={style.List}>
        <a href="https://background.zuri.team/" id="pitch" className={style.Link} rel="noreferrer noopenner" target="_blank">Let's Check Coders Experience</a>
      </li>
      <li className={style.List}>
        <a href="https://books.zuri.team/design-rules" className={style.Link} id="book__design" rel="noreferrer noopenner" target="_blank">Design Books</a>
      </li>
    </ul>
  );
};

export default LinkSection;
