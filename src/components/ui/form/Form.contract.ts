import { type HTMLInputTypeAttribute, type ReactNode } from "react";

export interface IFormLabelProps {
    htmlFor?: string;
    className?: string;
    children: ReactNode;
}

/*
children: React.ReactNode; is a type that represents any valid React element, string, number, boolean, null, undefined, or an array of these types. It is used to define the type of the children prop in a React component. The children prop is a special prop that is used to pass the content of a component. It can be of any data type, but it is usually a string or a React element. It is alternatively, we can also import ReactNode from the react package and use it as the type for the children prop. e.g: import { ReactNode } from "react"; and then use it as children: ReactNode in the interface.
*/

export interface ITextInputProps {
    type: HTMLInputTypeAttribute;
    name: string;
    className?: string;
    errMsg?: string;
}