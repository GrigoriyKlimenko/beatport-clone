import React from "react";
import styles from './Slider.module.css';

const MainTitle = (props) => (
	<h2 className={styles.slider_main_title}>{props.children}</h2>
)

export default MainTitle