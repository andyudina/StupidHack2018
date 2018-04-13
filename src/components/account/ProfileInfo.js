import React from 'react'

const ProfileInfo = () => (
  pug`
  .profile-info
    img.profile-info-userpic(src="https://placeimg.com/200/200/people")
    .profile-info-progressbar
    .profile-info-progressbar-hint.text-center
      | 4000 medals until green belt
  `
)

export default ProfileInfo