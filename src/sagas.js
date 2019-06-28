import { takeLatest, call, put } from 'redux-saga/effects';
import { actionPostDataRegistration, actionGetAutorization } from './action';
import axios from 'axios';

//Какой actions вызывает определенную saga
export default function* rootWatcher() {
	yield takeLatest('ACTION_GET_SAGA_POST', addUserWorker);
	yield takeLatest('ACTION_SAGA_AUTHORIZE', authorizeUser);
	yield takeLatest('ACTION_SAGA_LOGOUT', logout);
}

//Saga Регистрации
function* addUserWorker(action) {
	console.log(action);
	const response = yield call(axios.post, 'http://localhost:3012/users', action.payload);
	if (response.status >= 200 && response.status < 300) {
		yield put(actionPostDataRegistration()); //Данный action содержит данные о новом пользователе
	}
}

//Saga Авторизации (принимает данные от action actionAuthorize)
function* authorizeUser(action) {
	const response = yield call(axios.post, 'http://localhost:3012/login', action.payload);
	if (response.status >= 200 && response.status < 300) {
		yield put(actionGetAutorization(true));
		localStorage.setItem('AUTH_TOKEN', response.data.token); //Создадим token
		action.historyAPI.push('/login'); //Роутинг на страницу login
	} else {
		yield put(actionGetAutorization(false));
		localStorage.removeItem('AUTH_TOKEN'); //Удаление token
	}
}

//Saga Разлогирования
function* logout(action) {
	yield put(actionGetAutorization(false));
	localStorage.removeItem('AUTH_TOKEN'); //Удаление token
}
