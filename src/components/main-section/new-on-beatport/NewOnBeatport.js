import React from "react";
import styles from './NewOnBeatport.module.css';
import PageSelector from '../slider/PageSelector';
import Author from '../slider/Author';
import MainTitle from '../slider/MainTitle'

class NewOnBeatport extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			totalPages: this.props.news.newsList.length,
			currentPage: 1
		}
		this.changePage = this.changePage.bind(this);
	}
	changePage(currentPage) {
		if (currentPage > this.state.totalPages) {
			currentPage = 1;
		}
		if (currentPage < 1) {
			currentPage = this.state.totalPages;
		}
		this.setState({ currentPage });
	}
	componentDidMount() {
		setInterval(() => this.changePage(this.state.currentPage + 1), 5000);
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
			sliderPagesSelect.push(<PageSelector key={i}>{propsObject}</PageSelector>);
		}
		return (
			<div className={styles.slider}>
				<MainTitle>{this.props.news.information.mainTitle}</MainTitle>
				<a href className={styles.slider_arrow_left} onClick={() => this.changePage(this.state.currentPage - 1)}><i></i></a>
				<a href className={styles.slider_arrow_right} onClick={() => this.changePage(this.state.currentPage + 1)}><i></i></a>
				<ul className={styles.slider_container}>
					{
						this.props.news.newsList.slice((this.state.currentPage - 1), this.state.currentPage).map((news, index) => <Track key={index}>{news}</Track>)
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
				top: (this.props.children.hype_marker ? '80px' : '56px')
			}
		}

		return (
			<li className={styles.slider_item}>
				<a href className={styles.news_cover_url}>
					<img src={this.props.children.cover} className={styles.news_cover} alt="Album cover" />
				</a>
				{this.props.children.type === 'new track' ? (
					<div>
						<div className={((!this.state.isMobileActionsShow) ? styles.item_info : styles.mobile_actions_show)}>
							<h2 className={styles.track_info_title}><a href>{this.props.children.title}</a></h2>
							<p className={styles.track_info_author_label}>
								<a href>{this.props.children.authors.map(author => <Author key={this.props.children.title + author}>{author}</Author>)}</a>
								&nbsp;|&nbsp;
                        <a href>{this.props.children.label}</a>
							</p>
							<div className={styles.track_action}>
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
						<div className={styles.mobile_actions_button} onClick={() => this.showMobileActions(!this.state.isMobileActionsShow)}>
							<i className="material-icons">more_horiz</i>
						</div>
					</div>
				) : (
						<div className={styles.mobile_actions_button_place}></div>
					)}
				<p className={styles.marker_hype} style={markerStyles.marker_hype}>Hype</p>
				<p className={styles.marker_exclusive} style={markerStyles.marker_exclusive}>Exclusive</p>
			</li>
		)
	}
}

export default NewOnBeatport