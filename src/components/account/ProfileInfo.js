import React from 'react'

const ProfileInfo = () => (
  pug`
  .profile-info
    img.profile-info-userpic(src="http://lorempixel.com/640/640/people")
    .profile-info-progressbar
  `
)

export default ProfileInfo