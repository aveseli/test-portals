import { ValidationType } from "./ValidationType";

export class MinLength implements ValidationType<string | number | undefined> {
    minLength: number;

    constructor(minLength: number) {
        this.minLength = minLength;
    }

    validate(value?: string | number): string[] {
        const errors = [] as string[];

        if (!value) {
            errors.push("Value is null!");
        }

        if (typeof value === "string") {
            if (value.length < this.minLength)
                errors.push("MinLength of " + this.minLength.toString());
        }

        if (typeof value === "number") {
            if (value < this.minLength)
                errors.push(
                    "Value is smaller than ",
                    this.minLength.toString(),
                );
        }

        return errors;
    }
}
