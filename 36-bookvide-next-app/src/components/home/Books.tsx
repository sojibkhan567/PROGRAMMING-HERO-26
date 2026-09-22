import React from 'react'
import BookCard from '../common/BookCard'
import { BookTypes } from '@/types/books';

// fetch all books data
const getBooks = async () => {
    const response = await fetch("http://localhost:3000/booksData.json");
    const data = await response.json();
    return data;
}

const Books = async () => {
    const booksData = await getBooks();
    //console.log(booksData)

    return (
        <section className="pt-20 pb-20">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold">Books</h1>
            </div>
            {/** list of books */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {booksData.map((book: BookTypes, index: number) => (
                    <BookCard key={index} book={book}/>
                ))}
            </div>
        </section>
    )
}

export default Books