import './AidForm.scss';
import Headline from '../formComponents/Headline';
import Switcher from '../buttonComponents/Switcher';
import Input from '../inputComponents/Input';
import { useForm } from 'react-hook-form';
import {
  faHand,
  faHeart,
  faShirt,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../buttonComponents/Button';
import {
  mastercard,
  paypal,
  terminal,
  visa,
  webmoney,
} from '../../svgInfoList';
import PayButton from '../buttonComponents/PayButton';
import { useState } from 'react';

export type FormInputs = {
  name: string;
  surname: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  state: string;
  address: string;
  postalcode: string;
  fileInput: FileList;
  cardNumber: string;
  cardDate: string;
  CVV: string;
};

const inputsInfo = [
  {
    type: 'text',
    label: 'Ім′я',
    name: 'name',
    half: true,
    required: true,
    maxLength: 16,
  },
  {
    type: 'text',
    label: 'Фамілія',
    name: 'surname',
    half: true,
    required: true,
    maxLength: 16,
  },
  {
    type: 'text',
    label: 'Країна',
    name: 'country',
    required: true,
  },
  {
    type: 'text',
    label: 'Назва компанії, організації',
    name: 'company',
    maxLength: 32,
    required: true,
  },
  {
    type: 'text',
    label: 'Місто',
    name: 'city',
    half: true,
    required: true,
  },
  {
    type: 'text',
    label: 'Штат, район',
    name: 'state',
    half: true,
  },
  {
    type: 'email',
    label: 'Email-адрес',
    name: 'email',
    required: true,
    maxLength: 32,
  },
  {
    type: 'text',
    label: 'Адреса',
    name: 'address',
  },
  {
    type: 'text',
    label: 'Номер телефону',
    name: 'phone',
    pattern: /\+?\(?([0-9]{3})\)?[-.]?\(?([0-9]{3})\)?[-.]?\(?([0-9]{4})\)?/,
    minLength: 10,
    maxLength: 16,
  },

  {
    type: 'text',
    label: 'Поштовий індекс',
    name: 'postalcode',
    half: true,
    required: true,
    minLength: 6,
  },
];

const typeOfHelpButtons = [
  {
    icon: faHand,
    text: 'Зробити',
    position: '4%',
  },
  {
    icon: faWallet,
    text: 'Фінансова допомога',
    position: '28%',
  },
  {
    icon: faShirt,
    text: 'Матеріальна допомога',
    position: '53.5%',
  },
  {
    icon: faHeart,
    text: 'Волонтерство',
    position: '80.5%',
  },
];

const payButtons = [
  {
    icon: mastercard,
    extraIcon: visa,
    label: 'Карта Visa/MasterCard',
  },
  {
    label: 'Приват24',
  },
  {
    icon: terminal,
    label: 'Термінали України',
  },
  {
    icon: webmoney,
    label: 'WebMoney',
  },
  {
    icon: paypal,
    label: 'PayPal',
  },
];

const cardInputs = [
  {
    type: 'tel',
    label: 'Номер карти',
    name: 'cardNumber',
    required: true,
    maxLength: 16,
    minLength: 16,
    pattern: /^(4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/,
  },
  {
    type: 'text',
    label: 'Термін дії',
    name: 'cardDate',
    required: true,
    maxLength: 5,
    minLength: 5,
    pattern: /^\d{2}\/\d{2}$/,
  },
  {
    type: 'text',
    label: 'CVC/CVV',
    name: 'CVV',
    required: true,
    maxLength: 3,
    minLength: 3,
    pattern: /^\d+$/,
  },
];

const AidForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormInputs>();

  const onSubmitHandler = handleSubmit(data => console.log(data));

  const [switcherState, setSwitcherState] = useState<boolean>(true);
  const [activeHelpButton, setActiveHelpButton] = useState<number>(2);
  const [activePayButton, setActivePayButton] = useState<number>(2);

  const handleHelpButtons =
    (index: number, setButton: any) =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setButton(index);
    };

  const send = () => () => {
    if (isValid) {
      alert('Форма віправлена');
      reset();
    }
  };

  return (
    <div className="aidFormMainContainer">
      <div className="headline">
        <Headline headline="Заповніть форму" />
      </div>
      <div className="switcher">
        <Switcher isActive={switcherState} setIsActive={setSwitcherState} />
      </div>
      <form onSubmit={onSubmitHandler}>
        <div>
          {inputsInfo.map(input => (
            <Input
              key={input.name}
              type={input.type}
              label={input.label}
              name={input.name}
              error={errors[input.name as keyof FormInputs]?.message}
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
          <div className="headline typeOfHelpHeadline">
            <Headline
              headline="Види допомоги"
              extraHeadline="Ви можете змінити вид допомоги"
            />
          </div>
          <div className="typeOfHelpContainer">
            <div>
              {typeOfHelpButtons.map((button, index) => (
                <Button
                  key={button.text}
                  icon={button.icon}
                  text={button.text}
                  isActive={activeHelpButton === index}
                  onClick={handleHelpButtons(index, setActiveHelpButton)}
                />
              ))}
            </div>
            <div>
              <div className="paymentMethods">
                <span>Спосіб оплати</span>
                <div>
                  {payButtons.map((payButton, index) => (
                    <PayButton
                      onClick={handleHelpButtons(index, setActivePayButton)}
                      isActive={activePayButton === index}
                      key={payButton.label}
                      label={payButton.label}
                      icon={payButton?.icon}
                      extraIcon={payButton?.extraIcon}
                    />
                  ))}
                </div>
              </div>
              <div className="cardContainer">
                <span>Введіть наступні данні</span>
                <div className="cardMainContainer">
                  {cardInputs.map(card => (
                    <Input
                      key={card.label}
                      type={card.type}
                      label={card.label}
                      name={card.name}
                      register={register}
                      maxLength={card.maxLength}
                      error={errors[card.name as keyof FormInputs]?.message}
                      required={card?.required}
                      pattern={card.pattern}
                    />
                  ))}
                </div>
              </div>
              <div
                className="arrow"
                style={{ left: typeOfHelpButtons[activeHelpButton].position }}
              />
            </div>
            <div>
              <input type="submit" value="Допомогти" onClick={send()} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AidForm;
