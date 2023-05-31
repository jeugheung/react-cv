const initialState = {
  educations: [],
  isLoading: true,
};

export const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ASYNC_EDUCATION':
      return {...state, educations: [...state.educations, ...action.payload], isLoading: false};
    case 'ASYNC_EDUCATION_ERROR':
      return {...state, isLoading: false}
    default:
      return state;
  }
}