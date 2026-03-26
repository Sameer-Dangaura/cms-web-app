import type { IButtonProps } from "./Button.contract"


export const Button = ({ type, className, children }: Readonly<IButtonProps>) => {
    return (
        <button type={type} className={` ${className} `}>
            {children}
        </button>
    )
}