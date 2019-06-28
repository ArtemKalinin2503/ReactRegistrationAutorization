import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

const customField = ({ input, type, placeholder, meta: { touched, error }, ...rest }) => {
	return (
		<div>
			<input {...input} placeholder={placeholder} type={type} className="no-valid" />
			{touched && error && <p>{error}</p>}
		</div>
	);
};

//Функция валидации
const myValidator = (values) => {
	const errors = {};
	if (!values.loginAutorization) {
		errors.loginAutorization = 'Поле необходимо заполнить';
	}
	if (!values.passwordAutorization) {
		errors.passwordAutorization = 'Поле необходимо заполнить';
	}
	return errors;
};

//Форма регистрации с ипользованием redux-form для валидации и передачи данных
class AutorizationForm extends Component {
	render() {
		return (
			<form className="autorization__form" onSubmit={this.props.handleSubmit}>
				{' '}
				{/*handleSubmit обязательно*/}
				<Field
					name="loginAutorization"
					component={customField}
					type="email"
					className="autorization__input-login"
					placeholder="Email login"
				/>
				<Field
					name="passwordAutorization"
					component={customField}
					type="password"
					className="autorization__input-password"
					placeholder="Password"
				/>
				<button type="submit" className="autorization__button">
					Войти
				</button>
			</form>
		);
	}
}

AutorizationForm = reduxForm({
	form: 'autorization',
	validate: myValidator
})(AutorizationForm);

export default AutorizationForm;
