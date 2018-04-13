import { connect } from 'react-redux'
import ProfileInfo from 'components/account/ProfileInfo'

const mapStateToProps = (state, ownProps) => ({
  myRating: state.rating.myRating
})

export default connect(
  mapStateToProps,
)(ProfileInfo)