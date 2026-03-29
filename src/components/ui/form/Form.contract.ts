import { type HTMLInputTypeAttribute, type ReactNode } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";

export interface IFormLabelProps {
    htmlFor?: string;
    className?: string;
    children: ReactNode;
}

/*
children: React.ReactNode; is a type that represents any valid React element, string, number, boolean, null, undefined, or an array of these types. It is used to define the type of the children prop in a React component. The children prop is a special prop that is used to pass the content of a component. It can be of any data type, but it is usually a string or a React element. It is alternatively, we can also import ReactNode from the react package and use it as the type for the children prop. e.g: import { ReactNode } from "react"; and then use it as children: ReactNode in the interface.
*/

export interface IBaseType {
    className?: string;
    errMsg?: string;
}

export interface IFileInputProps<T extends FieldValues> extends IBaseType { // we are using the FieldValues type from react-hook-form to define the type of the generic type parameter T in the IFileInputProps interface. this is necessary because we are using react-hook-form to manage the state of the form and we need to define the type of the form data in order to use it in the FileInput component. the FieldValues type is a generic type that represents the shape of the form data. this way we can ensure that the name prop is of the correct type and we can use it to manage the state of the form in a type-safe way. it is important to note that the name prop is used to identify the input element in the form and it is passed to the FileInput component as a prop. we can use the name prop to register the input element with react-hook-form and manage its state accordingly. in summary, we are using the FieldValues type from react-hook-form to define the type of the generic type parameter T in the IFileInputProps interface in order to use it in the FileInput component and manage the state of the form in a type-safe way.

    name: Path<T>;  // we are using the Path type from react-hook-form to define the type of the name prop in the IFileInputProps interface. this is necessary because we are using react-hook-form to manage the state of the form and we need to define the type of the name prop in order to use it in the FileInput component. the Path type is a generic type that takes a type parameter T which represents the shape of the form data. this way we can ensure that the name prop is of the correct type and we can use it to manage the state of the form in a type-safe way. it is important to note that the name prop is used to identify the input element in the form and it is passed to the FileInput component as a prop. we can use the name prop to register the input element with react-hook-form and manage its state accordingly. in summary, we are using the Path type from react-hook-form to define the type of the name prop in the IFileInputProps interface in order to use it in the FileInput component and manage the state of the form in a type-safe way. 
    control: Control<T>
}   // we are using the Control type from react-hook-form to define the type of the control prop in the IFileInputProps interface. this is necessary because we are using react-hook-form to manage the state of the form and we need to define the type of the control prop in order to use it in the FileInput component. the Control type is a generic type that takes a type parameter T which represents the shape of the form data. this way we can ensure that the control prop is of the correct type and we can use it to manage the state of the form in a type-safe way. it is important to note that the control prop is used to manage the state of the form and it is passed to the FileInput component as a prop. we can use the control prop to register the input element with react-hook-form and manage its state accordingly. in summary, we are using the Control type from react-hook-form to define the type of the control prop in the IFileInputProps interface in order to use it in the FileInput component and manage the state of the form in a type-safe way. 

export interface ITextAreaProps<T extends FieldValues> extends IBaseType {
    name: Path<T>;
    rows?: number;
    control: Control<T>
}   // we are using the Control type from react-hook-form to define the type of the control prop in the ITextAreaProps interface. this is necessary because we are using react-hook-form to manage the state of the form and we need to define the type of the control prop in order to use it in the TextAreaInput component. the Control type is a generic type that takes a type parameter T which represents the shape of the form data. this way we can ensure that the control prop is of the correct type and we can use it to manage the state of the form in a type-safe way. it is important to note that the control prop is used to manage the state of the form and it is passed to the TextAreaInput component as a prop. we can use the control prop to register the textarea element with react-hook-form and manage its state accordingly. in summary, we are using the Control type from react-hook-form to define the type of the control prop in the ITextAreaProps interface in order to use it in the TextAreaInput component and manage the state of the form in a type-safe way.

export interface ITextInputProps<T extends FieldValues> extends IBaseType {
    name: Path<T>;
    type: HTMLInputTypeAttribute;  // we are using the HTMLInputTypeAttribute type from the react package to define the type of the type prop in the ITextInputProps interface. this is necessary because we want to restrict the type of the input element to be one of the valid HTML input types. the HTMLInputTypeAttribute type is a union type that includes all the valid HTML input types such as "text", "email", "password", etc. this way we can ensure that the type prop is of the correct type and we can use it to specify the type of the input element in a type-safe way. it is important to note that the type prop is used to specify the type of the input element and it is passed to the TextInput component as a prop. we can use the type prop to determine how the input element should behave and how it should be rendered. in summary, we are using the HTMLInputTypeAttribute type from the react package to define the type of the type prop in the ITextInputProps interface in order to restrict the type of the input element to be one of the valid HTML input types and ensure that it is used in a type-safe way.
    control: Control<T>
}



export interface ISingleOption {
    label: string;
    value: string;
}

export interface ISelectOptionInputProps<T extends FieldValues> extends IBaseType {
    name: Path<T>;
    options: Array<ISingleOption>;
    control: Control<T>;
}


/*
 `handleChange(e: BaseSyntheticEvent): void`
    
- handleChange is a function that takes an event(e) of type BaseSyntheticEvent as an argument and returns void. BaseSyntheticEvent is a type that represents the synthetic event object that is passed to event handlers in React. It is a wrapper around the native event object and has the same properties and methods as the native event object. It is used to define the type of the event object that is passed to the handleChange function. 
    
- Synthetic event object is a cross-browser wrapper around the browser's native event. It has the same interface as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers. React implements a synthetic event system that is consistent across all browsers, so you don't have to worry about cross-browser compatibility when using events in React. In simple terms, it is a way to handle events in React that is consistent across all browsers. It is used to define the type of the event object that is passed to the handleChange function.
    
- The native event object is the event object that is provided by the browser when an event occurs. It has properties and methods that are specific to the browser and may not be consistent across all browsers. The synthetic event object is a wrapper around the native event object that provides a consistent interface for handling events in React. It is used to define the type of the event object that is passed to the handleChange function. In simple terms, it is a way to handle events in React that is consistent across all browsers. It is used to define the type of the event object that is passed to the handleChange function.
    
- In summary, the handleChange function is a function that takes an event object of type BaseSyntheticEvent as an argument and returns void. It is used to handle the change event of the input element in the TextInput component. The BaseSyntheticEvent type is used to define the type of the event object that is passed to the handleChange function, which is a synthetic event object that is consistent across all browsers. 
*/