import {
  LOGIN_SUCCESS
} from '../constants/User'

const initialState = {
  name: '',
}

export default function user(state = initialState, action) {

  switch(action.type) {
    case LOGIN_SUCCESS:
      return { ...state, name: action.payload }

    default:
      return state
  }

}
