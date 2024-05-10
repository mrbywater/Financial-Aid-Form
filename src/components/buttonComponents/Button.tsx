import "./Button.scss"
import React from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type buttonProps = {
    icon?: IconProp,
    text: string
}

const Button = (props: buttonProps) => {

    const {
        icon,
        text
    } = props

    return (
        <button className='buttonsMainContainer'>
            {icon &&
                <div>
                    <FontAwesomeIcon icon={icon} />
                </div>
            }
            <span>{text}</span>
        </button>
    )
}

export default Button