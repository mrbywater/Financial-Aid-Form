import './Card.scss'
import Input from "./Input";
import { useFormContext, Controller } from 'react-hook-form';

const Card = () => {

    const { control } = useFormContext();

    return (
        <div className='cardMainContainer'>
            <div>
                <Input
                    type='tel'
                    label='Номер карти'
                    name='cardNumber'
                />
            </div>
            <div>
                <Input
                    type='text'
                    label='Термін дії'
                    name='cardDate'
                />
                <Input
                    type='text'
                    label='CVC/CVV'
                    name='CVV'
                />
            </div>
        </div>
    )
}

export default Card