import React from "react";
import styles from './NewReleases.module.css';
import PageSelector from '../slider/PageSelector';
import Author from '../slider/Author';
import MainTitle from '../slider/MainTitle'

class NewReleases extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			itemsPerPage: 10,
			totalPages: Math.ceil(this.props.tracks.tracklist.length / 10),
			currentPage: 1
		}
		this.changePage = this.changePage.bind(this);
		this.resize = this.resize.bind(this);
	}

	resize() {
		let windowWidth = document.body.clientWidth;
		if ((windowWidth >= 1150) && (this.state.itemsPerPage !== 10)) {
			this.setState({ itemsPerPage: 10, totalPages: Math.ceil(this.props.tracks.tracklist.length / 10), currentPage: 1 });
		} else if ((windowWidth >= 1024) && (windowWidth < 1150) && (this.state.itemsPerPage !== 8)) {
			this.setState({ itemsPerPage: 8, totalPages: Math.ceil(this.props.tracks.tracklist.length / 8), currentPage: 1 });
		} else if ((windowWidth >= 568) && (windowWidth < 1024) && (this.state.itemsPerPage !== 6)) {
			this.setState({ itemsPerPage: 6, totalPages: Math.ceil(this.props.tracks.tracklist.length / 6), currentPage: 1 });
		} else if ((windowWidth < 568) && (this.state.itemsPerPage !== 4)) {
			this.setState({ itemsPerPage: 4, totalPages: Math.ceil(this.props.tracks.tracklist.length / 4), currentPage: 1 });
		} else {
			return
		}
	}

	changePage(currentPage) {
		if ((currentPage <= 0) || (currentPage > this.state.totalPages)) {
			return
		}
		this.setState({ currentPage });
	}

	componentDidMount() {
		window.addEventListener("resize", this.resize);
	}

	render() {
		let sliderPagesSelect = [];
		for (let i = 1; i <= this.state.totalPages; i += 1) {
			let propsObject = {
				id: i,
				changePage: this.changePage,
				width: `${(100 - 0.5 * (this.state.totalPages - 1)) / this.state.totalPages}%`,
				currentPage: this.state.currentPage
			}
			sliderPagesSelect.push(<PageSelector key={this.props.tracks.information.mainTitle + i}>{propsObject}</PageSelector>);
		}
		return (
			<div className={styles.slider}>
				<MainTitle>{this.props.tracks.information.mainTitle}</MainTitle>
				<div className={styles.scroll_arrows}>
					<div className={styles.scroll_arrow_left + ' ' + ((this.state.currentPage === 1) ? styles.scroll_arrow_off : '')} onClick={() => this.changePage(this.state.currentPage - 1)}><i className="material-icons">arrow_left</i></div>
					<div className={styles.scroll_arrow_right + ' ' + ((this.state.currentPage === this.state.totalPages) ? styles.scroll_arrow_off : '')} onClick={() => this.changePage(this.state.currentPage + 1)}><i className="material-icons">arrow_right</i></div>
				</div>
				<ul className={styles.slider_container}>
					{
						this.props.tracks.tracklist.slice((this.state.currentPage - 1) * this.state.itemsPerPage, this.state.currentPage * this.state.itemsPerPage).map(track => <Track key={this.props.tracks.information.mainTitle + track.title}>{track}</Track>)
					}
				</ul>
				<div className={styles.scrollbar}>
					{sliderPagesSelect}
				</div>
			</div>
		)
	}
}

class Track extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isMobileActionsShow: false
		}
		this.showMobileActions = this.showMobileActions.bind(this);
	}

	showMobileActions(isMobileActionsShow) {
		this.setState({ isMobileActionsShow });
	}

	render() {
		const markerStyles = {
			marker_hype: {
				display: (this.props.children.hype_marker ? 'block' : 'none')
			},
			marker_exclusive: {
				display: (this.props.children.exclusive_marker ? 'block' : 'none'),
				top: (this.props.children.hype_marker ? '38px' : '17px')
			}
		}

		return (
			<li className={styles.slider_item}>
				<a href className={styles.track_cover_url}>
					<img src={this.props.children.cover} className={styles.track_cover} alt="Album cover" />
				</a>
				<div className={styles.item_info}>
					<div className={styles.track_info}>
						<p className={styles.track_info_title}><a href>{this.props.children.title}</a></p>
						<p className={styles.track_info_author}><a href>{this.props.children.authors.map(author => <Author key={this.props.children.title + author}>{author}</Author>)}</a></p>
						<p className={styles.track_info_label}><a href>{this.props.children.label}</a></p>
					</div>
					<div className={styles.track_action_perent}>
						<div className={((!this.state.isMobileActionsShow) ? styles.track_action : styles.mobile_actions_show)}>
							<div className={styles.action_play_queue}>
								<button className={styles.action_play}>
									<i className={`material-icons`}>play_arrow</i>
								</button>
								<button className={styles.action_queue}>
									<i className={`material-icons`}>queue_music</i>
								</button>
							</div>
							<div className={styles.action_buy}>
								<button className={styles.buy_default}>
									{this.props.children.price}
								</button>
								<button className={styles.buy_menu}>
									<i className="material-icons">expand_more</i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.mobile_actions_button} onClick={() => this.showMobileActions(!this.state.isMobileActionsShow)}>
					<i className="material-icons">more_horiz</i>
				</div>
				<p className={styles.marker_hype} style={markerStyles.marker_hype}>Hype</p>
				<p className={styles.marker_exclusive} style={markerStyles.marker_exclusive}>Exclusive</p>
			</li>
		)
	}
}

export default NewReleases