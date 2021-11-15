import React from 'react';

import '../../scss/styles.scss';

function Button({ text, isActive }) {
	return (
		<button
			onClick={(e) => {
				e.preventDefault();
			}}
			className="button"
			disabled={!isActive()}>
			{text}
		</button>
	);
}

export default Button;
