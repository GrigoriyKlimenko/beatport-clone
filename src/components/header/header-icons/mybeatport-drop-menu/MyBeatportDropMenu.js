import React from 'react';
import styles from './MyBeatportDropMenu.module.css';

const MyBeatportDropMenu = () => (
	<div className={styles.mybeatport_drop}>
		<h2>Log in to start using My Beatport!</h2>
		<p>My Beatport lets you follow your favorite DJs and labels so you can find out when they release new tracks. Log in or create an account today so you never miss a new release.</p>
		<div className={styles.button_create_account}><div>Create an Account</div></div>
		<div className={styles.login}><p> Already have an account? </p><input type="submit" className={styles.login_button} value="Log In"></input></div>
	</div>
)

export default MyBeatportDropMenu