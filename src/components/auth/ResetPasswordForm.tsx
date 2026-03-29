import { FormLabel } from '../ui/form/Lable';
import { TextInput } from '../ui/form/Input';
import { useForm } from 'react-hook-form';
import { ResetSchema, type IResetCredential } from './Auth.contract';
import { zodResolver } from '@hookform/resolvers/zod/src/index.js';
import { Button } from '../ui/button/Button';


export default function ResetPasswordForm() {

    const { control, handleSubmit, formState: { errors } } = useForm<IResetCredential>({
        defaultValues: {
            password: "",
            confirmPassword: ""
        },
        resolver: zodResolver(ResetSchema)
    })

    // console.log(errors);    // we are logging the errors object to the console to check if we are getting the correct error messages from the validation. we can remove this line after we have confirmed that we are getting the correct error messages from the validation.

    const resetPasswordHandler = async (credentials: IResetCredential) => {
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
                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="confirmPassword">Confirm Password:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <TextInput
                            control={control}
                            errMsg={errors?.confirmPassword?.message}
                            type="password"
                            name="confirmPassword"
                            className="border w-full border-grey-400 shadow bg-white rounded-md p-2" />
                    </div>
                </div>
                <div className="flex gap-5 w-full ">
                    <Button type="reset" className="w-full bg-red-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-red-600 hover:scale-98">Reset</Button>
                    <Button type="submit" className="w-full bg-green-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-green-600 hover:scale-98">Submit</Button>
                </div>
            </form>
        </>
    )
}