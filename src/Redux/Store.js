import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import reducer from './Reducers/reducer';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor }
}