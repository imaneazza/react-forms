import Input from "./Input.jsx";
import {hasMinLength, isEmail, isNotEmpty} from "../util/validation.js";
import {useInput} from "../store/useInput.js";

export default function Login() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [enteredData, setEnteredData] = useState({
    //     email: '', password: ''
    // })
    // const [blurData, setBlurData] = useState({
    //     email: false, password: false
    // })
    const {
        value: emailValue,
        handleBlurInput: handleEmailBlur,
        handlechange: handleEmailChange,
        hadError: emailisInvalid
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value))
    const {
        value: passwordValue,
        handleBlurInput: handlepasswordBlur,
        handlechange: handlepasswordChange,
        hadError: passwordisInvalid

    } = useInput('', (value) => hasMinLength(value, 6))

    // const emailisInvalid = blurData.email && !isEmail(enteredData.email) && !isNotEmpty(enteredData.email)
    // const passwordisInvalid = blurData.password && !hasMinLength(enteredData.password, 6)

    function handleSubmission(event) {
        event.preventDefault()
        console.log('User email', emailisInvalid, passwordisInvalid)
        console.log('User email', emailValue, passwordValue)


    }

    // function handlechange(data, key) {
    //
    //     setEnteredData(prevState => ({
    //         ...prevState, [key]: data
    //     }))
    //     setBlurData(prevState => ({
    //         ...prevState, [key]: false
    //     }))
    //
    // }
    //
    // function handleBlurInput(key) {
    //
    //     setBlurData(prevState => ({
    //         ...prevState, [key]: true
    //     }))
    //
    // }


    // function handleEmailChange(event) {
    //     setEmail(event.target.value)
    // }
    //
    // function handlePassword(event) {
    //     setPassword(event.target.value)
    // }


    return (<form onSubmit={handleSubmission}>
        <h2>Login</h2>

        <div className="control-row">
            <Input title={'Email'}
                   id="email" type="email" name="email" error={emailisInvalid}
                   onBlur={handleEmailBlur}
                   value={emailValue} errorMsg={"Please enter a valid email"}
                   onChange={(e) => handleEmailChange(e.target.value)}/>
            <Input type={'password'} id="password" name="password"
                   error={passwordisInvalid} title={'Password'}
                   onBlur={handlepasswordBlur}
                   value={passwordValue}
                   errorMsg={'Please enter a Password with more than 6 caracters '}
                   onChange={(e) => handlepasswordChange(e.target.value)}/>

        </div>

        <p className="form-actions">
            <button className="button button-flat" type='reset'>Reset</button>
            <button className="button">Login</button>
        </p>
    </form>);
}
