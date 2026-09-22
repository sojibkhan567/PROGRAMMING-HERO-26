"use client";
import { FaRegStar } from "react-icons/fa6";
import { BookTypes } from '@/types/books';
import Link from 'next/link';

interface BookProps {
    book: BookTypes
}

const BookCard = ({ book }: BookProps) => {
    return (
        <div className='p-7 border border-gray-300 rounded-2xl'>
            <div className='h-62.5 w-full bg-gray-200 rounded-2xl flex justify-center items-center'>
                <img src={book.image} alt={book.bookName} height={140} width={140} />
            </div>
            <div className='pt-6'>
                <div className='flex gap-3'>
                    {book.tags.map((tag: string, index: number) => (
                        <span key={index} className='bg-gray-200 px-4 text-lime-500 font-semibold py-1 rounded-full'>{tag}</span>
                    ))}
                </div>
                <h2 className='text-2xl py-4'>{book.bookName}</h2>
                <p className='text-md pb-4 border-b border-dashed border-gray-400 font-medium text-gray-600'>By: {book.author}</p>
                <div className='flex justify-between items-center py-5'>
                    <p className='text-gray-500 font-medium'>{book.category}</p>
                    <div className='flex gap-2'>
                        <p className='text-gray-500 font-medium'>{book.rating}</p>
                        <FaRegStar className='text-gray-500 font-medium' size={20} />
                    </div>
                </div>

                <Link href={`/books/${book.bookId}`}>
                    <button className='bg-lime-500 w-full px-6 py-3 rounded-xl text-white'>View Details</button>
                </Link>
            </div>
        </div>
    )
}

export default BookCard