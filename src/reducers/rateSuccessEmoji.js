const rateSuccessEmoji = (state = null, action) => {
  switch (action.type) {
    case 'SWITCH_RATE_SUCCESS_EMOJI_TO_POOP':
      return '💩'
    case 'SET_CONFIRMATION':
      return action.emoji
    default:
      return state
  }
}

export default rateSuccessEmoji