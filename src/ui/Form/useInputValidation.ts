import { useState } from "react";
import { ValidatorFn } from "./validations";

type ReturnType<T> = {
    value?: T;
    valueChanged: (e: any) => void;
    validate: () => void;
    error?: boolean;
    helperText?: string;
};

function useInputValidation<T>(
    defaultValue?: T,
    validators?: ValidatorFn<T>[],
): ReturnType<T> {
    const [value, setValue] = useState(defaultValue);
    const [isTouched, setTouched] = useState(false);
    const [errors, setErrors] = useState([] as string[]);

    const validate = () => {
        if (validators && isTouched) {
            const newErrors = validators.flatMap((validate) => {
                return validate(value);
            });

            setErrors(newErrors);
        } else {
            setErrors([]);
        }
    };

    const valueChanged = (newValue: T) => {
        setValue(newValue);
        if (newValue === defaultValue) {
            setErrors([]);
            setTouched(false);
        } else {
            setTouched(true);
        }
    };

    const errorState =
        Object.keys(errors).length > 0 && isTouched ? true : undefined;
    const helperText = errorState ? Object.values(errors)[0] : undefined;

    return {
        value: value,
        valueChanged: valueChanged,
        validate: validate,
        error: errorState,
        helperText: helperText,
    };
}

export default useInputValidation;
