import React from 'react';
import styles from './HeaderNav.module.css';
import GenresDrop from './genres-drop/GenresDrop'

class HeaderNav extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isGenresOpen: false
		}
		this.showGenres = this.showGenres.bind(this);
	}
	showGenres(isGenresOpen) {
		this.setState({ isGenresOpen });
	}
	render() {
		return (
			<div className={styles.nav_container}>
				<ul>
					<li id={styles.genres} onClick={() => this.showGenres(!this.state.isGenresOpen)}>
						<span>Genres</span>
						<span className="material-icons">arrow_drop_down</span>
						{this.state.isGenresOpen === true ? (
							<div className={styles.genres_drop}><GenresDrop /></div>

						) : (
								null
							)}

					</li>
					<li><a href="/tracks/all">Tracks</a></li>
					<li><a href="/releases/all">Releases</a></li>
					<li><a href="/charts">Charts</a></li>
					<li><a href="/stems">Stems</a></li>
					<li><a href="https://sounds.beatport.com">Sounds</a></li>
				</ul>
			</div>
		)
	}
}

export default HeaderNav