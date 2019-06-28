import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

//Здесь описаеться компонент формы в данном случае input
const customField = ({ input, type, placeholder, className,  meta: { touched, error }, ...rest }) => {
	return (
		<div>
      <input {...input} placeholder={placeholder} type={type} className={className} />
			{touched && error && <p className="error">{error}</p>}
		</div>
	);
};

//Функция валидации
const myValidator = (values) => {
	const errors = {};
	if (!values.loginRegistration) {
    errors.loginRegistration = 'Поле необходимо заполнить';
  }
  if (!values.passwordRegistration) {
    errors.passwordRegistration = 'Поле необходимо заполнить';
  }
	return errors;
};

//Форма регистрации с ипользованием redux-form для валидации и передачи данных
class RegistrationForm extends Component {
	render() {
		return (
			<form className="registration__form" onSubmit={this.props.handleSubmit}>
				{' '}
				{/*handleSubmit обязательно*/}
				<Field
					name="loginRegistration"
					component={customField}
					type="email"
					className="registration__input-login"
					placeholder="Email login"
				/>
				<Field
					name="passwordRegistration"
					component={customField}
					type="password"
					className="registration__input-password"
					placeholder="Password"
				/>
				<button type="submit" className="registration__button">
					Регистрация
				</button>
			</form>
		);
	}
}

RegistrationForm = reduxForm({
  form: 'registration',
  validate: myValidator
})(RegistrationForm);

export default RegistrationForm;
