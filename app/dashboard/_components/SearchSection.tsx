import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold'>Browser all templates</h2>
      <p>What would you like to create?</p>
      <div className='w-full flex justify-center items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[45%]'>
          <Search className='text-primary' />
          <input onChange={(e) => onSearchInput(e.target.value)} type="text" placeholder='Search' className='bg-transparent w-full outline-none text-black' />
        </div>
      </div>
    </div>
  )
}

export default SearchSection