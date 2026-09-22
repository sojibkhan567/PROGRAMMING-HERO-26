
import { BookTypes } from '@/types/books';
import BookCard from '../common/BookCard';

type ReadBooksListProps = {
    books: BookTypes[];
};

const ReadBooksList = ({ books }: ReadBooksListProps) => {
    return (
        <div>
            {books.length === 0 ? (
                <div className="h-100 flex flex-col items-center justify-center">
                    <h1 className='text-5xl text-center text-gray-600 mt-4'>No books in Read list.</h1>
                </div>

            ) : (
                books.map((book) => (
                    <BookCard key={book.bookId} book={book} />
                ))
            )}
        </div>
    )
}

export default ReadBooksList