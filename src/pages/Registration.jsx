import React from 'react';

import '../scss/styles.scss';

import TextField from '../components/TextField/TextField';
import Checkbox from '../components/Checkbox/Checkbox';
import Dropdown from '../components/Dropdown/Dropdown';
import Button from '../components/Button/Button';

function Registration() {
	const [getNameValue, setNameValue] = React.useState('');
	const [isNameValid, setNameValidation] = React.useState(false);

	const [getEmailValue, setEmailValue] = React.useState('');
	const [isEmailValid, setEmailValidation] = React.useState(false);

	const [getPhoneValue, setPhoneValue] = React.useState('');
	const [isPhoneValid, setPhoneValidation] = React.useState(false);

	const [isTermsChecked, toggleTermsCheck] = React.useState(false);

	const [dropdownActiveValue, setDropdownActiveValue] = React.useState({
		name: 'Язык',
		type: 'default'
	});
	const [isDropdownValid, setDropdownValidation] = React.useState(false);

	const languages = [
		{ name: 'Русский', type: 'ru' },
		{ name: 'Английский', type: 'en' },
		{ name: 'Китайский', type: 'cn' },
		{ name: 'Испанский', type: 'es' }
	];

	const termsText = (
		<span>
			Принимаю <a href="/">условия</a> использования{' '}
		</span>
	);

	const validateName = (name) => {
		const re = /[а-яА-я-\s]/;
		return re.test(name);
	};

	const validateEmail = (email) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email.toLowerCase());
	};

	const validatePhone = (phone) => {
		const re =
			/^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
		return re.test(phone);
	};

	const validateDropdown = (activeValue) => {
		return activeValue.type === 'default' ? false : true;
	};

	const isButtonActive = () => {
		return (
			isNameValid &&
			isEmailValid &&
			isPhoneValid &&
			isTermsChecked &&
			isDropdownValid
		);
	};

	React.useEffect(() => {
		setNameValidation(validateName(getNameValue));
	}, [getNameValue]);

	React.useEffect(() => {
		setEmailValidation(validateEmail(getEmailValue));
	}, [getEmailValue]);

	React.useEffect(() => {
		setPhoneValidation(validatePhone(getPhoneValue));
	}, [getPhoneValue]);

	React.useEffect(() => {
		setDropdownValidation(validateDropdown(dropdownActiveValue));
	}, [dropdownActiveValue]);

	return (
		<div className="registration">
			<h1 className="registration__title">Регистрация</h1>
			<div className="registration__subtitle">
				Уже есть аккаунт? <a href="/">Войти</a>
			</div>
			<form className="registration__form">
				<TextField
					onChangeValue={setNameValue}
					value={getNameValue}
					id="name"
					labelText="Имя"
					inputType="text"
					placeholderText="Введите Ваше имя"
					errorText="Не корректное имя"
					isValid={isNameValid}
				/>
				<TextField
					onChangeValue={setEmailValue}
					value={getEmailValue}
					id="email"
					labelText="Email"
					inputType="email"
					placeholderText="Введите Ваш email"
					errorText="Введено не корректное значение"
					isValid={isEmailValid}
				/>
				<TextField
					onChangeValue={setPhoneValue}
					value={getPhoneValue}
					id="phone"
					labelText="Номер телефона"
					inputType="tel"
					placeholderText="Введите номер телефона"
					errorText="Не корректный номер телефона"
					isValid={isPhoneValid}
				/>
				<Dropdown
					labelText="Язык"
					languages={languages}
					activeValue={dropdownActiveValue}
					setActiveValue={setDropdownActiveValue}
				/>
				<Checkbox
					toggleCheck={toggleTermsCheck}
					isChecked={isTermsChecked}
					description={termsText}
				/>
				<Button isActive={isButtonActive} text="Зарегистрироваться" />
			</form>
		</div>
	);
}

export default Registration;
