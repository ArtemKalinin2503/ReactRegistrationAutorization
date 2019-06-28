import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { initState } from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas.js';

const sagaMiddleware = createSagaMiddleware();

//Store
export const store = createStore(
	rootReducer,
	initState,
	compose(
		applyMiddleware(sagaMiddleware),
		window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
	)
);

sagaMiddleware.run(rootSaga);

export default store;
