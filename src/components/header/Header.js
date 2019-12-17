import React from 'react';
import styles from './Header.module.css';
import HeaderLogo from './header-logo/HeaderLogo'
import HeaderMobileNav from './header-nav/HeaderMobileNav'
import HeaderNav from './header-nav/HeaderNav'
import HeaderSearch from './header-search/HeaderSearch'
import SubscribeButton from './subscribe-button/SubscribeButton'
import HeaderIcons from './header-icons/HeaderIcons'

const Header = () => {
  return (
    <div className={styles.header_wrap}>
      <header>
        <div>
          <HeaderMobileNav />
        </div>
        <div className={styles.header_container}>
          <HeaderLogo />
          <div className={styles.header_nav}><HeaderNav /></div>
          <HeaderSearch />
          <SubscribeButton />
          <HeaderIcons />
        </div>
      </header>
    </div>
  )
}

export default Header