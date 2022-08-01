import React, { useState } from 'react'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="pt-3 pb-3 flex flex-col md:flex-row md:sticky top-0 z-10 mx-auto drop-shadow-xl bg-black">
    <img src="/logo.png" alt="" className="text-white border border-gold rounded-r-md px-3 py-3 w-32 ml-3 h-24 hover:border-black"/>
      <button className='block lg:hidden float-right' type='button' onClick={()=> setMenuOpen(!menuOpen)}>
      <i className='bx bx-menu bx-lg text-gold'></i>
      </button>
    <div className={(menuOpen ? 'flex': `hidden lg:block`)}>
      <div className='lg:flex flex-wrap ml-16'>
        <button className='py-3 px-6 rounded-md text-gold text-xl font-semibold border border-black hover:border-gold hover:border-x-8'>
            Online Master Class .
        </button>
        <button className='ml-5 py-3 px-6 rounded-md text-gold text-xl font-semibold border border-black hover:border-gold hover:border-x-8'>
            Merchandise .
        </button> 
        <button className='ml-5 py-3 px-6 rounded-md text-gold text-xl font-semibold border border-black hover:border-gold hover:border-x-8'>
            Contacts .
        </button>
        <button className='ml-5 py-3 px-6 rounded-md text-gold text-xl font-semibold border border-black hover:border-gold hover:border-x-8'>
          My Blog .
        </button>
        <div className='float-right mt-4 hidden md:block ml-16'>
          <i className='bx-fw bx bxl-tiktok bx-md ml-16 text-snow hover:text-gold'></i>
          <i className='bx-fw bx bxl-facebook bx-md text-snow hover:text-gold'></i>
          <i className='bx-fw bx bxl-instagram-alt bx-md text-snow hover:text-gold'></i>
          <i className='bx-fw bx bxl-linkedin bx-md text-snow hover:text-gold'></i>
          <i className='bx-fw bx bxl-telegram bx-md text-snow hover:text-gold'></i>
          <i className='bx-fw bx bxl-twitter bx-md text-snow hover:text-gold'></i>
          <i className='bx-fw bx bxl-youtube bx-md text-snow hover:text-gold'></i>
          </div>
        </div>
    </div>
    <div className=''>
      
    </div>
  </div>
  )
}
