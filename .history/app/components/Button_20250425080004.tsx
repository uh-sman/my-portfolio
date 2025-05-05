import React from 'react'

interface ButtonProps {
    href: string;
    target: string;
    label: string;
    icon: string;
    classes: string;
}
const ButtonPrimary = ({ href, target, label, icon, classes }: ButtonProps) => {
    if(!href) {
        return (
            <button></button>
        )
    }
    return(
        <a href={href} target={target} className={""}></a>
    )
}

export default ButtonPrimary
