"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'

const SideNav = () => {

  const menuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/dashboard'
    },
    {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/history'
    },
    {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing'
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/setting'
    },
  ]

  const path = usePathname()
  useEffect(() => {
    console.log(path)
  }, [])

  return (
    <div className='h-screen p-5 shadow-sm border'>
      <div className='flex justify-center border-b pb-8 mb-4'>
        <Image src={'/logo.svg'} alt="logo" width={100} height={100} />
      </div>
      <div className='mt-3'>
        {menuList.map((menu, idx) => (
          <div key={idx} className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path === menu.path && "bg-primary text-white"}`}>
            <menu.icon />
            <h2 className='font-semibold'>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideNav