import './PayButton.scss'

type payButtonProps = {
    icon?: string
    extraIcon?: string
    label: string
}

const PayButton = (props: payButtonProps) => {

    const {
        icon,
        extraIcon,
        label
    } = props

    return (
        <button className='payButtonMainContainer'>
            <div>
                {icon ? (
                    <div dangerouslySetInnerHTML={{ __html: icon }}/>
                ) : (
                    <div>{label}</div>
                )}
                {extraIcon && <div dangerouslySetInnerHTML={{ __html: extraIcon }}/>}
            </div>
            <span>{label}</span>
        </button>
    )
}

export default PayButton