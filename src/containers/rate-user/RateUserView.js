import { connect } from 'react-redux'
import { increaseRating, decreaseRating, setConfirmation } from 'actions'
import RateUserView from 'components/rate-user/RateUserView'

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
  increaseRating: () => dispatch(increaseRating()),
  decreaseRating: () => dispatch(decreaseRating()),
  setConfirmation: (emoji, copy) => dispatch(setConfirmation(emoji, copy)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RateUserView)