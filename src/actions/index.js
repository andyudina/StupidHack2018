export const initiateShareLink = () => ({
  type: 'INITIATE_SHARE_LINK'
})

export const shareLink = () => ({
  type: 'SHARE_LINK'
})

export const rateUser = (ratingDiff) => ({
  type: 'RATE_USER'
  ratingDiff: ratingdDiff
})