import React from 'react'

interface ButtonProps {
    href: string;
    target: string;
    label: string;
    icon: string;
    classes: string;
}
const ButtonPrimary = ({ href, target, label, icon, classes }: ButtonProps) => {
  return (
    <div>
      ButtonPrimary
    </div>
  )
}

export default ButtonPrimary
