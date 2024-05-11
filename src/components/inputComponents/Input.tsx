import "./Input.scss"
import {FieldError} from "react-hook-form";

type inputProps = {
    type: string
    label: string
    name: any
    half?: boolean
    register: any
    required?: boolean
    error?: { [key: string]: FieldError }
    maxLength?: number
    minLength?: number
    pattern?: RegExp
    validate?: any
}

const Input = (props: inputProps) => {

    const {
        type,
        label,
        name,
        half,
        register,
        required,
        error,
        maxLength,
        minLength,
        pattern,
        validate,
    } = props

    return (
        <div className={`inputMainContainer ${half ? 'halfInput' : ''}`}>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                maxLength={maxLength}
                className={`customInput ${error?.[name] ? 'error' : ''}`}
                {...register(name, {
                    required: {
                        value: required,
                        message: "Це поле обов'язкове",
                    },
                    maxLength: {
                        value: maxLength,
                        message: `Довжина більше ${maxLength} символів`,
                    },
                    minLength: {
                        value: minLength,
                        message: `Довжина меньше ${minLength} символів`,
                    },
                    pattern: {
                        value: pattern,
                        message: 'Некоректний ввод',
                    },
                    validate,
                })}
            />
            <div style={{ opacity: +!!error?.[name] }} className="errorText">
                {error?.[name]?.message}
            </div>
            {name === 'company' && (
                <div>
                    <label className='plusLogoLabel'>
                        +{'\u00A0'} Логотип
                        <input
                            type='file'
                            accept=".png"
                            style={{ display: 'none' }}
                            multiple={false}
                            {...register('fileInput', {
                                required: true,
                                validate: {
                                    png: (value: FileList) => value && value[0].type === 'image/png' || 'Тільки PNG',
                                    size: (value: FileList) => value && value[0].size <= 256 * 1024 || 'Максимальний розмір 256KB'
                                }
                            })}
                        />
                    </label>
                    <div className='fileError'>
                        {error?.['fileInput']?.message}
                    </div>
                </div>

            )}
        </div>
    )
}

export default Input