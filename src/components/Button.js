import React from 'react'

const Button = ({ label, onClick, color }) => (
  pug`
    .button(
      onClick=${onClick}
      className='button-'+color
      ) ${label}
  `
)

Button.defaultProps = {
  label: 'label',
  color: 'green'
}

export default Button