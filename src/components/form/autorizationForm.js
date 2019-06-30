import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from 'react-toolbox/lib/input';

const customField = ({ input, type, placeholder, className, meta: { touched, error }, ...rest }) => {
	return (
		<div>
      <Input type={type} label={placeholder} {...input} placeholder={placeholder} className={className} />
      {touched && error && <p className="error">{error}</p>}
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
        <button type="submit">Войти</button>
			</form>
		);
	}
}

AutorizationForm = reduxForm({
	form: 'autorization',
	validate: myValidator
})(AutorizationForm);

export default AutorizationForm;
