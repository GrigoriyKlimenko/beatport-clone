import React from 'react';
import styles from './HeaderNav.module.css';
import HeaderNav from './HeaderNav'

class HeaderMobileNav extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isMenuOpen: false
		}
		this.showMenu = this.showMenu.bind(this);
	}
	showMenu(isMenuOpen) {
		this.setState({ isMenuOpen });
	}
	render() {
		return (
			<div className={styles.mobile_nav_container}>
				<div className={styles.mobile_nav_icon}>
					{this.state.isMenuOpen === false ? (
						<div className={styles.mobile_nav_open} onClick={() => this.showMenu(!this.state.isMenuOpen)}><i className="material-icons">dehaze</i></div>
					) : (
							<div className={styles.mobile_nav_close} onClick={() => this.showMenu(!this.state.isMenuOpen)}><i className="material-icons">clear</i></div>
						)}
				</div>

				{this.state.isMenuOpen === true ? (
					<div className={styles.mobile_nav_menu}>
						<HeaderNav />
					</div>
				) : (
						null
					)}

			</div>
		)
	}
}

export default HeaderMobileNav