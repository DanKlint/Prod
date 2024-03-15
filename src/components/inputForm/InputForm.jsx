import React from "react";
import styles from './InputForm.module.css';

const InputForm = ({
	type,
	inputPlaceholder,
	searchValue,
	onChangeSearchValue,
}) => {

	return (
		<div>
			<input
				type={type || "text"}
				className={styles['input']}
				placeholder={inputPlaceholder}
				value={searchValue}
				onChange={onChangeSearchValue}
			/>
		</div>
	);
};

export default InputForm;