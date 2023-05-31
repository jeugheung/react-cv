export const fetchSkills = () => {
  return function(dispatch) {
    fetch('/api/skills')
      .then(response => response.json())
      .then(json => {
        console.log(json); // Logging the response
        dispatch({type: 'ASYNC_SKILLS', payload: json})
      })
      .catch(error => {
        console.log(error);
        return [];
      })
  }
}

export const postSkills = (values, {resetForm}) => {
  const { skillName, skillRange } = values;
  const newSkill = { name: skillName, range: Number(skillRange) };

  return function(dispatch) {
    fetch('/api/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSkill),
    })
    .then(response => {
      if (response.ok) {
        console.log('post')
        dispatch({type: 'ADD_SKILL', payload: newSkill})
        resetForm()
        return response.json();
      } else {
        throw new Error('Failed to create skill');
      }
    })
    .catch(error => {
      console.error(error);
    });
  }
}