import { H1 } from "../../components/ui/typography/PageTitle";
import type { IAuthProps } from "./Auth.contract";


export default function RightSide({ children, component: Component }: Readonly<IAuthProps>) {
    return (
        <div className="w-2/3 bg-gray-100 rounded-md flex flex-col gap-10 p-10">
            <div className="border-b border-b-blue-900/30 pb-5">
                <H1 className="text-blue-900 text-5xl">{children}</H1>
            </div>
            <Component />

            <div className="w-full flex items-center gap-5">
                <hr className="w-2/3" />
                <p >Or</p>
                <hr className="w-2/3" />
            </div>

            <div className="flex w-full items-center justify-center">
                <a href="/" className="border p-2 w-full text-center rounded-md hover:bg-blue-50 hover:scale-98">Login</a>
            </div>
        </div>
    )
}

/*
- <a href="/" className="border p-2 w-full text-center rounded-md hover:bg-blue-50 hover:scale-98">Login</a>
- here, href="/" is used to navigate to the home page when the user clicks on the "Login" link. It switches the URL to the root path ("/"), which typically corresponds to the home page of the application. This is happening because we have defined a route for the home page in our RouterConfig component with the path "/". When the user clicks on the "Login" link, it triggers a navigation to the home page, and the corresponding component (HomePage) will be rendered based on the route configuration.

*/

/*
`component: Component` is a prop that is being passed to the RightSide component. It is of type ComponentType, which means it can be any React component. The value of this prop is expected to be a React component that will be rendered inside the RightSide component.

In the ResetPassword component, we are passing the ResetPasswordForm component as the value for the component prop when rendering the RightSide component. This means that when the RightSide component is rendered, it will render the ResetPasswordForm component inside it.
*/