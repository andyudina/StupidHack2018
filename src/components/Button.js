import React from 'react'

const Button = ({ label }) => (
  pug`
    .button ${label}
  `
)
Button.defaultProps = {
  label: 'label'
}

export default Button