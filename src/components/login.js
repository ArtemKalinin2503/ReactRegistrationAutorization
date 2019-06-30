import React, { Component } from 'react';
import store from '../store';
import { connect, actionUser } from 'react-redux';
import { actionLogOut } from '../action';

//Компонент Авторизованного пользователя
class Login extends Component {
	//Кнопка выйти
	handleClick = () => {
		this.props.history.push('/'); //Роутинг на страницу Home
		store.dispatch(actionLogOut()); //Вызовим action actionLogOut который вызовит saga logout
	};

	render() {
		return (
			<div className="login__wrapper">
				<div className="login__head">
					<span className="login__email">Вы вошли как: {this.props.userAutorization}</span>
					<button className="button__singOut" onClick={this.handleClick}>
						Выйти
					</button>
				</div>
				<h3>Login</h3>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps = {}) => ({
	userAutorization: state.mainReducer.userAutorization
});

const LoginComponent = connect(mapStateToProps)(Login);

export default LoginComponent;
