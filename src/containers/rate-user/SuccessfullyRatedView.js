import { connect } from 'react-redux'
import { changeRateSuccessEmojiToPoop } from 'actions'
import SuccessfullyRatedView from 'components/rate-user/SuccessfullyRatedView'

const mapStateToProps = (state, ownProps) => ({
  emoji: state.rateSuccessEmoji
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(changeRateSuccessEmojiToPoop()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuccessfullyRatedView)