import React from "react";
import "./Button.css";

const ButtonImpl = ({ buttonText, disabled }) => {
	return (
		<button
			className="form_button"
			type="submit"
			name="form_submit"
			disabled={disabled}
		>
			{buttonText}
		</button>
	);
};

export const Button = React.memo(ButtonImpl);