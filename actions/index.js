export function thunkFetching(){
  return function(dispatch){
    return fetch('http://cities.jonkri.se/')
              .then(response => response.json())
              .then(cities => {dispatch({
              type: 'CITIES_RECEIVED',
              payload: cities
              })
            })
  }
}


export function thunkAddCity(){
  return function(dispatch, getState){
    return fetch('http://cities.jonkri.se', {
      body: JSON.stringify({name: getState().name, population: getState().population}),
      headers: { 'Content-Type': 'application/json'},
      method: 'POST'
    })
     .then(response => response.json())
     .then(cities => { dispatch({
       type: 'CITIES_RECEIVED',
       payload: cities
     })
   })
  }
 }

export function thunkRemoveCity(){
   return function(dispatch, getState){
     let city = getState().cities.find(item => item.name === getState().value);
     return fetch('http://cities.jonkri.se/'+city.id, {
       method: 'DELETE'})
         .then(()=>{ dispatch(thunkFetching())
         })
   }
}

export function nameChange(event){
  return {
    type: 'NAME_CHANGE',
    payload: event.target.value
  }
}

export function popChange(event){
  return {
    type: 'POP_CHANGE',
    payload: event.target.value
  }
}

export function valueChange(event){
  return {
    type: 'VALUE_CHANGE',
    payload: event.target.value
  }
}
