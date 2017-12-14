import axios from 'axios';

// Action-Types:
const RETRIEVE_DATA = 'RETRIEVE_DATA';

// Initial State
const initialState = {
  resources: []
}


// Action-Creators:
const setData = (payload) => {
  return {
    type: RETRIEVE_DATA,
    payload
  }
}

// dispatch methods/THUNKS:
export const fetchResearch = (searchParams) =>
(dispatch) => {
  return axios({
    method: 'post',
    url: 'http://localhost:3000/api/research',
    data: {
      searchParams: searchParams
    }
})
.then(result => {
  dispatch(setData(result.data))
})
.catch(err => console.log(err))
}


export default function(state = initialState, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case RETRIEVE_DATA:
      newState.resources = action.payload
      break
    default:
      return state
  }
  return newState
}
