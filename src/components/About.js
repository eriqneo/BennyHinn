import React from 'react'

export const About = () => {
  return (
    <section className='abt'>
      <div className='flex justify-center'><img src="/sht7.png" alt="shoot7" className='' /></div>
      <div className='flex flex-row justify-between'>
        <div className='max-w-sm ml-14 -mt-96 '>
          <hr className='border border-gold mb-3' />
          <p className='text-xl text-white'>Hello 👋 I am<strong className='text-3xl text-gold'>Bennyhinn Walubengo</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptates vero culpa dolor,
           ducimus, atque, quam qui labore cumque possimus numquam eligendi laudantium deserunt. Vitae dolor dolorum maiores 
           doloremque veritatis? 
           <hr className='border border-gold mt-3' />
           <br />
           <button className='px-6 py-4 bg-gold text-black hover:bg-snow rounded-lg text-2xl'>
            Watch<i className='bx-fw bx bx-play bx-md' ></i>Me
           </button>
          </p>
        </div>
        <div className='max-w-sm mr-14 -mt-96'>
        <hr className='border border-black mb-3' />
          <p className='text-xl text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptates vero culpa dolor,
           ducimus, atque, quam qui labore cumque possimus numquam eligendi laudantium deserunt. Vitae dolor dolorum maiores 
           doloremque veritatis? </p>
           <hr className='border border-black mt-3' />
           <br />
           <button className='px-6 py-4 mr-2 border border-gold text-white bg-black hover:text-black hover:bg-snow rounded-lg text-2xl'>
            My Tours
           </button>
          
        </div>
      </div> 
    </section>

   /* 
   <section className='grid md:grid-cols-2 grid-cols-1 text-white mx-10 my-5 border border-y-8 rounded-xl'>
        <div>
            <p className='text-xl md:text-2xl ml-3 mt-6'>I am <strong className='text-gold text-4xl md:text-6xl'>BennyHinn Walubengo...</strong><br /><br /> Lorem ipsum dolor,sit amet consectetur 
            <br /><br />
            adipisicing elit. Porro rerum consequatur repellat in doloremque dolores aliquid <br /> deserunt molestias odio harum autem nesciunt 
            numquam, pariatur vel enim laboriosam? Nam molestias nemo, quibusdam numquam dicta veritatis laborum dolorum vero aut sequi distinctio.
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Porro rerum consequatur repellat in doloremque dolores aliquid deserunt molestias odio harum autem nesciunt 
            numquam, pariatur vel enim laboriosam? Nam molestias nemo, quibusdam numquam dicta veritatis laborum dolorum vero aut sequi distinctio.
            orem ipsum dolor, sit amet consectetur 
            adipisicing elit. Porro rerum consequatur repellat in doloremque dolores aliquid deserunt molestias odio harum autem nesciunt 
            numquam, pariatur vel enim laboriosam? Nam molestias nemo, quibusdam numquam dicta veritatis laborum dolorum vero aut sequi distinctio.
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Porro rerum consequatur repellat in doloremque dolores aliquid deserunt molestias odio harum autem nesciunt 
            numquam, pariatur vel enim laboriosam? Nam molestias nemo, quibusdam numquam dicta veritatis laborum dolorum vero aut sequi distinctio.
           </p>
           <div className='flex md:flex-row ml-6 mb-4 justify-between'>
           <button className='px-6 py-4 bg-gold text-black hover:bg-snow rounded-lg text-2xl'>
            Watch<i className='bx-fw bx bx-play bx-md' ></i>Me
           </button>
           <button className='px-6 py-4 mr-2 border border-gold text-white hover:bg-gold hover:text-black rounded-lg text-2xl'>
            My Tours
           </button>
           </div>

        </div>
        <div>
            <img src="/Ben.png" alt="Walu" />
        </div>
    </section>
   */ 
  )
}
