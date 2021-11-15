import React from 'react';

import '../../scss/styles.scss';

function TextField({
	id,
	labelText,
	inputType,
	placeholderText,
	errorText,
	value,
	onChangeValue,
	isValid
}) {
	return (
		<div className="textfield">
			<label htmlFor={id} className="label textfield__label">
				{labelText}
			</label>
			<input
				value={value}
				onChange={(e) => onChangeValue(e.target.value)}
				className="textfield__input"
				type={inputType}
				placeholder={placeholderText}
			/>
			<span className="textfield__error">{!isValid ? errorText : ''}</span>
		</div>
	);
}

export default TextField;
