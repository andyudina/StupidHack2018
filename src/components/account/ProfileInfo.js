import React from 'react'

const ProfileInfo = ({myRating}) => {
  let maxRating = 100
  let progressbarLength = 100 - 100 * myRating / maxRating
  if (progressbarLength < 0) {
    progressbarLength = 0
  }
  progressbarLength = '' + progressbarLength + '%'
  let progressbarStyle = {
    right: progressbarLength
  }
  let medalsLeft = Math.max(maxRating - myRating, 0)
  return (
  pug`
  .profile-info
    img.profile-info-userpic(src="https://placeimg.com/200/200/people")
    .profile-info-progressbar
      .profile-info-progressbar-complete(style=${progressbarStyle})
    .profile-info-progressbar-hint.text-center
      | ${medalsLeft} medals until green belt
  `)
}

export default ProfileInfo