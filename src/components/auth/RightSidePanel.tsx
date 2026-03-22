import { H1 } from "../ui/typography/PageTitle"
import LoginForm from './LoginForm';


export default function RightSidePanel() {
    return (
        <div className="w-2/3 bg-gray-100 rounded-md flex flex-col gap-10 p-10">
            <div className="border-b border-b-blue-900/30 pb-5">
                <H1 className="text-blue-900 text-5xl">Login Form</H1>
            </div>
            <LoginForm />
        </div>
    )
}

/*
- `w-2/3` => equivalent to `width: 66.6667%` in CSS.
- `w-full` => equivalent to `width: 100%` in CSS.
- `border-b` => equivalent to `border-bottom: 1px solid` in CSS.
- `border-b-blue-900/30` => equivalent to `border-bottom-color: rgba(29, 78, 216, 0.3)` in CSS.
- `pb-5` => equivalent to `padding-bottom: 1.25rem` in CSS. i.e. `padding-bottom: 20px` in CSS.
- `htmlFor` => equivalent to `for` attribute in HTML, it is used to associate a label with an input element.
- `scale-98` => equivalent to `transform: scale(0.98)` in CSS. i.e. It is used to decrease the size of an element by 2% when hovered.
- `size-sm` => equivalent to `font-size: 0.875rem` in CSS. i.e. `font-size: 14px` in CSS. It is used to set the font size of an element to small.
*/