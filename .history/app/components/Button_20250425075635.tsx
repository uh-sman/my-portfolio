import React from 'react'

interface ButtonProps {
    href: string;
    target: string;
    label: string;
    icon: string;
    classes: string;
}
const ButtonPrimary = ({}: ButtonProps) => {
  return (
    <div>
      ButtonPrimary
    </div>
  )
}

export default ButtonPrimary
