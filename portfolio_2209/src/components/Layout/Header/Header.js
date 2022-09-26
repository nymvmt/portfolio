import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <h1>김나영 포트폴리오</h1>

        <nav className={styles.navigation}>
          <ul>
            <li><a href={"https://blog.naver.com/and___young"}>블로그</a></li>
            <li><a href={"https://instagram.com/drawing_n_young"}>인스타그램</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header