
import { H1 } from './../../components/ui/typography/PageTitle';

export default function NotFound() {
    return (
        <>
            <div className='w-full flex items-center justify-center flex-col gap-10 p-10'>
                <H1>404 - Page Not Found</H1>

                <div className='text-8xl'>
                    <span className="font-6xl shadow-amber-100">🤯</span>
                </div>

                <p className='text-xl'>The page you are looking for does not exist.</p>
            </div>
        </>
    )
}

/*
How to control emojis size in React JS?
- You can control the size of emojis in React JS by using CSS styles. You can apply styles directly to the emoji element or wrap it in a container and apply styles to the container. For example, you can use the `font-size` property to increase or decrease the size of the emoji. In the provided code snippet, we have wrapped the emoji in a `div` and applied a class that sets the font size to 4xl, which makes the emoji larger. You can adjust the font size as needed to achieve the desired size for your emojis. Since, emojis are treated as text in HTML, you can use any CSS property that applies to text to style them, including `font-size`, `color`, `text-shadow`, etc.
*/