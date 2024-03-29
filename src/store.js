import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from 'redux';
import { thunk } from 'redux-thunk';
import { appReducer, userReducer, usersReducer, postReducer, postsReducer } from './reducers'

const reducer = combineReducers({
	app: appReducer,
	user: userReducer,
	users: usersReducer,
	post: postReducer,
	posts: postsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
