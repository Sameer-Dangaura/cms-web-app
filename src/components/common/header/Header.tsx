
import Navbar from './../navbar/Navbar';
import Logo from './../../logo/Logo';

export default function Header() {
    return (
        <div className='bg-blue-100 text-white'>
            <header>
                <div className='flex justify-between items-center p-3'>
                    <div className='flex items-center hover:cursor-pointer gap-2'>
                        <div>
                            <Logo className='w-10 h-10 rounded-full object-cover hover:cursor-pointer' />
                        </div>
                        <div className='text-2xl text-blue-900 font-bold'>
                            <span>OneLine Shop</span>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Navbar />
                    </div>
                </div>
            </header>
        </div>
    )
}

/*
- use `w-10 h-10` or `size-10` both are similar, but `size-10` is a custom class that we have defined in our CSS file, which sets both width and height to 10 units. On the other hand, `w-10 h-10` is a combination of two Tailwind CSS classes that set the width and height separately to 10 units each. In this case, using `size-10` would be more concise and easier to read, as it combines both properties into a single class.
*/