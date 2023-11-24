import React, { useEffect, useState } from 'react'

const SearchResult = ({searchResults}) => {
  return (
    <div className=' flex justify-center pt-4 '>
      <div className=' border-[#003554] flex flex-col flex-wrap w-5/6 sm:w-3/4 rounded-lg p-4 bg-base-300 shadow-lg'>
      <h2 className='text-2xl '><a href="">Title</a></h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed sapiente inventore iste quibusdam nisi.</p>
      </div>
    </div>
  )
}

export default SearchResult