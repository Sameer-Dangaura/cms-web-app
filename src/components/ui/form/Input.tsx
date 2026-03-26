// import type React from "react"
import type { BaseSyntheticEvent } from "react"
import type { IFileInputProps, ISelectOptionInputProps, ISingleOption, ITextAreaProps, ITextInputProps } from "./Form.contract"

export const TextInput = ({ type = "text", name, className, errMsg = "", handleChange }: Readonly<ITextInputProps>) => {
    return (
        <>
            <input
                type={type}
                name={name}
                className={`border w-full border-grey-400 shadow bg-white rounded-md p-2 ${className}`}
                placeholder={`Enter your ${name}`}
                onChange={handleChange} // we are passing the handleChange function as a prop to the TextInput component which will be called when the value of the input changes. it is a common practice to handle the change event of the input element in the parent component and pass the handleChange function as a prop to the child component. this way we can manage the state of the input element in the parent component and update it when the value of the input changes. in this case, we are logging the event object to the console when the value of the input changes.
            />
            <span className="text-red-700 text-sm"> {errMsg} </span>
        </>
    )
}

export const FileInput = ({ name, className, errMsg = "", handleChange }: Readonly<IFileInputProps>) => {
    return (
        <>
            <input
                type={`file`} // do always set the type of the input element to `file` when you want to create a file input element.
                name={name}
                className={`border w-full border-grey-400 shadow bg-white rounded-md p-2 ${className}`}
                placeholder={`Enter your ${name}`}

                // multiple={true} // this attribute allows the user to select multiple files at once. when this attribute is present, the user can select more than one file from the file dialog. it is important to note that when the multiple attribute is present, the value of the input element will be an array of file objects instead of a single file object. we can access the list of files that the user has selected using the e.target.files property in the onChange event handler. it will be an array-like object that contains the list of files that the user has selected. we can use this property to get the file name, file size, file type, etc. of each selected file.

                onChange={(e: BaseSyntheticEvent) => {
                    // e.target.value is not used for file inputs because it only returns the file name and not the file itself. to get the file object, we need to use e.target.files which is an array-like object that contains the list of files that the user has selected. we can use this property to get the file name, file size, file type, etc. of the selected file.

                    const files = Object.values(e.target.files); // we are using Object.values to convert the files object into an array of file objects. this way we can easily iterate over the files using the for loop or forEach method if the user has selected multiple files. it is important to note that e.target.files is an array-like object and not an actual array, so we need to use Object.values to convert it into an array. It stores the list of files like an array, but it is not an actual array. it has a length property and we can access the files using the index (e.g., files[0], files[1], etc.). we can also use the for loop or forEach method to iterate over the files if the user has selected multiple files. It stores like as: [File1, File2, File3, ...] where each File is an object that contains the file name, file size, file type, etc. of the selected file.

                    // console.log(files); // we are logging the files object to the console to see the list of files that the user has selected. it will be an array-like object that contains the list of files that the user has selected. we can use this property to get the file name, file size, file type, etc. of the selected file.

                    handleChange(name, files[0] as File) // we are calling the handleChange function and passing the name of the input element and the list of files that the user has selected as arguments. this way we can manage the state of the file input element in the parent component and update it when the value of the file input changes. in this case, we are logging the event object to the console when the value of the file input changes. we are only passing the first file in the list of files that the user has selected (files[0]) because we are not allowing the user to select multiple files at once. if we want to allow the user to select multiple files, we can pass the entire list of files (files) to the handleChange function and manage it accordingly in the parent component.                                            files[0] as File means single file is being passed to the handleChange function and we are using type assertion to tell TypeScript that files[0] is of type File. this is necessary because e.target.files is an array-like object and not an actual array, so TypeScript cannot infer the type of files[0] without the type assertion. it is important to note that when the multiple attribute is present, the value of the input element will be an array of file objects instead of a single file object. we can access the list of files that the user has selected using the e.target.files property in the onChange event handler. it will be an array-like object that contains the list of files that the user has selected. we can use this property to get the file name, file size, file type, etc. of each selected file.
                }}
            />
            <span className="text-red-700 text-sm"> {errMsg} </span>
        </>
    )
}

export const TextAreaInput = ({ name, className, errMsg = "", handleChange }: Readonly<ITextAreaProps>) => {
    return (
        <>
            <textarea
                name={name}
                rows={5}
                className={`resize-none border w-full border-grey-400 shadow bg-white rounded-md p-2 ${className}`}
                placeholder={`Enter your ${name}`}
                onChange={handleChange}
            >

            </textarea>
            <span className="text-red-700 text-sm"> {errMsg} </span>
        </>
    )
}


export const SelectOptionInput = ({ name, className, handleChange, options }: Readonly<ISelectOptionInputProps>) => {
    return (
        <>
            <select name={name} id={name} className={`${className}`} onChange={handleChange}>
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
}


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