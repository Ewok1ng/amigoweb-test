import React from 'react';

import '../../scss/styles.scss';
import arrow from '../../assets/arrow-down.svg';

function Dropdown({
	isActive,
	labelText,
	languages,
	activeValue,
	setActiveValue
}) {
	const [isDropdownVisible, setVisibility] = React.useState(false);

	return (
		<div className="dropdown__container">
			<div className="label dropdown__label">{labelText}</div>
			<div
				className="dropdown"
				onClick={() => {
					setVisibility(!isDropdownVisible);
				}}>
				<div
					className={
						isActive
							? 'dropdown__selected-item dropdown__selected-item--active'
							: 'dropdown__selected-item'
					}>
					<span
						className={
							activeValue.type === 'default'
								? 'dropdown__selected-value--default'
								: 'dropdown__selected-value'
						}>
						{activeValue.name}
					</span>
					<img width={32} height={32} src={arrow} alt="arrow down" />
				</div>
				<ul
					className={
						isDropdownVisible
							? 'dropdown__options dropdown__options--active'
							: 'dropdown__options'
					}>
					{languages.map((el, idx) => (
						<li
							key={`${el.type} + ${idx}`}
							className="dropdown__option"
							onClick={() => {
								setActiveValue(el);
							}}>
							{el.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Dropdown;
