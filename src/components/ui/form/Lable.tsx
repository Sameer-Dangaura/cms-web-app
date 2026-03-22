import type { IFormLabelProps } from "./Form.contract"

export const FormLabel = ({ htmlFor = "", className = "", children }: Readonly<IFormLabelProps>) => {
    return (
        <label htmlFor={htmlFor} className={`w-1/3 font-semibold ${className}`}>
            {children}
        </label>
    )
}
/*
- `htmlFor` => equivalent to `for` attribute in HTML, it is used to associate a label with an input element. It is optional and has a default value of an empty string.
- `className` => It is a special property that is used to pass the class name of a component. It is used to apply CSS styles to a component. It is optional and has a default value of an empty string.
- `{children}` => It is used to render the content of a component. It is used to render the children of a component. It is used to render the content that is passed to a component as a child. e.g: <FormLabel htmlFor="username">User Name:</FormLabel> => children = "User Name:"
- `htmlFor = "" => It is used to set the default value of the htmlFor prop to an empty string. It is used to ensure that the htmlFor prop is always defined, even if it is not passed to the component.`
*/