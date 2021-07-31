import { ChangeEvent } from "react";

export type InputTypeProps<T> = {
    initialValue?: T;
    onChange?: (e: ChangeEvent) => void;
};
