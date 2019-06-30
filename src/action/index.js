//Action который переводит состояние autorization в true/false
export const actionGetAutorization = (autorization) => {
	return { type: 'GET_AUTORIZATION_FORM', payload: autorization };
};

//Action вызывает saga addUserWorker
export const actionPostSagaSucces = (user) => {
	return { type: 'ACTION_GET_SAGA_POST', payload: user };
};

//Action принимает данные о новом пользователе и отправляет их в БД
export const actionPostDataRegistration = (userNew) => {
	return { type: 'POST_DATA_REGISTRATION', payload: userNew };
};

//Action вызывает saga authorizeUser и предает в нее данные из формы Авторизации (historyAPI - необходим для роутинга внутри saga)
export const actionAuthorize = (user, hist) => {
	return { type: 'ACTION_SAGA_AUTHORIZE', payload: user, historyAPI: hist };
};

//Action вызывает saga logout
export const actionLogOut = () => {
	return { type: 'ACTION_SAGA_LOGOUT' };
};

//Action получает email авторизованного пользователя
export const actionUser = (userAutorization) => {
  return { type: 'GET_USER_AUTORIZATION', payload: userAutorization };
};
