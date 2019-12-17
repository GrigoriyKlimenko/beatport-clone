import React from 'react';
import styles from './FooterRight.module.css'

const FooterRight = () => {
	return (
		<div className={styles.footer_right}>
			<div className={styles.col_one}>
				<h6>Company</h6>
				<ul className={styles.list}>
					<li>
						<a target="_blank" href="http://about.beatport.com/" rel="noreferrer noopener">About Beatport</a>
					</li>

					<li>
						<a target="_blank" href="https://support.beatport.com/hc/" rel="noreferrer noopener">Customer Support</a>
					</li>
					<li>
						<a target="_blank" href="https://support.beatport.com/hc/articles/200131499" rel="noreferrer noopener">Contact Us</a>
					</li>

					<li>
						<a target="_blank" href="http://jobs.beatport.com/" rel="noreferrer noopener">Careers</a>
					</li>

					<li>
						<a target="_blank" href="https://support.beatport.com/hc/articles/200353255" rel="noreferrer noopener">Logos and Images</a>
					</li>
					<li>
						<a target="_blank" href="https://support.beatport.com/hc/articles/215996708-Terms-and-Conditions" rel="noreferrer noopener">Terms and Conditions</a>
					</li>
					<li>
						<a target="_blank" href="https://support.beatport.com/hc/articles/200353215" rel="noreferrer noopener">Privacy and Cookie Policy</a>
					</li>
					<li>
						<a target="_blank" href="http://forms.beatport.com/form/51386983261968" rel="noreferrer noopener">Report Copyright Infringement</a>
					</li>
					<li>
						<a target="_blank" href="https://beatport.uservoice.com/forums/262082-beatport-pro" rel="noreferrer noopener">Feedback</a>
					</li>
				</ul>
			</div>
			<div className={styles.col_two}>
				<h6>Network</h6>
				<ul className={styles.list}>
					<li>
						<a target="_blank" href="https://welcome.beatport.com/" rel="noreferrer noopener">Beatport How To</a>
					</li>
					<li>
						<a href="/get-link">Beatport LINK</a>
					</li>
					<li>
						<a href="/get-cloud">Beatport CLOUD</a>
					</li>
					<li>
						<a target="_blank" href="https://hype.beatport.com/" rel="noreferrer noopener">Beatport Hype for Labels</a>
					</li>
					<li>
						<a target="_blank" href="https://monitor.beatport.com/" rel="noreferrer noopener">Beatport Monitor</a>
					</li>
					<li>
						<a target="_blank" href="https://sounds.beatport.com/" rel="noreferrer noopener">Beatport Sounds</a>
					</li>
				</ul>
			</div>
			<div className={styles.col_three}>
				<h6>Language</h6>
				<ul className={styles.list}>
					<li>
						<a href data-language="en_US">English</a>
					</li>
					<li>
						<a href data-language="es_ES">Español</a>
					</li>
					<li>
						<a href data-language="fr_FR">Français</a>
					</li>
					<li>
						<a href data-language="de_DE">Deutsch</a>
					</li>
					<li>
						<a href data-language="pt_BR">Português</a>
					</li>
					<li>
						<a href data-language="nl_NL">Nederlands</a>
					</li>
					<li>
						<a href data-language="it_IT">Italiana</a>
					</li>
					<li>
						<a href data-language="ja_JP">日本語</a>
					</li>

				</ul>
			</div>
		</div>
	);
}

export default FooterRight