import "./AidForm.scss"
import Headline from "../formComponents/Headline";
import Switcher from "../buttonComponents/Switcher";
import Input from "../inputComponents/Input";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import {faHand, faHeart, faShirt, faWallet} from "@fortawesome/free-solid-svg-icons";
import Button from "../buttonComponents/Button";
import {mastercard, paypal, terminal, visa, webmoney} from "../../svgInfoList";
import PayButton from "../buttonComponents/PayButton";
import Card from "../inputComponents/Card";

type Inputs = {
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
}

const inputsInfo = [
    {
        type: 'text',
        label: 'Ім′я',
        name: 'name'
    },
    {
        type: 'text',
        label: 'Фамілія',
        name: 'surname'
    },
    {
        type: 'text',
        label: 'Назва компанії, організації',
        name: 'company'
    },
    {
        type: 'email',
        label: 'Email-адрес',
        name: 'email'
    },
    {
        type: 'text',
        label: 'Номер телефону',
        name: 'phone'
    },
    {
        type: 'text',
        label: 'Країна',
        name: 'country'
    },
    {
        type: 'text',
        label: 'Місто',
        name: 'city'
    },
    {
        type: 'text',
        label: 'Штат, район',
        name: 'state'
    },
    {
        type: 'text',
        label: 'Адреса',
        name: 'address'
    },
    {
        type: 'text',
        label: 'Поштовий індекс',
        name: 'postalcode'
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

    const methods = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    // @ts-ignore
    return (
        <div className='aidFormMainContainer'>
            <div className='headline'>
                <Headline
                    headline='Заповніть форму'
                />
            </div>
            <div className='switcher'>
                <Switcher/>
            </div>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div>
                        {inputsInfo.map(input => (
                            <Input
                                key={input.name}
                                type={input.type}
                                label={input.label}
                                name={input.name}
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
            </FormProvider>
        </div>
    )
}

export default AidForm