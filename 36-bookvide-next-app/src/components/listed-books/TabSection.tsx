"use client"
import { useState } from 'react';
import ReadBooksList from './ReadBooksList';
import WishlistBooksList from './WishlistBooksList';

const TabSection = () => {
  const [status, setStatus] = useState<"read" | "wishlist">("read");

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
          <select className="border-none focus:outline-none bg-white rounded-md">
            <option disabled={true}>Sort by</option>
            <option value={"rating"}>Rating</option>
            <option value={"pages"}>Number of Pages</option>
            <option value={"year"}>Published Year</option>
          </select>
        </div>
      </div>
      <div>
        {status === "read" ? (
          <ReadBooksList />
        ) : (
          <WishlistBooksList />
        )
        }
      </div>
    </>
  )
}

export default TabSection