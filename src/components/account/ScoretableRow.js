import React from 'react'

const ScoretableRow = ({ name, rating }) => (
  pug`
    .score-table-row-wrapper
      .row.score-table-row.middle-xs
        .col-xs-8.score-table-row-name
          .box ${name}
        .col-xs-4.score-table-row-score.text-right.tabular
          .box ${rating}
  `
)

export default ScoretableRow