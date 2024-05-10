import "./Input.scss"
import {useFormContext} from "react-hook-form";

type inputProps = {
    type: string
    label: string
    name: string
}

const Input = (props: inputProps) => {

    const {
        type,
        label,
        name
    } = props

    const { register } = useFormContext()

    return (
        <div className='inputMainContainer'>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                {...register(name)}
            />
            {name === 'company' && (
                <div className='plusLogo'>
                    +{'\u00A0'} Логотип
                </div>
            )}
        </div>
    )
}

export default Input