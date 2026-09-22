'use client'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='py-4 border-b border-gray-300 shadow'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold'>Book Vibe</h1>
                    {/** menu links */}
                    <ul className='flex gap-10 text-gray-600'>
                        <li>
                            <Link href={"/"} className='px-5 py-2 border border-lime-500 rounded text-lime-500 font-normal'>Home</Link>
                        </li>
                        <li>
                            <Link href={"/listed-books"}>Listed Books</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Pages to Read</Link>
                        </li>
                    </ul>
                    {/** auth btns */}
                    <div className='flex gap-4'>
                        <button className='px-4 py-2 bg-lime-500 rounded text-white font-normal'>Sign In</button>
                        <button className='px-4 py-2 bg-sky-400 rounded text-white font-normal'>Sign Up</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar