let defaultEmoji = '🤘'

const shareUrl = (state = defaultEmoji, action) => {
  switch (action.type) {
    case 'SWITCH_RATE_SUCCESS_EMOJI_TO_POOP':
      return '💩'
    default:
      return state
  }
}

export default shareUrl