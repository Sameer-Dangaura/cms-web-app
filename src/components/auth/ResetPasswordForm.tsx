import { FormLabel } from '../ui/form/Lable';
import { TextInput } from '../ui/form/Input';
import { useForm } from 'react-hook-form';
import { LoginSchema, type ICredential } from './Auth.contract';
import { zodResolver } from '@hookform/resolvers/zod/src/index.js';


export default function ResetPasswordForm() {

    const { control, handleSubmit, formState: { errors } } = useForm<ICredential>({
        defaultValues: {
            username: "",
            password: ""
        },
        resolver: zodResolver(LoginSchema)
    })

    const resetPasswordHandler = async (credentials: ICredential) => {
        try {
            console.log(credentials);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(resetPasswordHandler)} action="" className="flex flex-col gap-5">
                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <TextInput
                            control={control}
                            errMsg={errors?.username?.message}
                            type="email"
                            name="username"
                            className="border w-full border-grey-400 shadow bg-white rounded-md p-2" />
                    </div>
                </div>
                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="password">Password:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <TextInput
                            control={control}
                            errMsg={errors?.password?.message}
                            type="password"
                            name="password"
                            className="border w-full border-grey-400 shadow bg-white rounded-md p-2" />
                    </div>
                </div>
                <div className="flex gap-5 w-full ">
                    <button className="w-full bg-red-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-red-600 hover:scale-98">Reset</button>
                    <button className="w-full bg-green-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-green-600 hover:scale-98">Login</button>
                </div>
            </form>
        </>
    )
}