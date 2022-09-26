import React from 'react';
import styles from './Layout.module.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        {props.children}
      </main>
      
      <Footer />
    </div>
  )

}

export default Layout