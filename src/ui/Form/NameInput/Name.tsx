import { TextField } from "@material-ui/core";
import { useState } from "react";
import { InputTypeProps } from "../InputTypeProps";

function NameInput(props: InputTypeProps) {
    const [value, setValue] = useState("");
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
        if (!e.target.value || e.target.value.legth === 0) {
            setValid(true);
        }
    };

    const errorState = !isValid && isTouched ? true : undefined;
    const helperText = errorState ? "Kaputt" : undefined;

    return (
        <TextField
            id="standard-basic"
            label="Name"
            onChange={valueChanged}
            onBlur={validate}
            value={value}
            error={errorState}
            helperText={helperText}
        />
    );
}

export default NameInput;
