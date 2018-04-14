import React from 'react'
import { getEmojiUrl } from 'components/_emoji'

const Emoji = ({ emoji }) => {
  let src = getEmojiUrl(emoji);
  return (
    <img
      src={src}
      alt={emoji}
    />
  )
}

export default Emoji;