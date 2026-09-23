
import { BookTypes } from '@/types/books';
import ListedBookCard from '../common/ListedBookCard';

type ReadBooksListProps = {
    books: BookTypes[];
};

const ReadBooksList = ({ books }: ReadBooksListProps) => {
    return (
        <div className='py-4 grid gap-4'>
            {books.length === 0 ? (
                <div className="h-30 flex flex-col items-center justify-center">
                    <h1 className='text-5xl text-center text-red-600 mt-4'>No books in Read list.</h1>
                </div>

            ) : (
                books.map((book) => (
                    <ListedBookCard key={book.bookId} book={book} />
                ))
            )}
        </div>
    )
}

export default ReadBooksList