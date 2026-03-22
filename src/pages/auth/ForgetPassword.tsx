import LeftSide from './LeftSide';
import RightSide from './RightSide';

export default function ForgetPassword() {

    return (
        <>
            <section className=" bg-gray-50 flex gap-5 h-screen p-5">
                <LeftSide />
                <RightSide />
            </section>
        </>
    )
}