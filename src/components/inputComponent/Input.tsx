import "./Input.scss"

type inputProps = {
    type: string
    label: string
}

const Input = (props: inputProps) => {

    const {
        type,
        label
    } = props

    return (
        <div className='inputMainContainer'>
            <label htmlFor={label}>{label}</label>
            <input
                id={label}
                type={type}
            />
        </div>
    )
}

export default Input