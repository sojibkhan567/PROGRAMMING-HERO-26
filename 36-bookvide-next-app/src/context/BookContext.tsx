"use client";

import { BookTypes } from "@/types/books";
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type BookContextType = { 
    readBooks: BookTypes[]; 
    setReadBooks: Dispatch<SetStateAction<BookTypes[]>>; 
    wishlist: BookTypes[]; 
    setWishlist: Dispatch<SetStateAction<BookTypes[]>>; 
};

const BooksContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState<BookTypes[]>([]);
    const [wishlist, setWishlist] = useState<BookTypes[]>([]);

    return (
        <BooksContext.Provider
            value={{
                readBooks,
                setReadBooks,
                wishlist,
                setWishlist
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