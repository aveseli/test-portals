import { TextField } from "@material-ui/core";
import { InputTypeProps } from "../InputTypeProps";
import useInputValidation from "../useInputValidation";
import { MaxLength } from "../Validations/MaxLength";
import { MinLength } from "../Validations/MinLength";

const validations = [new MinLength(3), new MaxLength(20)];

function NameInput({ initialValue = "" }: InputTypeProps<string>) {
    const {
        value,
        valueChanged,
        validate,
        error,
        helperText,
    } = useInputValidation(initialValue, validations);

    return (
        <TextField
            id="standard-basic"
            label="Name"
            onChange={valueChanged}
            onBlur={validate}
            value={value}
            error={error}
            helperText={helperText}
        />
    );
}

export default NameInput;
