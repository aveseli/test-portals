import { ValidationType } from "./ValidationType";

export class MaxLength implements ValidationType<string | number | undefined> {
    maxLength: number;

    constructor(maxLength: number) {
        this.maxLength = maxLength;
        console.log("created maxlength");
    }

    validate(value: string | number): string[] {
        const errors = [] as string[];

        if (!value) {
            errors.push("Value is null!");
        }

        if (typeof value === "string") {
            if (value.length > this.maxLength)
                errors.push("Maxlength of " + this.maxLength.toString());
        }

        if (typeof value === "number") {
            if (value > this.maxLength)
                errors.push("Value is bigger than ", this.maxLength.toString());
        }

        return errors;
    }
}
