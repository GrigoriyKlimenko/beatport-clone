import React from 'react';
import styles from './HeaderSearch.module.css';

const HeaderSearch = () => (
	<div className={styles.search_container}>
		<div className={styles.search_string}>
			<span className="material-icons">search</span>
			<input placeholder="Search..." type="search" />
		</div>

	</div>
)

export default HeaderSearch