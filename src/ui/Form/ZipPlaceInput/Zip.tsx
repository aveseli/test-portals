import { TextField } from "@material-ui/core";
import { InputTypeProps } from "../InputTypeProps";
import useInputValidation from "../useInputValidation";
import { MaxLength } from "../Validations/MaxLength";
import { MinLength } from "../Validations/MinLength";

const validations = [new MinLength(1000), new MaxLength(9999)];

function Zip({ initialValue = undefined }: InputTypeProps<number>) {
    const { value, valueChanged, validate, error, helperText } =
        useInputValidation(initialValue, validations);

    return (
        <TextField
            id="standard-basic"
            label="Zip"
            type="number"
            onChange={(e) => valueChanged(+e.target.value)}
            onBlur={validate}
            value={value ? value : ""}
            error={error}
            helperText={helperText}
        />
    );
}

export default Zip;
