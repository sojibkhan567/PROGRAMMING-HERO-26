import Image from 'next/image'
import Link from 'next/link'
import heroImg from "@/assets/book-img.png";

const Banner = () => {
    return (
        <section className="bg-gray-200 rounded-2xl mt-15">
            <div className="flex justify-between w-full items-center h-full px-40 py-20">
                {/** left side */}
                <div className="w-xl h-full">
                    <h1 className="text-7xl font-medium leading-25 mb-16">Books to fresh up your bookshelf</h1>
                    <Link href={"./book-img.png"} className="text-white font-semibold bg-lime-600 px-6 py-4 rounded-md">View The List</Link>
                </div>
                {/** right side */}
                <div>
                    <Image src={heroImg} alt="hero-image" height={350} />
                </div>
            </div>
        </section>
    )
}

export default Banner