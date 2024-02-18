import styles from './Field.module.css';
import React from 'react';

export const FieldLayout = ({ field, onClick }) => {
	return (
		<div className={styles.fieldLayout}>
			{field.map((cell, ind) => (
				<button
					onClick={() => onClick(ind)}
					className={styles.cell}
					key={ind}
				>
					{cell}
				</button>
			))}
		</div>
	);
};
