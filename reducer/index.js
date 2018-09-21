export function reducer(state, action){
    switch(action.type){
      case "CITIES_RECEIVED":
        return Object.assign({}, state, {
          cities: action.payload
        });
      case "NAME_CHANGE":
        return Object.assign({}, state, { name: action.payload })
      case "POP_CHANGE":
        return Object.assign({}, state, { population: action.payload })
      case "VALUE_CHANGE":
        return Object.assign({}, state, { value: action.payload })
    }
    return state;
}
