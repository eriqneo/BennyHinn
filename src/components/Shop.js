import React from 'react'

const Shop = () => {
  return (
    <section>
        <div className='text-center mb-5'>
            <h3 className='text-white text-4xl mt-3'>Online Merchandise</h3>
            <hr className='w-28 h-1 m-auto mt-6 bg-gold align-middle'/>
        </div>
        <div className='shp overflow-hidden h-auto'>
        <div className="max-w-lg text-center sm:text-left ml-14 mt-5 mb-8">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo!
      </h2>

      <p
        className="hidden max-w-md text-white font-bold md:mt-6 md:text-lg md:leading-relaxed md:block"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        officia corporis quasi doloribus iure architecto quae voluptatum beatae
        excepturi dolores.
      </p>

      <div className="mt-4 sm:mt-8">
        <a
          className="inline-flex items-center px-8 py-3 text-black transition bg-gold hover:bg-black rounded-full shadow-lg focus:outline-none focus:ring focus:ring-yellow-400 hover:bg-gray-800"
          href="www"
        >
          <span className="text-sm font-bold hover:text-gold"> Order Now <i className='bx-fw bx bx-right-arrow-alt bx-sm'></i></span>
        </a>
      </div>
    </div>
        </div>
    </section>
  )
}

export default Shop