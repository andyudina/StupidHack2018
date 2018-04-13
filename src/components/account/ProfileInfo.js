import React from 'react'

const ProfileInfo = ({myRating}) => (
  pug`
  .profile-info
    img.profile-info-userpic(src="https://placeimg.com/200/200/people")
    .profile-info-progressbar
    .profile-info-progressbar-hint.text-center
      | ${10000 - myRating} medals until green belt
  `
)

export default ProfileInfo