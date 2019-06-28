import React, { Component } from 'react';

//Компонент  Home
class HomeComponent extends Component {
	//Кнопка авторизоваться
	handleClick = () => {
		this.props.history.push('/singUp'); //Роутинг на компонент singUp
	};
	//Кнопка регистрации
	handleRegistration = () => {
		this.props.history.push('/registration'); //Роутинг на компонент registration
	};

	render() {
		return (
			<div className="home__wrapper">
				<h1>Home</h1>
				<button className="home__btnEnter" onClick={this.handleClick}>
					Авторизоваться
				</button>
				<button className="registration_btn" onClick={this.handleRegistration}>
					Регистрация
				</button>
			</div>
		);
	}
}

export default HomeComponent;
