"use client";

import { BookTypes } from "@/types/books";
import { createContext, useContext, useState, ReactNode, } from "react";

type BookContextType = { 
    readBooks: BookTypes[]; 
    wishlist: BookTypes[]; 

    addToReadBooks: (book: BookTypes) => boolean; 
    addToWishlist: (book: BookTypes) => boolean;
};

const BooksContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState<BookTypes[]>([]);
    const [wishlist, setWishlist] = useState<BookTypes[]>([]);

    // add book to read list
    const addToReadBooks = (book: BookTypes): boolean => {
        const alreadyExists =
            readBooks.some((item) => item.bookId === book.bookId) ||
            wishlist.some((item) => item.bookId === book.bookId);

        if (alreadyExists) {
            return false;
        }

        setReadBooks((prev) => [...prev, book]);
        return true;
    };

    // add book to wishlist 
    const addToWishlist = (book: BookTypes): boolean => {
        const alreadyExists =
            readBooks.some((item) => item.bookId === book.bookId) ||
            wishlist.some((item) => item.bookId === book.bookId);

        if (alreadyExists) {
            return false;
        }

        setWishlist((prev) => [...prev, book]);
        return true;
    };

    return (
        <BooksContext.Provider
            value={{
                readBooks,
                wishlist,
                addToReadBooks,
                addToWishlist
            }}
        >
            {children}
        </BooksContext.Provider>
    );
};

export const useBooks = () => {
    const context = useContext(BooksContext);

    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }

    return context;
};