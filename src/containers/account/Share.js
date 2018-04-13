import { connect } from 'react-redux'
import { showUrlForSharing } from 'actions'
import Share from 'components/account/Share'

const mapStateToProps = (state, ownProps) => ({
  url: state.shareUrl
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  showUrl: () => {
    dispatch(showUrlForSharing())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Share)