import './Switcher.scss';

type switcherProps = {
  isActive: boolean;
  setIsActive: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const Switcher = (props: switcherProps) => {
  const { isActive, setIsActive } = props;

  const activeButtonHandler = () => () => setIsActive(!isActive);

  return (
    <button className="switcherMainContainer" onClick={activeButtonHandler()}>
      <div className={isActive ? 'activeSwitch' : ''}>Фіз. особа</div>
      <div className={isActive ? '' : 'activeSwitch'}>Юр. особа</div>
    </button>
  );
};

export default Switcher;
