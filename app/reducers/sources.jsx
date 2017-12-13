import axios from 'axios';

// Action-Types:
const RETRIEVE_DATA = 'RETRIEVE_DATA';

// Initial State
const initialState = {
  results: []
}


// Action-Creators:


// dispatch methods/THUNKS:
export const fetchResearch = (searchParams) =>
(dispatch) => {
  return axios({
    method: 'get',
    url: 'http://localhost:3000/api/research',
    searchParams
})
.then(result => {
  console.log(result)
  // dispatch stuff to store here
})
.catch(err => console.log(err))
}


export default function(state = initialState, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case RETRIEVE_DATA:
      newState.results = action.payload
      break
    default:
      return state
  }
  return newState
}
