// import type { ICredential } from "./Auth.contract"
import { FormLabel } from "../../components/ui/form/Lable"
import { FileInput, SelectOptionInput, TextAreaInput, TextInput } from "../ui/form/Input"
import { Button } from "../ui/button/Button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema, type IRegisterationCredential } from "./Auth.contract"


export default function LoginForm() {

    const { control, handleSubmit, formState: { errors } } = useForm<IRegisterationCredential>({
        defaultValues: {
            name: "",
            email: "",
            role: "",
            gender: "",
            address: "",
            phone: "",
            // image: undefined,    // remove image in defaultValues because we are using z.any() in the RegisterSchema to allow any type of value for the image property and then using the refine method to validate that the value is an instance of the File object. if we set the default value of the image property to undefined, it will fail the validation because undefined is not an instance of the File object. by removing the image property from the defaultValues object, we can ensure that we are not setting a default value for the image property and we can still validate that the image property is a valid file object before sending it to the server for registration.
        },
        resolver: zodResolver(RegisterSchema)
    })


    const Register = async (credentials: IRegisterationCredential) => {
        try {
            // e.preventDefault() // we are preventing the default behavior of the form submission which is to refresh the page. 

            console.log(credentials) // we are logging the credentials object to the console to check if we are getting the correct values from the form. we can remove this line after we have confirmed that we are getting the correct values from the form.

            // we can send the credentials object to the server for authentication using the fetch API or any other library like axios. we can also use the credentials object to update the state of the application and show the user that they have successfully logged in. we can also use the credentials object to store the user's information in the local storage or in a cookie for future use.

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(Register)} action="" className="flex flex-col gap-5">
                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="name">Full Name:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <TextInput
                            control={control}
                            errMsg={errors?.name?.message}
                            type="text"
                            name="name"
                            className="border w-full border-grey-400 shadow bg-white rounded-md p-2"
                        />
                    </div>
                </div>

                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="email">Email(Username):</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <TextInput
                            control={control}
                            errMsg={errors?.email?.message}
                            type="email"
                            name="email"
                            className="border w-full border-grey-400 shadow bg-white rounded-md p-2"
                        />
                    </div>
                </div>

                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="role">User Role:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <SelectOptionInput
                            control={control}
                            errMsg={errors?.role?.message}
                            options={[
                                { label: "Admin User", value: "admin" },
                                { label: "User", value: "user" }
                            ]}
                            name="role"
                            className="border w-full border-grey-400 shadow bg-white rounded-md p-2"
                        >

                        </SelectOptionInput>
                    </div>
                </div>

                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="gender">Gender:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <SelectOptionInput
                            control={control}
                            errMsg={errors?.gender?.message}
                            options={[
                                { label: "Male", value: "male" },
                                { label: "Female", value: "female" },
                                { label: "Other", value: "other" }
                            ]}
                            name="gender"
                            className="border w-full border-grey-400 shadow bg-white rounded-md p-2"
                        >

                        </SelectOptionInput>
                    </div>
                </div>

                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="phone">Phone:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <TextInput
                            control={control}
                            errMsg={errors?.phone?.message}
                            type="tel"
                            name="phone"
                            className="border w-full border-grey-400 shadow bg-white rounded-md p-2"
                        />
                    </div>
                </div>

                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="address">Address:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <TextAreaInput
                            control={control}
                            errMsg={errors?.address?.message}
                            name="address"
                            className="border w-full border-grey-400 shadow bg-white rounded-md p-2"
                        />
                    </div>
                </div>

                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="image">Image:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <FileInput
                            control={control}
                            errMsg={errors?.image?.message}
                            name="image"
                            className="border w-full border-grey-400 shadow bg-white rounded-md p-2"
                        />
                    </div>
                </div>

                <div className="flex w-full justify-end">
                    <div className="w-2/3 flex gap-3">
                        <Button type="reset" className="w-full bg-red-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-red-600 hover:scale-98">Reset</Button>
                        <Button type="submit" className="w-full bg-green-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-green-600 hover:scale-98">Register</Button>
                    </div>
                </div>
            </form>
        </>
    )
}



/*
<SelectOptionInput> </SelectOptionInput> is a custom select input component that we have created in the Input.tsx file. it is a wrapper around the native select element that provides a consistent interface for handling select inputs in our application. it takes the same props as the TextInput component and it also takes an additional prop called options which is an array of options that we want to display in the select input. in this case, we are passing the handleChange function as a prop to the SelectOptionInput component which will be called when the value of the select input changes. it is a common practice to handle the change event of the select input element in the parent component and pass the handleChange function as a prop to the child component. this way we can manage the state of the select input element in the parent component and update it when the value of the select input changes. in this case, we are logging the event object to the console when the value of the select input changes.
*/