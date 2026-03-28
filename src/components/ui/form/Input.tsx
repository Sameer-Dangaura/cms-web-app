// import type React from "react"
import type { BaseSyntheticEvent } from "react"
import type { IFileInputProps, ISelectOptionInputProps, ISingleOption, ITextAreaProps, ITextInputProps } from "./Form.contract"
import { Controller, useController, type FieldValues } from "react-hook-form"

export const TextInput = <T extends FieldValues>({ type = "text", name, className, errMsg = "", control }: Readonly<ITextInputProps<T>>) => {
    return (
        <>
            {/* // To bind the value of the input element to the state of the form, we have two use cases:  */}
            {/* // i) By using component => uses controller or,  */}
            {/* // ii) By using hook => uses hooks. */}

            <Controller // Controller is a component provided by react-hook-form that allows us to bind the value of the input element to the state of the form and also handle the onChange event of the input element. it is used to manage the state of the input element in react-hook-form and it is passed to the TextInput component as a prop. we can use the control prop to register the input element with react-hook-form and manage its state accordingly. in summary, Controller is a component provided by react-hook-form that allows us to bind the value of the input element to the state of the form and also handle the onChange event of the input element.
                name={name}
                control={control}   // we are passing the control prop to the Controller component in order to manage the state of the input element in react-hook-form. the control prop is used to register the input element with react-hook-form and manage its state accordingly. it is important to note that the control prop is passed to the TextInput component as a prop and it is used to manage the state of the input element in react-hook-form. we can use the control prop to register the input element with react-hook-form and manage its state accordingly. in summary, we are passing the control prop to the Controller component in order to manage the state of the input element in react-hook-form.

                // defaultValue={""} // defaultValue is used to set the initial value of the input element. it is important to note that when we use the Controller component from react-hook-form, we need to set the defaultValue prop to an empty string or any other initial value that we want to set for the input element. this is because the Controller component will not work properly if the defaultValue prop is not set. it will throw an error saying "A component is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component." in summary, we need to set the defaultValue prop to an empty string or any other initial value that we want to set for the input element when we use the Controller component from react-hook-form in order to avoid errors and ensure that the input element works properly. Now, not needed as we are using the control prop to manage the state of the input element in react-hook-form and it will handle the default value for us.

                // render={ callback function}
                render={({ field }) => {    // render prop is a function that takes an object as an argument and returns a React element. the object contains the field property which is an object that contains the value and onChange properties that are used to manage the state of the input element in react-hook-form. by using the render prop, we can bind the value of the input element to the state of the form and also handle the onChange event of the input element. this way we can ensure that the value of the input element is always in sync with the state of the form and that any changes to the input element are properly handled by react-hook-form.
                    return (
                        <>
                            <input
                                type={type}
                                {...field}  // we are using the spread operator to spread the properties of the field object into the input element. this way we can bind the value of the input element to the state of the form and also handle the onChange event of the input element. the field object contains the value and onChange properties that are used to manage the state of the input element in react-hook-form. by spreading the field object into the input element, we can ensure that the value of the input element is always in sync with the state of the form and that any changes to the input element are properly handled by react-hook-form. we spreded it because it get handled by the Controller component and it will handle the value and onChange properties of the input element for us, so we do not need to set them manually. Such as, we do not need to set the value and onChange properties of the input element manually because we are using the Controller component from react-hook-form to manage the state of the input element in react-hook-form and it will handle the value and onChange properties for us.
                                className={`border w-full border-grey-400 shadow bg-white rounded-md p-2 ${className}`}
                                placeholder={`Enter your ${name}`}
                            />
                            <span className="text-red-700 text-sm"> {errMsg} </span>
                        </>
                    )
                }}
            >
            </Controller>

        </>
    )
}

