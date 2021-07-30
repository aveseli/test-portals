import { useState } from "react";

function useInputValidation(defaultValue: string = "") {
    const [value, setValue] = useState(defaultValue);
    const [isValid, setValid] = useState(true);
    const [isTouched, setTouched] = useState(false);

    const validate = () => {
        let valid = false;
        valid = valid || value.length >= 3;
        setValid(valid);
        console.log("setValid: ", valid);
    };

    const valueChanged = (e: any) => {
        setValue(e.target.value);
        setTouched(e.target.value || e.target.value.legth > 0);
        if (e.target.value || e.target.value.legth === 0) {
            setValid(true);
        }
    };

    const errorState = !isValid && isTouched ? true : undefined;
    const helperText = errorState ? "Kaputt" : undefined;

    return [value, valueChanged, errorState, helperText, validate];
}

export default useInputValidation;
