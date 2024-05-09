import "./Headline.scss"

type headlineProps = {
    headline: string,
    extraHeadline?: string
}

const Headline = (props: headlineProps) => {

    const {
        headline,
        extraHeadline
    } = props


    return (
        <div className='headlineMainContainer'>
            <span>{headline}</span>
            <span>{extraHeadline}</span>
        </div>
    )
}

export default Headline