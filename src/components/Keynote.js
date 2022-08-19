import React from 'react'

const Keynote = () => {
  return (
    <section>
      <div className='text-center mb-5'>
            <h3 className='text-white text-4xl mt-3'>Online Master Class</h3>
            <hr className='w-28 h-1 m-auto mt-6 bg-gold align-middle'/>
        </div>
    <div className='my-5 ml-10 grid grid-cols-3'>
      <div> <img src="/sht3.jpeg" alt="" /> </div>
      <div> <img src="/sht10.jpg" alt="" /> </div>
      <div> <img src="/sht5.jpeg" alt="" /> </div>
      <div className='col-span-2'>
      <img src="/sht9.JPG" alt="" />
      </div>
      <div className='max-w-md text-snow text-center m-auto text-xl'>
      <div className='text-center mb-5'>
            <h3 className='text-white text-4xl mt-3'>Public Speaking</h3>
            <hr className='w-28 h-1 m-auto mt-6 bg-gold align-middle'/>
        </div>
      <p className='text-2xl text-gold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, cupiditate.</p>
      <hr className='border border-gold mb-3' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias, cupiditate nihil esse odio laudantium sint 
          eum libero voluptatum fuga doloremque vero id, debitis voluptates aperiam architecto sunt quidem assumenda. Explicabo 
          ipsum veniam id repellat labore? Aperiam nobis debitis exercitationem.
          </p>
      <hr className='border border-gold mt-3' />
      </div>
    </div>
    </section>
  )
}

export default Keynote

/* 
<div className='text-white text-center text-xl md:text-2xl mt-24 mb-24 sm:ml-4 sm:mr-3 md:ml-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                At laborum iure minus dolor non iste autem libero eos,
                 excepturi rerum. Quis nulla reiciendis omnis, consectetur dicta esse a aliquid, perspiciatis 
                 soluta error eligendi? Harum, ullam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                At laborum iure minus dolor non iste autem libero eos,
                 excepturi rerum. Quis nulla reiciendis omnis, consectetur dicta esse a aliquid, perspiciatis 
                 soluta error eligendi? Harum, ullam. <br />  
                 soluta error eligendi? Harum, ullam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                At laborum iure minus dolor non iste autem libero eos,
                 excepturi rerum. Quis nulla reiciendis omnis, consectetur dicta esse a aliquid, perspiciatis 
                 soluta error eligendi? Harum, ullam.<br /> <br /> <br />
                 <button className='px-6 py-4 bg-gold text-black hover:bg-snow rounded-lg text-2xl'>
              Learn More <i className='bx-fw bx bx-search-alt-2 bx-md'></i>
           </button>
            </div>
*/