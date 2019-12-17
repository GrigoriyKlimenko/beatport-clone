import React from "react";
import styles from './Slider.module.css';

const PageSelector = (props) => (
	<a href={`${props.children.id}`} className={styles.page_selector + ' ' + ((props.children.currentPage === props.children.id) ? styles.active_page_selector : '')} style={{ width: props.children.width }} onClick={(e) => { e.preventDefault(); props.children.changePage(props.children.id); }}>
		<span ></span>
	</a>
)

export default PageSelector