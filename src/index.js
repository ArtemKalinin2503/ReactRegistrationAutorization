import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider, connect } from 'react-redux';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeComponent from './components/home';
import Registration from './components/registration';
import SingUpComponent from './components/singUp';
import LoginComponent from './components/login';
//Ипортируем библиотеку стилей react-toolbox (в консоле необходимо выполнить команду npm run toolbox (которая создаст дерикторию assets))
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

//Основной компонент const history = syncHistoryWithStore(browserHistory, store);
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<div className="App">
						<Switch>
							<Route path="/" component={HomeComponent} exact />
							<Route path="/registration" component={Registration} exact />
							<Route path="/singUp" component={SingUpComponent} exact />
							<Route path="/login" component={LoginComponent} exact />
							<Route path="*" component={() => '404 страница не найдена'} />
						</Switch>
					</div>
				</ThemeProvider>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state, ownProps = {}) => ({
	autorization: state.mainReducer.autorization
});

const MainApp = connect(mapStateToProps)(App);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<MainApp />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
