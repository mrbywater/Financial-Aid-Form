import { mastercard, paypal, terminal, visa, webmoney } from '../svgInfoList';
import {
  faHand,
  faHeart,
  faShirt,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';

export const PERSON_FIELDS = [
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

export const CARD_FIELDS = [
  {
    label: 'Номер карти',
    name: 'cardNumber',
    maxLength: 4,
    minLength: 4,
    pattern: /^\d+$/,
  },
  {
    name: 'cardNumber',
    maxLength: 4,
    minLength: 4,
    pattern: /^\d+$/,
  },
  {
    name: 'cardNumber',
    maxLength: 4,
    minLength: 4,
    pattern: /^\d+$/,
  },
  {
    name: 'cardNumber',
    maxLength: 4,
    minLength: 4,
    pattern: /^\d+$/,
  },
  {
    label: 'Термін дії',
    name: 'cardDate',
    maxLength: 5,
    minLength: 4,
    pattern: /^\d{2}\/\d{2}$/,
  },
  {
    label: 'CVC/CVV',
    name: 'CVV',
    maxLength: 3,
    minLength: 3,
    pattern: /^\d+$/,
  },
];

export const PAY_BUTTONS = [
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

export const TYPE_OF_HELP_BUTTONS = [
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
