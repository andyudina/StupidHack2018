import faker from 'faker';

let myDefaultRating = 90

let numberOfOthers = 30
let othersRating = []
for (var i = numberOfOthers - 1; i >= 0; i--) {
  othersRating.push({
    'name': faker.name.findName(),
    'rating': faker.random.number({min:80, max:120}),
    'isMe': false
  })
}

const getratedUserList = (othersRating, myRating) => {
  let myUser = {
    'name': 'ME',
    'rating': myRating,
    'isMe': true
  }
  let usersList = []
  let othersRatingSorted = othersRating.sort(
    (a, b) => (- a['rating'] + b['rating']))
  let index = 0;
  for (; index < othersRatingSorted.length; index++) {
    if (othersRatingSorted[index]['rating'] < myRating) {
      break;
    }
  }
  if (index === 0) {
    return [
      myUser,
      ...othersRatingSorted.slice(index, index + 2)
    ]
  } else if (index >= othersRatingSorted.length - 1) {
    index = othersRatingSorted.length - 1
    return [
      ...othersRatingSorted.slice(index - 1, index + 1),
      myUser
    ]
  } else {
    return [
      othersRatingSorted[index - 1],
      myUser,
      othersRatingSorted[index]
    ]
  }
}

const getRating = (othersRating, myRating) => ({
  'userRatingsList': getratedUserList(othersRating, myRating),
  'myRating': myRating
})

const rating = (
    state = getRating(othersRating, myDefaultRating),
    action) => {
  switch (action.type) {
    case 'INCREASE_RATING':
      return getRating(othersRating, state['myRating'] + 1)
    case 'DECREASE_RATING':
      return getRating(othersRating, state['myRating'] - 1)
    default:
      return state
  }
}

export default rating