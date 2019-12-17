import React from 'react';
import styles from './HeaderIcons.module.css';
import LoginDropMenu from './login-drop-menu/LoginDropMenu';
import MyBeatportDropMenu from './mybeatport-drop-menu/MyBeatportDropMenu';

const HeaderIcons = () => (
	<div className={styles.icons_container}>
		<div className={styles.search}>
			<span className="material-icons">search</span>
		</div>
		<div className={styles.login}>
			<span className="material-icons">perm_identity</span>
			<div className={styles.login_drop}>
				<LoginDropMenu />
			</div>
		</div>
		<div className={styles.my_beatport}>
			<div className={styles.my_beatport_button}>
				<span className={`material-icons`}>favorite_border</span>
				<span className={styles.my_beatport_text}>My Beatport</span>
			</div>
			<div className={styles.my_beatport_drop}>
				<MyBeatportDropMenu />
			</div>
		</div>
		<div className={styles.shop}><span className={`material-icons ${styles.shop}`}>shopping_cart</span></div>
	</div>
)

export default HeaderIcons