import React, { Component } from 'react';
import store from '../store';
import { actionLogOut } from '../action';

//Компонент Авторизованного пользователя
class LoginComponent extends Component {
	//Кнопка выйти
	handleClick = () => {
		this.props.history.push('/'); //Роутинг на страницу Home
        store.dispatch(actionLogOut()); //Вызовим action actionLogOut который вызовит saga logout
	};

	render() {
		console.log(store.getState());
		return (
			<div className="login__wrapper">
				<h1>Login</h1>
				<button className="button__singOut" onClick={this.handleClick}>
					Выйти
				</button>
			</div>
		);
	}
}

export default LoginComponent;
