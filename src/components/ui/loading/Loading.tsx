import { LiaSpinnerSolid } from "react-icons/lia";

export default function Loading() {
    return (
        <LiaSpinnerSolid className="size-15 text-blue-300 animate-spin" style={{ animationDuration: "1.5s" }} />
    )
}

// `style` is a prop in React that allows us to apply inline styles to a component. It takes an object where the keys are CSS property names in camelCase and the values are the corresponding CSS values. In this case, we are using the `style` prop to set the `animationDuration` property of the `LiaSpinnerSolid` component to "1.5s", which means that the spinner will complete one full rotation every one and a half seconds. This allows us to control the speed of the spinner animation directly from our React component, providing a simple way to customize the appearance and behavior of our loading indicator. By using inline styles with the `style` prop, we can easily apply dynamic styles based on component state or props, making our components more flexible and responsive to user interactions.