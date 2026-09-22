import { useBooks } from '@/context/BookContext'

const ReadBooksList = () => {
    const { readBooks } = useBooks();
    return (
        <div>
            <h2>Reads Books: {readBooks.length}</h2>
        </div>
    )
}

export default ReadBooksList