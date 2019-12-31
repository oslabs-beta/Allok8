// import devToolsEnhancer from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../Reducers/combineReducers';


const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;
