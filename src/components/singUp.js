import React, { Component } from 'react';
import store from '../store';
import { actionAuthorize } from '../action';
import AutorizationForm from '../components/form/autorizationForm';

//Компонент с формой авторизации пользователя
class SingUpComponent extends Component {
	//Событие submit формы Авторизации (в values приходят данные из всех input формы)
	submit = (values) => {
		store.dispatch(
			actionAuthorize( //Данный action вызывает saga authorizeUser и передает данные в нее из формы Авторизации
				{ email: values.loginAutorization, password: values.passwordAutorization },
				this.props.history //Необходимо для роутинга внутри saga authorizeUser
			)
		);
	};

	render() {
		if (this.props.autorization) {
			console.log('authorized!');
		}
		return (
			<div className="singUp__wrapper">
				<h3>Авторизация</h3>
				<AutorizationForm onSubmit={this.submit} />
			</div>
		);
	}
}

export default SingUpComponent;
