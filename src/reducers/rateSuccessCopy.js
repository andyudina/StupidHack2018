const rateSuccessCopy = (state = null, action) => {
  switch (action.type) {
    case 'SET_CONFIRMATION':
      return action.copy
    default:
      return state
  }
}

export default rateSuccessCopy