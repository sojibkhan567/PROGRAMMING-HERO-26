import { useBooks } from '@/context/BookContext'
import React from 'react'

const WishlistBooksList = () => {

  const { wishlist } = useBooks();

  return (
    <div>
      <h1>Wishlist Books: {wishlist.length}</h1>
    </div>
  )
}

export default WishlistBooksList