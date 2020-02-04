import { persistReducer, persistStore } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../../reducers';

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const reduxStore = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export const reduxPersistor = persistStore(reduxStore, {});
