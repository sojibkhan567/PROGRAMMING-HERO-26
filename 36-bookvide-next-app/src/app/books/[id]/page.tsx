import { BookTypes } from "@/types/books";
import Image from "next/image";
import Img from "@/assets/book-img.png"
import ReadWishlistBtn from "@/components/common/ReadWishlistBtn";

interface BookDetailsProps {
    params: Promise<{id:string}>
}

// fetch all books data
const getBooks = async () => {
    const response = await fetch("http://localhost:3000/booksData.json");
    const data = await response.json();
    return data;
}

const BookDetailsPage = async ({ params }: BookDetailsProps) => {
    const { id } = await params;

    const booksData = await getBooks();

    const book:BookTypes = booksData.find((book: BookTypes) => String(book.bookId) === String(id));
    //console.log(book)

    return (
        <section className="pb-20 pt-20">
            <div className="w-full lg:flex gap-10">
                <div className="lg:w-1/2 bg-gray-200 rounded-2xl py-25 flex justify-center items-center">
                    <div className="">
                        <Image src={Img} alt="image" width={318} height={394}/>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">{book.bookName}</h1>
                    <p className="text-xl font-medium text-gray-700 pb-4 border-b border-gray-300">By: {book.author}</p>
                    <p className="font-medium text-gray-700 py-3 border-b border-gray-300">{book.category}</p>
                    <p className="text-gray-600 py-6 leading-7"><span className="text-black font-bold">Review:</span> {book.review}</p>
                    
                    <div className="flex gap-4 items-center pb-6 border-b border-gray-300">
                        <p className="text-black font-bold">Tag:</p>
                        {book.tags.map((tag:string, index:number) => (
                            <button key={index} className="py-1 px-3 rounded-2xl bg-gray-200 text-lime-500 font-bold">#{tag}</button>
                        ))}
                    </div>

                    <div className="flex gap-20 py-8">
                        <div className="text-gray-500 font-medium leading-8">
                            <p>Number of Pages:</p>
                            <p>Publisher: </p>
                            <p>Year of Publishing: </p>
                            <p>Rating: </p>
                        </div>
                        <div className="text-black font-medium leading-8">
                            <p>{book.totalPages}</p>
                            <p>{book.publisher}</p>
                            <p>{book.yearOfPublishing}</p>
                            <p>{book.rating}</p>
                        </div>
                    </div>
                    
                    {/** read & wishlist btn */}
                    <ReadWishlistBtn book={book}/>
                    
                </div>
            </div>
        </section>
    )
}

export default BookDetailsPage