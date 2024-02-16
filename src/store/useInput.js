import {useState} from "react";

export function useInput(defaultValue, validationFn) {
    const [enteredData, setEnteredData] = useState(defaultValue)
    const [blurData, setBlurData] = useState(false)
    const valueisValid = validationFn(enteredData)

    function handlechange(data) {
        setEnteredData(data)
        setBlurData(false)

    }

    function handleBlurInput() {
        setBlurData(true)

    }


    return {
        value: enteredData,
        handleBlurInput,
        handlechange,
        hadError: blurData && !valueisValid
    }
}