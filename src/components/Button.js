import React from 'react'

const Button = ({ label, onClick }) => (
  pug`
    .button(onClick=${onClick}) ${label}
  `
)

Button.defaultProps = {
  label: 'label'
}

export default Button