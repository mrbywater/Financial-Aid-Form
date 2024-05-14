import { CARD_FIELDS } from '../../constants';
import './Card.scss';
import { useMemo, useRef, useState } from 'react';
import cardValidator from 'card-validator';

type CardProps = {
  setValue: any;
  setCardIsValid: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CardType = {
  cardNumber: boolean;
  cardDate: boolean;
  CVV: boolean;
};

const errorMessage = 'Некоректне значення';

const Card = (props: CardProps) => {
  const { setValue, setCardIsValid } = props;

  const refContainer = useRef<any>([]);

  const [cardValue, setCardValue] = useState<string[]>([]);
  const [cardDate, setCardDate] = useState<string>('');
  const [cardCVV, setCardCVV] = useState<string>('');
  const [validationResult, setValidationResult] = useState<CardType>({
    cardNumber: true,
    cardDate: true,
    CVV: true,
  });

  const onTextChange =
    (index: number, maxLength: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length === maxLength && index < 5) {
        refContainer.current?.[index + 1]?.focus();
      }

      if (e.target.value.length === maxLength && index < 4) {
        const newArray: string[] = [...cardValue];
        newArray[index] = e.target.value;
        setCardValue(newArray);
      }

      if (index === 4) {
        setCardDate(e.target.value);
      }

      if (e.target.value.length === maxLength && index === 5) {
        setCardCVV(e.target.value);
      }
    };

  useMemo(() => {
    const cardNumberIsValid =
      cardValue.join('').length === 16
        ? cardValidator.number(cardValue.join('')).isValid
        : validationResult.cardNumber;
    const cardDateIsValid =
      cardDate.length >= 4
        ? cardValidator.expirationDate(cardDate).isValid
        : validationResult.cardDate;
    const CVVIsValid =
      cardCVV.length === 3
        ? cardValidator.cvv(cardCVV).isValid
        : validationResult.CVV;

    setValidationResult({
      cardNumber: cardNumberIsValid,
      cardDate: cardDateIsValid,
      CVV: CVVIsValid,
    });
  }, [cardValue, cardDate, cardCVV]);

  if (
    cardValue.join('').length &&
    cardDate.length &&
    cardCVV.length &&
    Object.values(validationResult).every(value => value)
  ) {
    setValue('card', {
      cardNumber: cardValue.join(''),
      cardDate: cardDate,
      CVV: cardCVV,
    });
    setCardIsValid(true);
  }

  return (
    <div className="cardMainContainer">
      {CARD_FIELDS.map((item, index) => (
        <div className="inputMainContainer" key={item.name}>
          <label htmlFor={item.name}>{item.label}</label>
          <input
            id={item.name}
            required
            maxLength={item.maxLength}
            minLength={item.minLength}
            ref={el => (refContainer.current[index] = el)}
            onChange={onTextChange(index, item.maxLength)}
            type="text"
            className="customInput"
          />
          <div
            style={
              validationResult
                ? {
                    opacity: +!validationResult?.[item.name as keyof CardType],
                  }
                : {}
            }
            className="errorText">
            {errorMessage}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
