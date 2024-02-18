import styles from './inf.module.css';
import React from 'react';

export const InfLayout = ({ status }) => {
	return <div className={styles.inf}>{status}</div>;
};
