import React from 'react';

import '../../scss/styles.scss';

function Checkbox({ description, isChecked, toggleCheck }) {
	return (
		<label className="checkbox">
			<input
				className="checkbox__input"
				type="checkbox"
				checked={isChecked}
				onChange={() => toggleCheck(!isChecked)}
			/>
			<span className="checkbox__custom"></span>
			<div className="checkbox__description">{description}</div>
		</label>
	);
}

export default Checkbox;
