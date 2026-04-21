import ResetPasswordForm from '../../components/auth/ResetPasswordForm';
import RightSide from './RightSide';
import { useEffect, type ReactNode } from 'react';
import { useOutletContext } from 'react-router';
import type { Dispatch, SetStateAction } from 'react';


export default function ResetPassword() {

    const { setPageContent } = useOutletContext<{ setPageContent: Dispatch<SetStateAction<{ pageTitle: string; content: string; formTitle: ReactNode }>> }>();  // this hook is used to access the context provided by the parent route (i.e., AuthLayout in this case). It allows us to get the setPageContent function from the AuthLayout, which we can use to update the page content (like page title, content, form title) based on the current route. This way, we can dynamically change the content of the AuthLayout based on whether we are on the login page, forget password page, or reset password page.
    useEffect(() => {
        // console.log(setPageContent); // this will log the context object provided by the AuthLayout, which should contain the setPageContext function. This is useful for debugging to ensure that we are receiving the correct context from the parent route.

        setPageContent({
            pageTitle: "Set a New Password",
            content: "Create a strong new password to secure your CMS account. Use a unique password you haven't used before and keep it safe. Once updated, you can sign in and continue managing your content with confidence.",
            formTitle: "Reset Your Password"
        })
    }, [])


    return (
        <>
            <RightSide children="Reset Password" component={ResetPasswordForm} />
        </>
    )
}