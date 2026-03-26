import ResetPasswordForm from '../../components/auth/ResetPasswordForm';
import LeftSide from './LeftSide';
import RightSide from './RightSide';


export default function ResetPassword() {
    return (
        <>
            <section className=" bg-gray-50 flex gap-5 h-screen p-5">
                <LeftSide children="Reset Password" />
                <RightSide children="Reset Password" component={ResetPasswordForm} />
            </section>
        </>
    )
}