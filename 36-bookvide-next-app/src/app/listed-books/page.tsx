import TabSection from '@/components/listed-books/TabSection'
import React from 'react'

const ListedBooksPage = () => {
    return (
        <section className='pt-10 pb-10'>
            <div className='py-10 bg-gray-200 rounded-xl text-center'>
                <h1 className='text-5xl font-bold'>Books</h1>
            </div>

            <TabSection />
            
        </section>
    )
}

export default ListedBooksPage