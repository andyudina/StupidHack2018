const showUrlForSharing = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_URL_FOR_SHARING':
      return true
    case 'HIDE_URL_FOR_SHARING':
      return false
    default:
      return state
  }
}

export default showUrlForSharing