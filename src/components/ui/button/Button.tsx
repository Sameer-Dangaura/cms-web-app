import type { IButtonProps } from "./Button.contract"


export const Button = ({ className, children }: Readonly<IButtonProps>) => {
    return (
        <button className={` ${className} `}>
            {children}
        </button>
    )
}