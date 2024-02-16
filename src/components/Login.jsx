import {useRef, useState} from "react";

export default function Login() {
    const emailref = useRef()
    const passwordref = useRef()
    const [emailIsInvalid,setEmailisInvalid]=useState(false)


    function handleSubmission(event) {
        event.preventDefault()
        const email = emailref.current.value;
        const password=passwordref.current.value
        console.log(email , password)

        const emailisvalid=email.includes('@')
        if(!emailisvalid){
            setEmailisInvalid(true);
            return;
        }

        setEmailisInvalid(false);
        console.log("SENDING HTTP REQUEST ...")

    }


    return (
        <form onSubmit={handleSubmission}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email"
                           ref={emailref}
                    />
                    {emailIsInvalid && <div className="control-error">
                        Please enter a valid email
                    </div>}
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password"
                           ref={passwordref}/>

                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
