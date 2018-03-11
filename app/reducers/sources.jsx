import axios from 'axios';

// Action-Types:
const RETRIEVE_DATA = 'RETRIEVE_DATA';
const UPDATE_SELECTED = 'UPDATE_SELECTED';
const RESET_RESEARCH = 'RESET_RESEARCH';

// Initial State
const initialState = {
  sources: []
}


// Action-Creators:
const setData = (payload) => {
  return {
    type: RETRIEVE_DATA,
    payload
  }
}

export const updateSelected = (index, bool) => {
  return {
    type: UPDATE_SELECTED,
    index,
    bool
  }
}

export const resetResearch = () => ({
  type: RESET_RESEARCH
})

// dispatch methods/THUNKS:
export const fetchResearch = (searchParams) =>
(dispatch) => {
  axios.post('api/research', {
    tags: searchParams
})
.then(result => {

  let info = result.data;

  info.map(item => {
    item.isSelected = false
  })

  dispatch(setData(info))
})
.catch(err => console.log(err))
}


export default function(state = initialState, action) {

  const newState = Object.assign({}, state)

  switch (action.type) {
    case RETRIEVE_DATA:
      newState.sources = action.payload
      break
    case UPDATE_SELECTED:
      newState.sources[action.index].isSelected = action.bool
      break
    case RESET_RESEARCH:
      newState.sources = []
      break
    default:
      return state
  }
  return newState
}
