import Logo from "../logo/Logo";
import { H1 } from "../ui/typography/PageTitle";

export default function LeftSidePanel() {
    return (
        // do always return something from a component, even if it is null or empty div
        <div className=" w-1/3 bg-blue-900 rounded-md flex items-center justify-center flex-col gap-5 p-5 text-white">
            <Logo />

            <H1>Login Page</H1>
        </div>
    )
}

/*
- `w-1/3` => equivalent to `width: 33.3333%` in CSS.
- `rounded-md` => equivalent to `border-radius: 0.375rem` in CSS.
- `p-5` => equivalent to `padding: 1.25rem` in CSS. i.e. `padding: 20px` in CSS.
*/