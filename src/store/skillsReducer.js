const initialState = {
  skills: [],
};

export const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ASYNC_SKILLS':
      return {...state, skills: [...state.skills, ...action.payload]};
    case 'ADD_SKILL':
      return {...state, skills: [...state.skills, action.payload]};
    default:
      return state;
  }
}