import React from 'react'

const ScoretableRow = ({ name, rating, isMe }) => (
  pug`
    .score-table-row-wrapper
      .row.score-table-row.middle-xs
        .col-xs-1
          img.score-table-row-picture(src="https://placeimg.com/64/64/people")
        .col-xs-8.score-table-row-name
          .box ${name}
        .col-xs-3.score-table-row-score.text-right.tabular
          .box ${rating}
  `
)

export default ScoretableRow