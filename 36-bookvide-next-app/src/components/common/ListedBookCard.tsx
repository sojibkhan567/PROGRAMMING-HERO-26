import { BookTypes } from '@/types/books'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegFileAlt } from 'react-icons/fa'
import { FaRegCalendar, FaRegUser } from 'react-icons/fa6'

const ListedBookCard = ({ book }: { book: BookTypes }) => {
    return (
        <div className='border border-gray-400 p-6 rounded-xl'>
            <div className='flex gap-9'>
                <div className='w-1/4 bg-gray-200 rounded-2xl flex items-center justify-center'>
                    <Image src={book.image} width={120} height={200} alt={book.image} />
                </div>
                <div className='w-full space-y-4'>
                    <h1 className='text-2xl font-bold'>{book.bookName}</h1>
                    <p className='text-gray-600 font-medium'>By: {book.author}</p>
                    <div className="flex gap-4 items-center">
                        <p className="text-black font-bold">Tag:</p>
                        {book.tags.map((tag: string, index: number) => (
                          <button key={index} className="py-1 px-3 rounded-2xl bg-gray-200 text-lime-500 font-bold">#{tag}</button>
                      ))}
                    </div>

                    <div className='text-gray-500 flex gap-6 items-center border-b border-gray-300 pb-3'>
                        <div className='flex gap-2 items-center'>
                            <FaRegUser />
                            <p>Publisher: {book.publisher}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaRegFileAlt />
                            <p>Page: {book.totalPages}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaRegCalendar />
                            <p>Year of Publishing: {book.yearOfPublishing}</p>
                        </div>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <p className='bg-blue-100 font-medium px-6 py-2 rounded-full text-blue-600'>Category: {book.category}</p>
                        <p className='bg-amber-100 font-medium px-6 py-2 rounded-full text-amber-600'>Rating: {book.rating}</p>
                        <Link href={`/books/${book.bookId}`}>
                            <button className='bg-lime-600 px-6 py-2 rounded-full text-white'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListedBookCard