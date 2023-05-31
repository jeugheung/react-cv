import { createStore, combineReducers, applyMiddleware } from 'redux';
import { educationReducer } from '../../store/educationReducer';
import { skillsReducer } from '../../store/skillsReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

describe('Redux Store', () => {
  const rootReducer = combineReducers({
    education: educationReducer,
    skills: skillsReducer,
  });

  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['education'],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  let store, persistor;

  beforeEach(() => {
    store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
    persistor = persistStore(store);
  });

  afterEach(() => {
    persistor.purge();
  });

  it('should have initial state for education', () => {
    const state = store.getState();
    expect(state.education).toEqual({ educations: [], isLoading: true });
  });

  it('should have initial state for skills', () => {
    const state = store.getState();
    expect(state.skills).toEqual({ skills: [] });
  });

  it('should dispatch an action to update education state', () => {
    const educationAction = {
      type: 'ASYNC_EDUCATION',
      payload: [{ id: 1, title: 'Education 1' }],
    };

    store.dispatch(educationAction);

    const state = store.getState();
    expect(state.education).toEqual({
      educations: [{ id: 1, title: 'Education 1' }],
      isLoading: false,
    });
  });

  it('should dispatch an action to update skills state', () => {
    const skillsAction = {
      type: 'ASYNC_SKILLS',
      payload: [{ name: 'Skill 1' }],
    };

    store.dispatch(skillsAction);

    const state = store.getState();
    expect(state.skills).toEqual({ skills: [{ name: 'Skill 1' }] });
  });

  it('should dispatch an action to add a new skill', () => {
    const addSkillAction = {
      type: 'ADD_SKILL',
      payload: { name: 'New Skill' },
    };

    store.dispatch(addSkillAction);

    const state = store.getState();
    expect(state.skills).toEqual({ skills: [{ name: 'New Skill' }] });
  });
});
