import React from 'react';
import styles from './Player.module.css';

const Player = () => {
  return (
    <div className={styles.player}>
      <div className={styles.extra}><i className={`material-icons ${styles.icon_size}`}>keyboard</i></div>
      <div className={styles.volume}><i className={`material-icons ${styles.icon_size}`}>volume_up</i></div>
      <div className={styles.control}>
        <div className={styles.button_previous}><i className={`material-icons ${styles.icon_size}`}>skip_previous</i></div>
        <div className={styles.button_play}><i className={`material-icons ${styles.icon_size}`}>play_arrow</i></div>
        <div className={styles.button_next}><i className={`material-icons ${styles.icon_size}`}>skip_next</i></div>
      </div>
      <div className={styles.toggle}><i className={`material-icons ${styles.icon_size}`}>keyboard_arrow_up</i></div>
    </div>
  )
}

export default Player