export const FileInput = <T extends FieldValues>({ name, className, errMsg = "", control }: Readonly<IFileInputProps<T>>) => {
    // Here, we are using the useController hook from react-hook-form to manage the state of the file input element in react-hook-form instead of using the Controller component. the useController hook is a function that takes an object as an argument and returns an object that contains the field property which is an object that contains the value and onChange properties that are used to manage the state of the input element in react-hook-form. by using the useController hook, we can bind the value of the input element to the state of the form and also handle the onChange event of the input element. this way we can ensure that the value of the input element is always in sync with the state of the form and that any changes to the input element are properly handled by react-hook-form. in summary, we are using the useController hook from react-hook-form to manage the state of the file input element in react-hook-form instead of using the Controller component.
    const { field } = useController({
        name: name,
        control: control,
    })
    return (
        <>
            <input
                type={`file`} // do always set the type of the input element to `file` when you want to create a file input element.
                className={`border w-full border-grey-400 shadow bg-white rounded-md p-2 ${className}`}
                placeholder={`Enter your ${name}`}
                onChange={(e: BaseSyntheticEvent) => {
                    // e.target.value is not used for file inputs because it only returns the file name and not the file itself. to get the file object, we need to use e.target.files which is an array-like object that contains the list of files that the user has selected. we can use this property to get the file name, file size, file type, etc. of the selected file.

                    const files = Object.values(e.target.files); // we are using Object.values to convert the files object into an array of file objects. this way we can easily iterate over the files using the for loop or forEach method if the user has selected multiple files. it is important to note that e.target.files is an array-like object and not an actual array, so we need to use Object.values to convert it into an array. It stores the list of files like an array, but it is not an actual array. it has a length property and we can access the files using the index (e.g., files[0], files[1], etc.). we can also use the for loop or forEach method to iterate over the files if the user has selected multiple files. It stores like as: [File1, File2, File3, ...] where each File is an object that contains the file name, file size, file type, etc. of the selected file.

                    field.onChange(files[0]); // we are using the onChange property of the field object instead of handleChange to update the state of the form in react-hook-form with the list of files that the user has selected. the onChange property is a function that takes the value of the input element as an argument and updates the state of the form accordingly. in this case, we are passing the array of file objects to the onChange function to update the state of the form with the list of files that the user has selected. it is important to note that we need to pass the array of file objects to the onChange function in order to update the state of the form correctly and ensure that we have access to all the properties of each file object (e.g., file name, file size, file type, etc.) in our form data. in summary, we are using the onChange property of the field object to update the state of the form in react-hook-form with the list of files that the user has selected by passing the array of file objects to the onChange function.                         files[0] is used to get the first file object from the array of file objects because the user can select multiple files but we are only interested in the first file that the user has selected. if we want to allow the user to select multiple files and handle them accordingly, we can pass the entire array of file objects to the onChange function instead of just the first file object. in summary, we are using files[0] to get the first file object from the array of file objects because we are only interested in the first file that the user has selected, but if we want to allow the user to select multiple files and handle them accordingly, we can pass the entire array of file objects to the onChange function instead of just the first file object.

                    // console.log(files); // we are logging the files object to the console to see the list of files that the user has selected. it will be an array-like object that contains the list of files that the user has selected. we can use this property to get the file name, file size, file type, etc. of the selected file.

                }}
            />
            <span className="text-red-700 text-sm"> {errMsg} </span>
        </>
    )
}

export const TextAreaInput = <T extends FieldValues>({ name, className, errMsg = "", control }: Readonly<ITextAreaProps<T>>) => {
    return (
        <>
            <Controller
                name={name} // we are passing the name prop to the Controller component in order to manage the state of the textarea element in react-hook-form. the name prop is used to identify the input element in the form and it is passed to the Controller component as a prop. we can use the name prop to register the input element with react-hook-form and manage its state accordingly. it is important to note that the name prop is used to identify the input element in the form and it is passed to the Controller component as a prop. we can use the name prop to register the input element with react-hook-form and manage its state accordingly. in summary, we are passing the name prop to the Controller component in order to manage the state of the textarea element in react-hook-form and it will handle it for us.
                control={control}
                render={({ field }) => {
                    return (
                        <>
                            <textarea
                                // name={name}  // Now, not needed to set the name attribute of the textarea element because we are using the Controller component from react-hook-form to manage the state of the textarea element in react-hook-form. the Controller component will handle the name attribute of the textarea element and update the state of the form accordingly. it is important to note that when we use the Controller component from react-hook-form, we do not need to set the name attribute of the input element because the Controller component will handle it for us. in summary, we do not need to set the name attribute of the textarea element because we are using the Controller component from react-hook-form to manage the state of the textarea element in react-hook-form and it will handle the name attribute for us.

                                {...field}  // we are using the spread operator to spread the properties of the field object into the textarea element. this way we can bind the value of the textarea element to the state of the form and also handle the onChange event of the textarea element. the field object contains the value and onChange properties that are used to manage the state of the textarea element in react-hook-form. by spreading the field object into the textarea element, we can ensure that the value of the textarea element is always in sync with the state of the form and that any changes to the textarea element are properly handled by react-hook-form. It handles the value and onChange properties of the textarea element for us, so we do not need to set them manually.

                                rows={5}
                                className={`resize-none border w-full border-grey-400 shadow bg-white rounded-md p-2 ${className}`}
                                placeholder={`Enter your ${name}`}

                            // onChange={handleChange}  // Now, not needed to bind the onChange event of the textarea element to the handleChange function because we are using the Controller component from react-hook-form to manage the state of the textarea element in react-hook-form. the Controller component will handle the onChange event of the textarea element and update the state of the form accordingly. it is important to note that when we use the Controller component from react-hook-form, we do not need to bind the onChange event of the input element to a separate function because the Controller component will handle it for us. in summary, we do not need to bind the onChange event of the textarea element to a separate function because we are using the Controller component from react-hook-form to manage the state of the textarea element in react-hook-form and it will handle the onChange event for us.
                            >

                            </textarea>
                            <span className="text-red-700 text-sm"> {errMsg} </span>
                        </>
                    )
                }}
            />
        </>
    )
}


