import { connect } from 'react-redux'
import { increaseRating, decreaseRating } from 'actions'
import ScoreTable from 'components/account/ScoreTable'

const mapStateToProps = (state, ownProps) => ({
  userRatingsList: state.rating.userRatingsList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onIncreaseRating: () => dispatch(increaseRating()),
  onDecreaseRating: () => dispatch(decreaseRating()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScoreTable)
