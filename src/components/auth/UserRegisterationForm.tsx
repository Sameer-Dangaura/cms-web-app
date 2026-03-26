import { type BaseSyntheticEvent, useState } from "react"
// import type { ICredential } from "./Auth.contract"
import { FormLabel } from "../../components/ui/form/Lable"
import { FileInput, SelectOptionInput, TextAreaInput, TextInput } from "../ui/form/Input"
import { LoginSchema } from "./Auth.contract"
import { Button } from "../ui/button/Button"


export default function LoginForm() {

    const [data, setdata] = useState({
        name: "",
        email: "",
        role: "",
        address: "",
        phone: "",
        image: "",
        options: []
    })

    // console.log(data) 


    // We will handle the login logic in the login function which will be called when the form is submitted:
    const login = async (e: BaseSyntheticEvent) => {
        try {
            e.preventDefault() // we are preventing the default behavior of the form submission which is to refresh the page. 

            // console.log(credentials) 

            //-> Validate:
            await LoginSchema.parseAsync(data)
        } catch (error) {
            console.log(error)
        }
    }


    const handleChange = (e: BaseSyntheticEvent) => {
        // console.log(e.target.value) 

        const { name, value } = e.target

        setdata((prev) => ({ ...prev, [name]: value }))
    }


    const handleFileChange = (name: string, file: File | Array<File>) => {

        setdata((prev) => ({ ...prev, [name]: file }))
    }


    return (
        <>
            <form onSubmit={login} action="" className="flex flex-col gap-5">
                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="name">Full Name:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <TextInput
                            handleChange={handleChange}
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
                            handleChange={handleChange}
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
                            options={[
                                { label: "Admin User", value: "admin" },
                                { label: "User", value: "user" }
                            ]}
                            handleChange={handleChange}
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
                            options={[
                                { label: "Male", value: "male" },
                                { label: "Female", value: "female" },
                                { label: "Other", value: "other" }
                            ]}
                            handleChange={handleChange}
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
                            handleChange={handleChange}
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
                            handleChange={handleChange}
                            name="address"
                            className="border w-full border-grey-400 shadow bg-white rounded-md p-2"
                        />
                    </div>
                </div>

                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="image">Image:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <FileInput
                            handleChange={handleFileChange}
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