import { connect } from 'react-redux'
import { hideUrlForSharing } from 'actions'
import ShareUrl from 'components/account/ShareUrl'

const mapStateToProps = (state, ownProps) => ({
  url: state.shareUrl,
  isVisible: state.showUrlForSharing
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeUrlSharing: () => dispatch(hideUrlForSharing()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareUrl)