import React from 'react'

export const About = () => {
  return (
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
  )
}
