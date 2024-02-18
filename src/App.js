import { useState } from 'react';
import { AppLayout } from './AppLayout';
import { initialField } from './constants/field';
import * as check from './utils/check';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(initialField);

	const handleClick = (index) => {
		if (field[index] || isGameEnded || isDraw) return;
		const newField = field.map((cell, idx) =>
			idx === index ? currentPlayer : cell,
		);
		setField(newField);

		if (check.isWin(newField, currentPlayer)) {
			setIsGameEnded(true);
			return;
		}

		if (check.isDraw(newField)) {
			setIsDraw(true);
			return;
		}

		setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
	};

	const handleReset = () => {
		setField(initialField);
		setIsGameEnded(false);
		setIsDraw(false);
		setCurrentPlayer('X');
	};

	return (
		<AppLayout
			props={{
				field,
				currentPlayer,
				isGameEnded,
				isDraw,
				handleReset,
				handleClick,
			}}
		/>
	);
};
