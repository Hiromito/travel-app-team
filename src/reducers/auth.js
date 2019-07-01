import Immutable from 'immutable'

const initialState = Immutable.Map({
  email: '',
  uid: '',
  authed: false
})


const actionsMap = {
  logout(state, action) {
    return state.merge({
      authed: false,
      email: ''
    })
  },
  login(state, action) {
    console.log("123456789", action.data.user.email)
    return {
      ...state,
      authed: true,
      email: action.data.user.email,
      uid: action.data.user.uid
    }
  },
  reset_password(state, action) {
    return state
  }
}

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
