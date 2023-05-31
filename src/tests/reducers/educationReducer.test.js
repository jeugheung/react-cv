import { educationReducer } from '../../store/educationReducer';

describe('educationReducer', () => {
  const initialState = {
    educations: [],
    isLoading: true
  };

  it('should return initial state', () => {
    expect(educationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ASYNC_EDUCATION action', () => {
    const action = {
      type: 'ASYNC_EDUCATION',
      payload: [{ id: 1, name: 'Education 1' }, { id: 2, name: 'Education 2' }]
    };

    const expectedState = {
      educations: [{ id: 1, name: 'Education 1' }, { id: 2, name: 'Education 2' }],
      isLoading: false
    };

    expect(educationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should preserve the previous educations when handling ASYNC_EDUCATION action', () => {
    const prevState = {
      educations: [{ id: 1, name: 'Education 1' }],
      isLoading: false
    };

    const action = {
      type: 'ASYNC_EDUCATION',
      payload: [{ id: 2, name: 'Education 2' }, { id: 3, name: 'Education 3' }]
    };

    const expectedState = {
      educations: [
        { id: 1, name: 'Education 1' },
        { id: 2, name: 'Education 2' },
        { id: 3, name: 'Education 3' }
      ],
      isLoading: false
    };

    expect(educationReducer(prevState, action)).toEqual(expectedState);
  });

  it('should handle unknown action types', () => {
    const prevState = {
      educations: [{ id: 1, name: 'Education 1' }],
      isLoading: false
    };

    const action = {
      type: 'UNKNOWN_ACTION'
    };

    expect(educationReducer(prevState, action)).toEqual(prevState);
  });
});
