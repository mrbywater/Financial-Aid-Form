import "./AidForm.scss"
import Headline from "../formComponents/Headline";
import Switcher from "../buttonComponents/Switcher";
import Input from "../inputComponents/Input";
import {useForm, SubmitHandler, FormProvider, FieldError} from "react-hook-form"
import {faHand, faHeart, faShirt, faWallet} from "@fortawesome/free-solid-svg-icons";
import Button from "../buttonComponents/Button";
import {mastercard, paypal, terminal, visa, webmoney} from "../../svgInfoList";
import PayButton from "../buttonComponents/PayButton";
import Card from "../inputComponents/Card";
import {useState} from "react";

export type FormInputs = {
    name: string
    surname: string
    company: string
    email: string
    phone: string
    country: string
    city: string
    state: string
    address: string
    postalcode: string
    fileInput: FileList
}

const inputsInfo = [
    {
        type: 'text',
        label: 'Ім′я',
        name: 'name',
        half: true,
        required: true,
        maxLength: 16
    },
    {
        type: 'text',
        label: 'Фамілія',
        name: 'surname',
        half: true,
        required: true,
        maxLength: 16
    },
    {
        type: 'text',
        label: 'Назва компанії, організації',
        name: 'company',
        maxLength: 32,
        required: true
    },
    {
        type: 'email',
        label: 'Email-адрес',
        name: 'email',
        required: true,
        maxLength: 32
    },
    {
        type: 'text',
        label: 'Номер телефону',
        name: 'phone',
        pattern: /\+?\(?([0-9]{3})\)?[-.]?\(?([0-9]{3})\)?[-.]?\(?([0-9]{4})\)?/,
        minLength: 10,
        maxLength: 16
    },
    {
        type: 'text',
        label: 'Країна',
        name: 'country',
        required: true
    },
    {
        type: 'text',
        label: 'Місто',
        name: 'city',
        half: true,
        required: true
    },
    {
        type: 'text',
        label: 'Штат, район',
        name: 'state',
        half: true
    },
    {
        type: 'text',
        label: 'Адреса',
        name: 'address'
    },
    {
        type: 'text',
        label: 'Поштовий індекс',
        name: 'postalcode',
        half: true,
        required: true,
        minLength: 6
    }
]

const typeOfHelpButtons = [
    {
        icon: faHand,
        text: 'Зробити'
    },
    {
        icon: faWallet,
        text: 'Фінансова допомога'
    },
    {
        icon: faShirt,
        text: 'Матеріальна допомога'
    },
    {
        icon: faHeart,
        text: 'Волонтерство'
    }
]

const payButtons = [
    {
        icon: mastercard,
        extraIcon: visa,
        label: 'Карта Visa/MasterCard'
    },
    {
        label: 'Приват24'
    },
    {
        icon: terminal,
        label: 'Термінали України'
    },
    {
        icon: webmoney,
        label: 'WebMoney'
    },
    {
        icon: paypal,
        label: 'PayPal'
    },
]

const AidForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>()

    const onSubmitHandler = handleSubmit(data => console.log(data));

    const [switcherState, setSwitcherState] = useState<boolean>(true)

    console.log(errors)

    return (
        <div className='aidFormMainContainer'>
            <div className='headline'>
                <Headline
                    headline='Заповніть форму'
                />
            </div>
            <div className='switcher'>
                <Switcher
                    isActive={switcherState}
                    setIsActive={setSwitcherState}
                />
            </div>
            {/*<FormProvider>*/}
                <form onSubmit={onSubmitHandler}>
                    <div>
                        {inputsInfo.map(input => (
                            <Input
                                key={input.name}
                                type={input.type}
                                label={input.label}
                                name={input.name}
                                error={(errors as { [key: string]: FieldError })}
                                register={register}
                                half={input.half}
                                required={input?.required}
                                maxLength={input?.maxLength}
                                minLength={input?.minLength}
                                pattern={input?.pattern}
                            />
                        ))}
                    </div>
                    <div>
                        <div className='headline typeOfHelpHeadline'>
                            <Headline
                                headline='Види допомоги'
                                extraHeadline='Ви можете змінити вид допомоги'
                            />
                        </div>
                        <div className='typeOfHelpContainer'>
                            <div>
                                {typeOfHelpButtons.map(button => (
                                    <Button
                                        key={button.text}
                                        icon={button.icon}
                                        text={button.text}
                                    />
                                ))}
                            </div>
                            <div>
                                <div className='paymentMethods'>
                                    <span>Спосіб оплати</span>
                                    <div>
                                        {payButtons.map(payButton => (
                                            <PayButton
                                                key={payButton.label}
                                                label={payButton.label}
                                                icon={payButton?.icon}
                                                extraIcon={payButton?.extraIcon}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className='cardContainer'>
                                    <span>Введіть наступні данні</span>
                                    <Card/>
                                </div>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="Допомогти"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            {/*</FormProvider>*/}
        </div>
    )
}

export default AidForm