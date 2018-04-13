import { combineReducers } from 'redux'
import rating from './rating'
import shareUrl from './shareUrl'
import rateSuccessEmoji from './rateSuccessEmoji'
import rateSuccessCopy from './rateSuccessCopy'
import showUrlForSharing from './showUrlForSharing'
import showCopiedMessage from './showCopiedMessage'

export default combineReducers({
  rating,
  shareUrl,
  rateSuccessEmoji,
  showUrlForSharing,
  showCopiedMessage,
})
