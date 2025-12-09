import React, { useState } from "react";
import styles from './InputForm.module.css';

const InputForm = ({
	type,
	inputPlaceholder,
	searchValue,
	onChangeSearchValue,
}) => {
	const [passwordError, setPasswordError] = useState(false);

	const handleChange = (event) => {
		const value = event.target.value;
		if (type === 'password') {
			setPasswordError(value.length < 8);
		}
		if (onChangeSearchValue) {
			onChangeSearchValue(event);
		}
	};

	return (
		<div>
			<input
				type={type || "text"}
				className={styles['input']}
				placeholder={inputPlaceholder}
				value={searchValue}
				onChange={handleChange}
			/>
			{passwordError && type === 'password' && (
				<div className={styles['error']}>Пароль слишком короткий</div>
			)}
		</div>
	);
};

export default InputForm;