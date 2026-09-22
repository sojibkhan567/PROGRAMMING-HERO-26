"use client";
import { useBooks } from "@/context/BookContext";
import { BookTypes } from "@/types/books";
import { toast } from "react-toastify";

interface ReadWishlistBtnProps {
    book: BookTypes
}

const ReadWishlistBtn = ({ book }: ReadWishlistBtnProps) => {

    const { addToReadBooks, addToWishlist } = useBooks();

    // add to read list
    const handleReadBook = () => {
        const success = addToReadBooks(book);

        if (success) {
            toast.success("Book added to Read Books!");
        } else {
            toast.error("This book is already in Read Books or Wishlist!");
        }
    };

    const handleWishlist = () => {
        const success = addToWishlist(book);

        if (success) {
            toast.success("Book added to Wishlist!");
        } else {
            toast.error("This book is already in Read Books or Wishlist!");
        }
    };

    return (
        <div className="flex gap-6">
            <button onClick={handleReadBook} className="px-6 py-2 border border-gray-300 font-medium">Read</button>
            <button onClick={handleWishlist} className="px-5 py-2 bg-lime-500 font-medium">Wishlist</button>
        </div>
    )
}

export default ReadWishlistBtn