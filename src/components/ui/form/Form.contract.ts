import { type BaseSyntheticEvent, type HTMLInputTypeAttribute, type ReactNode } from "react";

export interface IFormLabelProps {
    htmlFor?: string;
    className?: string;
    children: ReactNode;
}

/*
children: React.ReactNode; is a type that represents any valid React element, string, number, boolean, null, undefined, or an array of these types. It is used to define the type of the children prop in a React component. The children prop is a special prop that is used to pass the content of a component. It can be of any data type, but it is usually a string or a React element. It is alternatively, we can also import ReactNode from the react package and use it as the type for the children prop. e.g: import { ReactNode } from "react"; and then use it as children: ReactNode in the interface.
*/

export interface IBaseType {
    name: string;
    className?: string;
    errMsg?: string;
}

export interface IFileInputProps extends IBaseType {
    handleChange(name: string, files: File | Array<File>): void
}

export interface ITextAreaProps extends IBaseType {
    rows?: number;
    handleChange(e: BaseSyntheticEvent): void
}

export interface ITextInputProps extends IBaseType {
    type: HTMLInputTypeAttribute;
    handleChange(e: BaseSyntheticEvent): void
}



export interface ISingleOption {
    label: string;
    value: string;
}

export interface ISelectOptionInputProps extends IBaseType {
    options: Array<ISingleOption>;
    handleChange(e: BaseSyntheticEvent): void
}


/*
 `handleChange(e: BaseSyntheticEvent): void`
    
- handleChange is a function that takes an event(e) of type BaseSyntheticEvent as an argument and returns void. BaseSyntheticEvent is a type that represents the synthetic event object that is passed to event handlers in React. It is a wrapper around the native event object and has the same properties and methods as the native event object. It is used to define the type of the event object that is passed to the handleChange function. 
    
- Synthetic event object is a cross-browser wrapper around the browser's native event. It has the same interface as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers. React implements a synthetic event system that is consistent across all browsers, so you don't have to worry about cross-browser compatibility when using events in React. In simple terms, it is a way to handle events in React that is consistent across all browsers. It is used to define the type of the event object that is passed to the handleChange function.
    
- The native event object is the event object that is provided by the browser when an event occurs. It has properties and methods that are specific to the browser and may not be consistent across all browsers. The synthetic event object is a wrapper around the native event object that provides a consistent interface for handling events in React. It is used to define the type of the event object that is passed to the handleChange function. In simple terms, it is a way to handle events in React that is consistent across all browsers. It is used to define the type of the event object that is passed to the handleChange function.
    
- In summary, the handleChange function is a function that takes an event object of type BaseSyntheticEvent as an argument and returns void. It is used to handle the change event of the input element in the TextInput component. The BaseSyntheticEvent type is used to define the type of the event object that is passed to the handleChange function, which is a synthetic event object that is consistent across all browsers. 
*/