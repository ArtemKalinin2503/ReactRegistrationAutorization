import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { actionAuthorize, actionUser } from '../action';
import AutorizationForm from '../components/form/autorizationForm';

//Компонент с формой авторизации пользователя
class SingUp extends Component {
	//Событие submit формы Авторизации (в values приходят данные из всех input формы)
	submit = (values) => {
		store.dispatch(
			actionAuthorize( //Данный action вызывает saga authorizeUser и передает данные в нее из формы Авторизации
				{ email: values.loginAutorization, password: values.passwordAutorization },
				this.props.history //Необходимо для роутинга внутри saga authorizeUser
			)
    );
    store.dispatch(actionUser(values.loginAutorization));
	};

	render() {
		if (this.props.autorization) {
			console.log('authorized!');
		}
		return (
			<div className="singUp__wrapper">
        <div className="singUp__head">
          <h3>Авторизация</h3>
        </div>
				<AutorizationForm onSubmit={this.submit} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps = {}) => ({
  userAutorization: state.mainReducer.userAutorization,
});

const SingUpComponent = connect(mapStateToProps)(SingUp);

export default SingUpComponent;
