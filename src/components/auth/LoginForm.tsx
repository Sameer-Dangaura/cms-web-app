
import { FormLabel } from './../ui/form/Lable';
import { TextInput } from './../ui/form/Input';
export default function LoginForm() {
    return (
        <>
            <form action="" className="flex flex-col gap-5">
                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <TextInput type="email" name="email" className="border w-full border-grey-400 shadow bg-white rounded-md p-2" />
                    </div>
                </div>
                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="password">Password:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <TextInput type="password" name="password" className="border w-full border-grey-400 shadow bg-white rounded-md p-2" />
                    </div>
                </div>
                <div className="flex w-full justify-end">
                    <a href="/forget-password" className="text-blue-400 size-sm cursor-pointer hover:underline hover:scale-95">Forget Password?</a>
                </div>
                <div className="flex gap-5 w-full ">
                    <button className="w-full bg-red-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-red-600 hover:scale-98">Reset</button>
                    <button className="w-full bg-green-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-green-600 hover:scale-98">Login</button>
                </div>
            </form>
        </>
    )
}


