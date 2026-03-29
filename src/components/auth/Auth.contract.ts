import z from "zod";

export interface IUsername {
    username: string;
}

export interface ICredential extends IUsername {
    password: string;
}

export interface IResetCredential {
    password: string;
    confirmPassword: string;
}

// This is the schema for the credential object that we will use to validate the credential object before sending it to the server for authentication:
export const LoginSchema = z.object({
    username: z.email("Incorrect email format").nonempty().nonoptional(),
    password: z.string().nonempty().nonoptional()
})   // we are using zod to validate the credential object. zod is a TypeScript-first schema declaration and validation library. it is used to define the shape of the data and validate it against the defined schema. in this case, we are defining a schema for the credential object which has two properties, username and password, both of which are of type string and are required. we can use this schema to validate the credential object before sending it to the server for authentication.

// `z.email().nonempty().nonoptional()` is a chain of validation methods that we are using to validate the username property of the credential object. z.email() is a method that validates that the value is a valid email address. nonempty() is a method that validates that the value is not an empty string. nonoptional() is a method that validates that the value is not undefined. we are using this chain of validation methods to ensure that the username property of the credential object is a valid email address and is not empty or undefined before sending it to the server for authentication.

// `z.string().min(8).max(25)` is a chain of validation methods that we are using to validate the password property of the credential object. z.string() is a method that validates that the value is a string. min(8) is a method that validates that the value has a minimum length of 8 characters. max(25) is a method that validates that the value has a maximum length of 25 characters. we are using this chain of validation methods to ensure that the password property of the credential object is a string and has a length between 8 and 25 characters before sending it to the server for authentication.


// Forget password schema:
export const ForgetSchema = z.object({
    username: z.email("Incorrect email format").nonempty().nonoptional()
})

// Reset password schema:
export const ResetSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters long").max(25, "Password must be at most 25 characters long").nonempty("Password is required").nonoptional(),
    confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters long").max(25, "Confirm Password must be at most 25 characters long").nonempty("Confirm Password is required").nonoptional()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // 👈 path tells it: “Show the error under THIS field”
})  // we are using the refine method to validate that the password and confirmPassword properties of the ResetSchema are the same. .refine() is a method that allows us to add custom validation logic to the schema. `data` is the object that we are validating against the schema. `data` takes the shape of the schema through the properties defined in the schema. in this case, `data` has two properties, password and confirmPassword, which are both of type string and are required. we are using the refine method to check if the value of the password property is the same as the value of the confirmPassword property. if they are not the same, we return an error message "Passwords do not match". this way we can ensure that the user has entered the same password in both fields before allowing them to reset their password. refine() syntax is refine((data) => validation logic, { message: "Error message" }) where data is the object being validated and the validation logic is a function that returns true if the validation passes and false if it fails, and { message: "Error message" } is an object that contains the error message to be returned if the validation fails.


export interface IRegisterationCredential {
    name: string;
    email: string;
    role: string;
    gender: string;
    address: string;
    phone: string;
    image: File;    //  File is a built-in browser API type that represents a file object. it is used to define the type of the image property in the IRegisterationCredential interface. we are using this type to ensure that the image property is a file object before sending it to the server for registration. in simple terms, we are defining the type of the image property as a file object to ensure that we are sending a valid file to the server for registration.
}

export const RegisterSchema = z.object({
    name: z.string().min(1, "Name is required"),  // .min(1) instead of .nonempty()
    email: z.email("Incorrect email format").nonempty().nonoptional(),
    role: z.string().min(1, "Role is required"),
    gender: z.string().min(1, "Gender is required"),
    address: z.string().min(1, "Address is required"),
    phone: z.string().min(1, "Phone is required"),
    image: z.any().refine(file => file instanceof File, {
        message: "Image is required",
    })  // we are using z.any() to allow any type of value for the image property and then using the refine method to validate that the value is an instance of the File object. this way we can ensure that the image property is a valid file object before sending it to the server for registration. we are using this approach because zod does not have a built-in method to validate file objects, so we are using z.any() to allow any type of value and then refining it to ensure that it is a valid file object. file instanceof File is a JavaScript expression that checks if the value of the file variable is an instance of the File object. this is used in the refine method to validate that the value of the image property is a valid file object before sending it to the server for registration.
})