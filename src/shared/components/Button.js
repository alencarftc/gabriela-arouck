import React from 'react'
import style from '@sass/components/button.module.scss'

const Button = ({ children, type = "button", primary = false, size="medium" }) => {
  const getClassName = () => {
    const baseClassName = style.button;

    const primaryClassName = primary ? style['button-primary'] : {};
    const sizeClassName = size ? style[`button-size-${size}`] : {};

    return `${baseClassName} \
    ${primaryClassName} \
    ${sizeClassName}`;
  }

  return (
    <button type={type} className={getClassName()}>{children}</button>
  )
}

export default Button
