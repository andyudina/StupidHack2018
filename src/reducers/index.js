import { combineReducers } from 'redux'
import rating from './rating'
import shareUrl from './shareUrl'
import rateSuccessEmoji from './rateSuccessEmoji'

export default combineReducers({
  rating,
  shareUrl,
  rateSuccessEmoji,
})
