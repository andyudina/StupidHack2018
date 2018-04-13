const showCopiedMessage = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_COPIED_MESSAGE':
      return true
    case 'HIDE_URL_FOR_SHARING':
      return false
    default:
      return state
  }
}

export default showCopiedMessage