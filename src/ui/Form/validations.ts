export type ValidatorFn<T> = (value?: T) => string[];

export function minLength(minLength: number): ValidatorFn<string | number> {
    return function (value?): string[] {
        const errors = [] as string[];

        if (!value) {
            errors.push("Value is null!");
        }

        if (typeof value === "string") {
            if (value.length < minLength)
                errors.push("MinLength of " + minLength.toString());
        }

        if (typeof value === "number") {
            if (value < minLength)
                errors.push("Value is smaller than ", minLength.toString());
        }

        return errors;
    };
}

export function maxLength(maxLength: number): ValidatorFn<string | number> {
    return function validate(value?: string | number): string[] {
        const errors = [] as string[];

        if (!value) {
            errors.push("Value is null!");
        }

        if (typeof value === "string") {
            if (value.length > maxLength)
                errors.push("Maxlength of " + maxLength.toString());
        }

        if (typeof value === "number") {
            if (value > maxLength)
                errors.push("Value is bigger than ", maxLength.toString());
        }

        return errors;
    };
}