export const SelectOptionInput = <T extends FieldValues>({ name, className, control, options }: Readonly<ISelectOptionInputProps<T>>) => {
    const { field } = useController({   // here, render method is not used because we are using the useController hook from react-hook-form to manage the state of the select element in react-hook-form instead of using the Controller component. the useController hook is a function that takes an object as an argument and returns an object that contains the field property which is an object that contains the value and onChange properties that are used to manage the state of the input element in react-hook-form. by using the useController hook, we can bind the value of the input element to the state of the form and also handle the onChange event of the input element. this way we can ensure that the value of the input element is always in sync with the state of the form and that any changes to the input element are properly handled by react-hook-form. in summary, we are using the useController hook from react-hook-form to manage the state of the select element in react-hook-form instead of using the Controller component.
        name: name,
        control: control,
    })
    return (
        <>
            <select id={name} className={`${className}`} {...field}>
                <option value="">-- Select an option --</option>
                {
                    options && options.map((option: ISingleOption, i: number) => (
                        <option key={i} value={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select>


        </>
    )
}   // Here, we removed 


/*
**Above Key Parts Explained**

1. `<select>` Tag
- The HTML select element that creates a dropdown menu.

2. Attributes
- `name={name}` — The name of the form field (passed as a prop)
- `id={name}` — Unique identifier, same as name (helps link with labels)
- `className={${className}}` — CSS class for styling (passed as a prop)
- `onChange={handleChange}` — Function called whenever user selects a different option

3. Default Option
```jsx
<option value="">-- Select an option --</option>
```
- A placeholder option that appears first. Has an empty value, so selecting it means "nothing selected."

4. Dynamic Options (The Loop)
```jsx
{
    options && options.map((option: ISingleOption, i: number) => (
        <option key={i} value={option.value}>
            {option.label}
        </option>
    ))
}
```
This is where React magic happens:

- `options &&` — Only runs the map if options exists (safety check)
- `.map()` — Loops through each option in the options array
- `option: ISingleOption` — Each item is typed as ISingleOption (TypeScript type)
- `i: number` — The loop index (0, 1, 2, etc.)
- `key={i}` — React's way of tracking list items (not ideal; should use unique IDs)
- `value={option.value}` — What gets sent when this option is selected
- `{option.label}` — What the user sees in the dropdown

5. Closing Tags
</select> — Closes the select element
*/

/*
() => {
  code here
  return value;
}

can be simplified to:

() => (
  code/JSX here
  implicit return
)

*/


/*
const files = e.target.files; 

- we can access the files property of the event target to get the list of files that the user has selected. it is an array-like object that contains the list of files that the user has selected. we can use this property to get the file name, file size, file type, etc. of the selected file. It stores the list of files like an array, but it is not an actual array. it has a length property and we can access the files using the index (e.g., files[0], files[1], etc.). we can also use the for loop or forEach method to iterate over the files if the user has selected multiple files. It stores like as: [File1, File2, File3, ...] where each File is an object that contains the file name, file size, file type, etc. of the selected file.
*/