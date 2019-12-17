/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styles from './FooterLeft.module.css'
import LogoOne from '../../main-logo/LogoOne'
import LogoTwo from '../../main-logo/LogoTwo'
import electronicMusicLogo from './img/electronic_music_logo.png'

const FooterLeft = () => {
  return (
    <div className={styles.footer_left}>
      <div className={styles.footer_logo}>
        <svg viewBox="0 0 200 200" alt="Beatport" className={styles.logo_one}>
          <LogoOne />
        </svg>
        <svg viewBox="0 0 935.5 200" alt="Beatport" className={styles.logo_two}>
          <LogoTwo />
        </svg>
      </div>
      <small>© 2004-2019 Beatport, LLC</small>
      <div>
        <a href="http://www.facebook.com/beatport" className={`socicon-facebook ${styles.icon} ${styles.icon_facebook}`}></a>
        <a href="http://www.twitter.com/beatport" className={`socicon-twitter ${styles.icon} ${styles.icon_twitter}`}></a>
        <a href="http://www.instagram.com/beatport" className={`socicon-instagram ${styles.icon} ${styles.icon_instagram}`}></a>
      </div>
      <a href="https://www.associationforelectronicmusic.org/afem-approved-dj-download-sites/" rel="noreferrer noopener" target="_blank" >
        <img src={electronicMusicLogo} className={styles.electronic_music_logo} alt="Electronic music logo" />
      </a>
    </div>
  );
}

export default FooterLeft