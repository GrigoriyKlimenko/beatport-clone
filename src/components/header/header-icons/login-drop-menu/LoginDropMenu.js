import React from 'react';
import styles from './LoginDropMenu.module.css';

const LoginDropMenu = () => (
	<div className={styles.login_drop}>
		<h2>Welcome to Beatport</h2>
		<p>Beatport is the world's largest electronic music store for DJs</p>
		<div className={styles.button_create_account}><div>Create an Account</div></div>
		<div>
			<h6 className={styles.login_heading}>
				<span ></span>
				<span >Already have an account? Sign in</span>
			</h6>
			<form>
				<input type="text" name="username" placeholder="Username" className={styles.login_username} required=""></input>
				<input type="password" name="password" placeholder="Password" className={styles.login_password} autoComplete="off" required=""></input>
				<div className={styles.remember_me_parent}>
					<div className={styles.remember_me}>
						<input type="checkbox"></input>
						<label>Remember me</label>
					</div>
					<input type="submit" className={styles.login_button} value="Log In"></input>
				</div>
				<div className={styles.forgot_parent}>
					<a href="/account/forgot-password" className={styles.forgot}>Forgot your username or password?</a>
				</div>
			</form>
		</div>
	</div>

)

export default LoginDropMenu