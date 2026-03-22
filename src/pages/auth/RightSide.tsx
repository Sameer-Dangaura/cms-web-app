import { H1 } from "../../components/ui/typography/PageTitle";
import ForgetPasswordForm from '../../components/auth/ForgetPasswordForm';


export default function RightSide() {
    return (
        <div className="w-2/3 bg-gray-100 rounded-md flex flex-col gap-10 p-10">
            <div className="border-b border-b-blue-900/30 pb-5">
                <H1 className="text-blue-900 text-5xl">Forget Password:</H1>
            </div>
            <ForgetPasswordForm />

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