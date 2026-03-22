// import type React from "react"
import type { ITextInputProps } from "./Form.contract"

export const TextInput = ({ type = "text", name, className, errMsg = "" }: Readonly<ITextInputProps>) => {
    return (
        <>
            <input type={type} name={name} className={`border w-full border-grey-400 shadow bg-white rounded-md p-2 ${className}`} placeholder={`Enter your ${name}`} />
            <span className="text-red-700 text-sm"> {errMsg} </span>
        </>
    )
}