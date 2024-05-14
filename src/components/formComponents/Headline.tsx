import './Headline.scss';

type HeadlineProps = {
  headline: string;
  extraHeadline?: string;
};

const Headline = (props: HeadlineProps) => {
  const { headline, extraHeadline } = props;

  return (
    <div className="headlineMainContainer">
      <span>{headline}</span>
      {extraHeadline && <span className="extraHeadline">{extraHeadline}</span>}
    </div>
  );
};

export default Headline;
