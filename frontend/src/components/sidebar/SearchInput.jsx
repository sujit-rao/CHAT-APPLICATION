import React from 'react'
import {IoSearchSharp} from 'react-icons/io5'

const SearchInput = () => {
  return (
    <form className=' flex items-center gap-2'>
        <input type="text" placeholder='Search...' className=' input input-bordered rounded-full' />
        <button className=' btn btn-circle bg-purple-500 text-white border-none '><IoSearchSharp className=' h-6 w-6 outline-none'/></button>
    </form>
  )
}

export default SearchInput