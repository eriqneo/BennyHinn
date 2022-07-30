import React from 'react'

const Book = () => {
  return (
    <section>
        <div className='text-center mb-5'>
            <h3 className='text-white text-4xl mt-3'>Reserve with BennyHinn</h3>
            <hr className='w-28 h-1 m-auto mt-6 bg-gold align-middle'/>
        </div>
        <section>
  <div className="book px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
      <div className="relative z-1 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            className="absolute inset-0 object-cover hidden md:block w-full h-full"
            src="/sht6.jpeg"
            alt="Indoors house"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-white">
        <span
          className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h2>

          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>

          <a
            className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-black border border-gold rounded active:text-indigo-500 hover:bg-gold hover:text-indigo-600 focus:outline-none focus:ring"
            href="/contact"
          >
            Book Benny <i className='bx-fw bx bx-right-arrow-alt bx-sm'></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </section>
  )
}

export default Book