import "./AidForm.scss"
import Headline from "../formComponents/Headline";
import Switcher from "../formComponents/Switcher";
import Input from "../inputComponent/Input";

const AidForm = () => {
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
            <div>
                <form action="">
                    <Input
                        type='text'
                        label="Ім′я"
                    />
                </form>
                <form action=""></form>
            </div>
        </div>
    )
}

export default AidForm