import { useEffect, type ReactNode } from 'react';
import ForgetPasswordForm from '../../components/auth/ForgetPasswordForm';
import RightSide from './RightSide';
import { useOutletContext } from 'react-router';
import type { Dispatch, SetStateAction } from 'react';

export default function ForgetPassword() {

    const { setPageContent } = useOutletContext<{ setPageContent: Dispatch<SetStateAction<{ pageTitle: string; content: string; formTitle: ReactNode }>> }>();  // this hook is used to access the context provided by the parent route (i.e., AuthLayout in this case). It allows us to get the setPageContent function from the AuthLayout, which we can use to update the page content (like page title, content, form title) based on the current route. This way, we can dynamically change the content of the AuthLayout based on whether we are on the login page, forget password page, or reset password page.
    useEffect(() => {
        // console.log(setPageContent); // this will log the context object provided by the AuthLayout, which should contain the setPageContext function. This is useful for debugging to ensure that we are receiving the correct context from the parent route.

        setPageContent({
            pageTitle: "Forgot Your Password?",
            content: "No worries! Enter your email address and we'll send you a link to reset your password. You'll be back to your account in no time.",
            formTitle: "Forgot Password"
        })
    }, [])

    return (
        <>
            <RightSide children="Forgot Password" component={ForgetPasswordForm} />
        </>
    )
}