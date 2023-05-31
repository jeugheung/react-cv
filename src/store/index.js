import { createStore, combineReducers, applyMiddleware} from 'redux';
import { educationReducer } from './educationReducer';
import { skillsReducer } from './skillsReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;

const rootReducer = combineReducers({
  education: educationReducer,
  skills: skillsReducer
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['education']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

export const persistor = persistStore(store)