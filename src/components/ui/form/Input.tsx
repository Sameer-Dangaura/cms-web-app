// import type React from "react"
import type { ITextInputProps } from "./Form.contract"

export const TextInput = ({ type = "text", name, className, errMsg = "", handleChange }: Readonly<ITextInputProps>) => {
    return (
        <>
            <input
                type={type}
                name={name}
                className={`border w-full border-grey-400 shadow bg-white rounded-md p-2 ${className}`}
                placeholder={`Enter your ${name}`}
                onChange={handleChange} // we are passing the handleChange function as a prop to the TextInput component which will be called when the value of the input changes. it is a common practice to handle the change event of the input element in the parent component and pass the handleChange function as a prop to the child component. this way we can manage the state of the input element in the parent component and update it when the value of the input changes. in this case, we are logging the event object to the console when the value of the input changes.
            />
            <span className="text-red-700 text-sm"> {errMsg} </span>
        </>
    )
}