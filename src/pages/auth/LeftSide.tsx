import { H1 } from "../../components/ui/typography/PageTitle";
import Logo from './../../components/logo/Logo';

export default function LeftSide() {
    return (
        <div className=" w-1/3 bg-blue-900 rounded-md flex items-center justify-center flex-col gap-5 p-5 text-white">
            <Logo />

            <H1>Forget Password</H1>
        </div>
    )
}