import { TextField } from "@material-ui/core";
import { InputTypeProps } from "../InputTypeProps";
import useInputValidation from "../useInputValidation";
import { maxLength, minLength } from "../validations";

const validations = [minLength(3), maxLength(20)];

function NameInput({ initialValue = "" }: InputTypeProps<string>) {
    const { value, valueChanged, validate, error, helperText } =
        useInputValidation(initialValue, validations);

    return (
        <TextField
            id="standard-basic"
            label="Name"
            onChange={(e) => valueChanged(e.target.value)}
            onBlur={validate}
            value={value}
            error={error}
            helperText={helperText}
        />
    );
}

export default NameInput;
