import styles from './App.module.css';
import { FieldContainer, InfContainer } from './components';
import React from 'react';

export const AppLayout = ({ props }) => {
	const {
		field,
		currentPlayer,
		isGameEnded,
		isDraw,
		handleReset,
		handleClick,
	} = props;

	return (
		<div className={styles.container}>
			<div className={styles.appLayout}>
				<InfContainer
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
					isDraw={isDraw}
				/>
				<FieldContainer
					field={field}
					onClick={handleClick}
				/>
				<button
					className={styles.reset}
					onClick={handleReset}
				>
					Начать заново
				</button>
			</div>
		</div>
	);
};
