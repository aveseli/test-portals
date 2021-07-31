export interface ValidationType<T> {
    validate(value?: T): string[];
}