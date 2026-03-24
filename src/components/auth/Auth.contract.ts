import z from "zod";

export interface ICredential {
    username: string;
    password: string;
}

// This is the schema for the credential object that we will use to validate the credential object before sending it to the server for authentication:
export const LoginSchema = z.object({
    username: z.email("Incorrect email format").nonempty().nonoptional(),
    password: z.string().nonempty().nonoptional()
})   // we are using zod to validate the credential object. zod is a TypeScript-first schema declaration and validation library. it is used to define the shape of the data and validate it against the defined schema. in this case, we are defining a schema for the credential object which has two properties, username and password, both of which are of type string and are required. we can use this schema to validate the credential object before sending it to the server for authentication.

// `z.email().nonempty().nonoptional()` is a chain of validation methods that we are using to validate the username property of the credential object. z.email() is a method that validates that the value is a valid email address. nonempty() is a method that validates that the value is not an empty string. nonoptional() is a method that validates that the value is not undefined. we are using this chain of validation methods to ensure that the username property of the credential object is a valid email address and is not empty or undefined before sending it to the server for authentication.

// `z.string().min(8).max(25)` is a chain of validation methods that we are using to validate the password property of the credential object. z.string() is a method that validates that the value is a string. min(8) is a method that validates that the value has a minimum length of 8 characters. max(25) is a method that validates that the value has a maximum length of 25 characters. we are using this chain of validation methods to ensure that the password property of the credential object is a string and has a length between 8 and 25 characters before sending it to the server for authentication.