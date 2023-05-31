export const fetchEducation = () => {
  return function(dispatch) {
    fetch('/api/educations')
      .then(response => {
        console.log(response)
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch education');
        }
      })
      .then(json => {
        console.log(json);
        dispatch({type: 'ASYNC_EDUCATION', payload: json})
      })
      .catch(error => {
        console.log(error);
        dispatch({type: 'ASYNC_EDUCATION_ERROR'})
        
      })
  }
}