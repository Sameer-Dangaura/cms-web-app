import { FormLabel } from "../ui/form/Lable"
import { TextInput } from "../ui/form/Input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod/src/index.js"
import { type IUsername } from "./Auth.contract"
import { ForgetSchema } from "./Auth.contract"
import { Button } from "../ui/button/Button"

export default function ForgetForm() {

    const { control, handleSubmit, formState: { errors } } = useForm<IUsername>({
        defaultValues: {
            username: ""
        },
        resolver: zodResolver(ForgetSchema)
    })

    const forgetPasswordHandler = async (credential: IUsername) => {
        try {
            console.log(credential);
        } catch (error) {
            console.error(error);

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(forgetPasswordHandler)} action="" className="flex flex-col gap-5">
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

                <div className="flex gap-5 w-full ">

                    <Button type="submit" className="w-full bg-green-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-green-600 hover:scale-98">Submit</Button>

                </div>
            </form>
        </>
    )
}