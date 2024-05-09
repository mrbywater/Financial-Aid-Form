import "./Button.scss"
import React from "react";

type buttonProps = {
    children?: React.ReactNode
}

const Button = (props: buttonProps) => {

    const {
        children
    } = props

    return (
        <button>
            {children}
        </button>
    )
}

export default Button