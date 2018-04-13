import { connect } from 'react-redux'
import Button from 'components/Button'

const shareUrl = (shareUrl) => {
  navigator.share({
    title: 'I\'m VEGAN',
    text: 'Give me a medal!',
    url: shareUrl,
  })
  .then(_ => console.log(e, 'Successful share'))
  .catch(error => console.log('Error sharing', error));
}

const mapStateToProps = (state, ownProps) => ({
  onClick: () => shareUrl(state.shareUrl),
  label: 'I\'m VEGAAN'
})

export default connect(
  mapStateToProps,
)(Button)
