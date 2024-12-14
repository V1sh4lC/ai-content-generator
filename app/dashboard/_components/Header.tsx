import { UserButton } from '@clerk/nextjs'
import { Menu, Search } from 'lucide-react'
import React, { useState } from 'react'
import SideNav from './SideNav'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const menuClickHandler = ():void => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
      <div onClick={menuClickHandler} className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white cursor-pointer sm:invisible'>
        {/* <Search />
        <input type="text" placeholder='Search...' className='outline-none'/> */}
        <Menu />
      </div>
      {menuOpen && <div className='w-full absolute top-0 left-0 right-0 sm:hidden z-10'>
        <SideNav menuClickHandler={menuClickHandler}/>
      </div>}
      <div className='flex gap-5 items-center'>
        <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2 hidden sm:block'>🎉 Join Membership just for $2.89/month</h2>
        <UserButton />
      </div>
    </div>
  )
}

export default Header