import React, { Component } from 'react';
import store from '../store';
import { actionPostDataRegistration, actionPostSagaSucces } from '../action';
import RegistrationForm from '../components/form/registrationForm';

//Компонент с формой регистрации
class RegistrationUser extends Component {
	//Событие submit формы Регистрации (в values приходят данные из всех input формы)
	submit = (values) => {
		let user = {
			//Объект с данными о новом пользователе
			email: values.loginRegistration,
			password: values.passwordRegistration
		};
		store.dispatch(actionPostDataRegistration(user)); //Данный action отправит данные о новом пользователе в БД
    store.dispatch(actionPostSagaSucces(user)); //Данный action вызывает saga addUserWorker
		this.props.history.push('/singUp'); //Роутинг на страницу Авторизации
	};
	render() {
		return (
			<div className="registartion__wrapper">
				<h3>Регистрация</h3>
				<RegistrationForm onSubmit={this.submit} /> {/*Форма регитсрации созданная с помощью Redux-Form*/}
			</div>
		);
	}
}

export default RegistrationUser;
