import './AidForm.scss';
import Headline from '../formComponents/Headline';
import Switcher from '../buttonComponents/Switcher';
import Input from '../inputComponents/Input';
import { useForm } from 'react-hook-form';
import Button from '../buttonComponents/Button';
import PayButton from '../buttonComponents/PayButton';
import { useState } from 'react';
import {
  PAY_BUTTONS,
  PERSON_FIELDS,
  TYPE_OF_HELP_BUTTONS,
} from '../../constants';
import Card, { CardType } from '../inputComponents/Card';

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
  card: CardType;
};

const AidForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<FormInputs>();

  const [switcherState, setSwitcherState] = useState<boolean>(true);
  const [activeHelpButton, setActiveHelpButton] = useState<number>(2);
  const [activePayButton, setActivePayButton] = useState<number>(2);
  const [cardIsValid, setCardIsValid] = useState<boolean>(false);

  const handleHelpButtons =
    (index: number, setButton: any) =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setButton(index);
    };

  const send = () => () => {
    if (isValid && cardIsValid) {
      alert('Форма віправлена');
      reset();
    }
  };

  const onSubmitHandler = (data: FormInputs) => console.log(data);

  return (
    <div className="aidFormMainContainer">
      <div className="headline">
        <Headline headline="Заповніть форму" />
      </div>
      <div className="switcher">
        <Switcher isActive={switcherState} setIsActive={setSwitcherState} />
      </div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          {PERSON_FIELDS.map(input => (
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
              watch={watch}
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
              {TYPE_OF_HELP_BUTTONS.map((button, index) => (
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
                  {PAY_BUTTONS.map((payButton, index) => (
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
                <Card setValue={setValue} setCardIsValid={setCardIsValid} />
              </div>
              <div
                className="arrow"
                style={{
                  left: TYPE_OF_HELP_BUTTONS[activeHelpButton].position,
                }}
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
