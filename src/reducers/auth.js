import jwtDecode from 'jwt-decode'

const initialAuthState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  authStatus: null,
  roles: null,
}

export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type]
    return reducer ? reducer(state, action.payload) : state
  }
}

export const auth = createReducer(initialAuthState, {
  LOGIN_USER: (state, payload) => {
    const username = jwtDecode(payload).user
    return Object.assign({}, state, {
      isAuthenticated: true,
      token: payload,
      userName: username,
      roles: jwtDecode(payload).roles,
      authStatus: `Connecté en tant que ${username}`,
    })
  },
  LOGIN_FAILURE: (state, errorText) => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      token: null,
      userName: null,
      authStatus: errorText,
      roles: null,
    })
  },
  LOGOUT_USER: state => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      token: null,
      userName: null,
      authStatus: null,
      roles: null,
    })
  },
})
