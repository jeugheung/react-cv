import { skillsReducer } from '../../store/skillsReducer';

describe('skillsReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      skills: [],
    };

    expect(skillsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ASYNC_SKILLS action', () => {
    const initialState = {
      skills: [],
    };

    const action = {
      type: 'ASYNC_SKILLS',
      payload: ['HTML', 'CSS', 'JavaScript'],
    };

    const expectedState = {
      skills: ['HTML', 'CSS', 'JavaScript'],
    };

    expect(skillsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_SKILL action', () => {
    const initialState = {
      skills: ['HTML', 'CSS'],
    };

    const action = {
      type: 'ADD_SKILL',
      payload: 'JavaScript',
    };

    const expectedState = {
      skills: ['HTML', 'CSS', 'JavaScript'],
    };

    expect(skillsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should return the current state for unknown action', () => {
    const initialState = {
      skills: ['HTML', 'CSS', 'JavaScript'],
    };

    const action = {
      type: 'UNKNOWN_ACTION',
    };

    expect(skillsReducer(initialState, action)).toEqual(initialState);
  });
});
