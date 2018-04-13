import { connect } from 'react-redux'
import Share from 'components/account/Share'

const mapStateToProps = (state, ownProps) => ({
  url: state.shareUrl
})

export default connect(
  mapStateToProps,
)(Share)