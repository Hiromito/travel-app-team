import Immutable from 'immutable';

const initialState = Immutable.Map({
    travel: {}
})

const actionsMap = {
    add_travel(state, action) {
      let messages = state.get('messages')
      if (messages[action.data.channel] === undefined) {
        messages[action.data.channel] = {
          historyLoaded: false,
          messages: [action.data.message]
        }
      } else {
        messages[action.data.channel].messages.push(action.data.message)
      }
      messages = Object.assign({}, messages)
      return state.set('messages', messages)
    }
}

export default (state = initialState, action) => {
    const reduceFn = actionsMap[action.type]
    if (!reduceFn) return state
    return reduceFn(state, action)
}
