import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

//Основной state
export const initState = {
	autorization: false,
	userNew: [ { email: '', password: '' } ], //Здесь будут данные о новом позьватели
  userAutorization: ''
};

const mainReducer = (state = initState, action) => {
	switch (action.type) {
		//Action переводиь state autorization в true/false
		case 'GET_AUTORIZATION_FORM':
			return {
				...state,
				autorization: action.payload
			};
		//Action принимает данные о новом пользователе и отправляет их в БД
		case 'POST_DATA_REGISTRATION':
			let userNewArr = [];
			userNewArr.push({ email: action.payload.email, password: action.payload.password });
			return {
				...state,
				userNew: userNewArr
      };
    //Action получает email авторизованного пользователя
    case 'GET_USER_AUTORIZATION':
      return {
        ...state,
        userAutorization: action.payload
      }  
		default:
			return state;
	}
};

const todoApp = combineReducers({
	mainReducer,
	form: formReducer, //для redux-form
	routing: routerReducer
});

export default todoApp;
