"use client"
import { useMemo, useState } from 'react';
import ReadBooksList from './ReadBooksList';
import WishlistBooksList from './WishlistBooksList';
import { useBooks } from '@/context/BookContext';

type SortType = "rating" | "pages" | "year";

const TabSection = () => {
  const [status, setStatus] = useState<"read" | "wishlist">("read");
  const [sortBy, setSortBy] = useState<SortType | "">("");

  const { readBooks, wishlist } = useBooks();

  // Get currently selected books
  const currentBooks = status === "read" ? readBooks : wishlist;

  // Sort books
  const sortedBooks = useMemo(() => {
    const books = [...currentBooks];

    if (sortBy === "rating") {
      return books.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "pages") {
      return books.sort((a, b) => b.totalPages - a.totalPages);
    }

    if (sortBy === "year") {
      return books.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    }

    return books;
  }, [currentBooks, sortBy]);

  return (
    <>
      <div className='flex justify-between border border-gray-300 rounded mt-15'>
        {/** tab selection btn */}
        <div>
          <button onClick={() => setStatus("read")} className={`border-r border-gray-300 px-4 py-2 ${status === "read" ? "bg-lime-600" : ""}`}>Read Books</button>
          <button onClick={() => setStatus("wishlist")} className={`border-r border-gray-300 px-4 py-2 ${status === "wishlist" ? "bg-lime-600" : ""}`}>Wishlist Books</button>
        </div>

        {/* sort by books btn */}
        <div className='border-l border-gray-300 px-4 py-2'>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as SortType | "")
            } className="border-none focus:outline-none bg-white rounded-md">
            <option disabled={true}>Sort by</option>
            <option value={"rating"}>Rating</option>
            <option value={"pages"}>Number of Pages</option>
            <option value={"year"}>Published Year</option>
          </select>
        </div>
      </div>
      
      {/** Reading & wishlist books */}
      <div>
        {status === "read" ? (
          <ReadBooksList books={sortedBooks} />
        ) : (
            <WishlistBooksList books={sortedBooks} />
        )
        }
      </div>
    </>
  )
}

export default TabSection