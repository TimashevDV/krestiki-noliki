import { InfLayout } from './infLayout';
import React from 'react';

export const InfContainer = ({
	isDraw,
	isGameEnded,
	currentPlayer,
}) => {
	const status = isGameEnded
		? `Победил ${currentPlayer}`
		: isDraw
			? 'Ничья'
			: `Ходит ${currentPlayer}`;
	return <InfLayout status={status} />;
};
