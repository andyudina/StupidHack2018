import { connect } from 'react-redux'
import { hideUrlForSharing, showCopiedMessage } from 'actions'
import ShareUrl from 'components/account/ShareUrl'

const mapStateToProps = (state, ownProps) => ({
  url: state.shareUrl,
  isVisible: state.showUrlForSharing,
  isCopied: state.showCopiedMessage,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeUrlSharing: () => dispatch(hideUrlForSharing()),
  onCopyToClipboard: () => dispatch(showCopiedMessage())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareUrl)