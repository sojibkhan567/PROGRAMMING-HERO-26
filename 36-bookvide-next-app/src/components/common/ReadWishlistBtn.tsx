"use client";
import { useBooks } from "@/context/BookContext";
import { BookTypes } from "@/types/books";

interface ReadWishlistBtnProps {
    book: BookTypes
}

const ReadWishlistBtn = ({ book }: ReadWishlistBtnProps) => {
    const { readBooks, setReadBooks, wishlist, setWishlist } = useBooks();

    // add to read list
    const addToRead = (book: BookTypes) => {
        setReadBooks([...readBooks, book]);
    }

    // add to wishlist
    const addToWishlist = (book: BookTypes) => {
        setWishlist([...wishlist, book]);
    }

    return (
        <div className="flex gap-6">
            <button onClick={() => addToRead(book)} className="px-6 py-2 border border-gray-300 font-medium">Read</button>
            <button onClick={() => addToWishlist(book)} className="px-5 py-2 bg-lime-500 font-medium">Wishlist</button>
        </div>
    )
}

export default ReadWishlistBtn