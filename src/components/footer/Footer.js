import React from 'react';
import styles from './Footer.module.css'
import FooterLeft from './footer-left/FooterLeft'
import FooterRight from './footer-right/FooterRight'

const Footer = () => {
	return (
		<div className={styles.footer_container}>
			<footer className={styles.footer}>
				<FooterLeft />
				<FooterRight />
			</footer>
		</div>
	);
}

export default Footer