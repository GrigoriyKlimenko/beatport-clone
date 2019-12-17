import React from 'react';
import styles from './HeaderLogo.module.css';
import LogoOne from '../../main-logo/LogoOne'
import LogoTwo from '../../main-logo/LogoTwo'

class HeaderLogo extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isLogoShow: false
		}
		this.showLogo = this.showLogo.bind(this);
		this.scrollSite = this.scrollSite.bind(this);
	}
	scrollSite(scrollPosition) {
		if ((scrollPosition > 0) && (this.state.isLogoShow)) {
			return;
		} else if (scrollPosition === 0) {
			this.showLogo(false)
		} else {
			this.showLogo(true)
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', (e) => {
			this.scrollSite(window.scrollY);
		})
	}
	showLogo(isLogoShow) {
		this.setState({ isLogoShow });
	}
	render() {

		return (
			<a href="/" className={styles.header_logo}>
				<svg viewBox="0 0 200 200" alt="Beatport" className={styles.logo_one}>
					<LogoOne />
				</svg>
				<svg viewBox="0 0 935.5 200" alt="Beatport" className={((!this.state.isLogoShow) ? styles.logo_two : styles.logo_two_show)}>
					<LogoTwo />
				</svg>
			</a>
		)
	}
}

export default HeaderLogo