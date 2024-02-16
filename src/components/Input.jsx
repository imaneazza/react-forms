export default function Input({name, title, errorMsg, error, ...props}) {


    return (<div className="control no-margin">
        <label htmlFor={name}>{title}</label>
        <input name={name} {...props} />
        {error && <div className="control-error">
            {errorMsg}
        </div>}
    </div>)
}