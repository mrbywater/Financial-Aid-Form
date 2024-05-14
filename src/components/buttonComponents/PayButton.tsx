import './PayButton.scss';

type PayButtonProps = {
  icon?: string;
  extraIcon?: string;
  label: string;
  isActive?: boolean;
  onClick: any;
};

const PayButton = (props: PayButtonProps) => {
  const { icon, extraIcon, label, isActive, onClick } = props;

  return (
    <button
      className={`payButtonMainContainer ${isActive ? 'isActivePay' : ''}`}
      onClick={onClick}>
      <div>
        {icon ? (
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        ) : (
          <div>{label}</div>
        )}
        {extraIcon && <div dangerouslySetInnerHTML={{ __html: extraIcon }} />}
      </div>
      <span>{label}</span>
    </button>
  );
};

export default PayButton;
