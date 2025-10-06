import React from "react";
import styles from './Modal.module.css';



const Modal = ({ open, setOpen, children }) => {

	return (
		<>
			{
				open && (
					<div className={styles['modal']}>
						<button onClick={() => setOpen(false)} className={styles["close-btn"]}>
							<svg
								height="25"
								viewBox="0 0 200 200"
								width="25"
							>
								<title />
								<path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
							</svg>
						</button>
						{children}
					</div>
				)
			}
		</>
	);
};

export default Modal;