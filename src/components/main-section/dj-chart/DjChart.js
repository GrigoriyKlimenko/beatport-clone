import React from "react";
import styles from './DjChart.module.css';
import PageSelector from '../slider/PageSelector';
import MainTitle from '../slider/MainTitle'

class DjChart extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			itemsPerPage: 3,
			totalPages: Math.ceil(this.props.djs.djsList.length / 3),
			currentPage: 1
		}
		this.changePage = this.changePage.bind(this);
		this.resize = this.resize.bind(this);
	}

	resize() {
		if ((document.body.clientWidth >= 1024) && (this.state.itemsPerPage < 3)) {
			this.setState({ itemsPerPage: 3, totalPages: Math.ceil(this.props.djs.djsList.length / 3), currentPage: 1 });
		} else if ((document.body.clientWidth < 1024) && (this.state.itemsPerPage > 2)) {
			this.setState({ itemsPerPage: 2, totalPages: Math.ceil(this.props.djs.djsList.length / 2), currentPage: 1 });
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
			sliderPagesSelect.push(<PageSelector key={this.props.djs.information.mainTitle + i}>{propsObject}</PageSelector>);
		}
		return (
			<div className={styles.slider}>
				<div>
					<MainTitle>{this.props.djs.information.mainTitle}</MainTitle>
					<div className={styles.scroll_arrows}>
						<div className={styles.scroll_arrow_left + ' ' + ((this.state.currentPage === 1) ? styles.scroll_arrow_off : '')} onClick={() => this.changePage(this.state.currentPage - 1)}><i className="material-icons">arrow_left</i></div>
						<div className={styles.scroll_arrow_right + ' ' + ((this.state.currentPage === this.state.totalPages) ? styles.scroll_arrow_off : '')} onClick={() => this.changePage(this.state.currentPage + 1)}><i className="material-icons">arrow_right</i></div>
					</div>
				</div>
				<ul className={styles.slider_container}>
					{
						this.props.djs.djsList.slice((this.state.currentPage - 1) * this.state.itemsPerPage, this.state.currentPage * this.state.itemsPerPage).map(djs => <Djs key={this.props.djs.information.mainTitle + djs.dj_name}>{djs}</Djs>)
					}
				</ul>
				<div className={styles.scrollbar}>
					{sliderPagesSelect}
				</div>
			</div>
		)
	}
}

class Djs extends React.PureComponent {
	render() {
		return (
			<li className={styles.slider_item}>
				<a href className={styles.slider_item_container}>
					<div className={styles.gradient_overlay}></div>
					<span className={styles.dj_name}>{this.props.children.dj_name}</span>
					<div className={styles.artwork_container}>
						<img className={styles.artwork} src={this.props.children.artwork} alt="DJ artwork" />
					</div>
				</a>
			</li>
		)
	}
}

export default DjChart