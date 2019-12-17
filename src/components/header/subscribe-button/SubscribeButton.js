import React from 'react';
import styles from './SubscribeButton.module.css';

const SubscribeButton = () => (
	<div className={styles.subscribe}>
		<button>
			<div className={styles.subscribe_text}>Subscribe now</div>
		</button>
	</div>
)

export default SubscribeButton