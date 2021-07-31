import { TextField } from "@material-ui/core";
import { InputTypeProps } from "../InputTypeProps";
import useInputValidation from "../useInputValidation";
import { maxLength, minLength } from "../validations";

const validations = [minLength(2), maxLength(20)];

function FirstNameInput({ initialValue = "" }: InputTypeProps<string>) {
    const { value, valueChanged, validate, error, helperText } =
        useInputValidation(initialValue, validations);

    return (
        <TextField
            id="standard-basic"
            label="Vorname"
            onChange={(e) => valueChanged(e.target.value)}
            onBlur={validate}
            value={value}
            error={error}
            helperText={helperText}
        />
    );
}

export default FirstNameInput;
