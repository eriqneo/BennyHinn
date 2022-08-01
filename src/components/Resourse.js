import React from "react";

export const Resourse = () => {
  return (
    <section>
      <div className='text-center mb-5'>
            <h3 className='text-white text-4xl mt-3'>Sprout: <small className="italic" >The Journey of A Dreamer</small></h3>
            <hr className='w-28 h-1 m-auto mt-6 bg-gold align-middle'/>
        </div>
    <div className="my-5 mt-10 border border-y-8 rounded-xl bg-snow h-max">
      <div className="flex flex-col md:flex-row ml-8 text-black font-bold justify-around md:gap-28">
      <div className="">
          <a className="relative block group" href="www">
            <img
              className="absolute mt-4 inset-0 object-cover w-full h-full transition-opacity opacity-75 rounded-lg group-hover:opacity-50"
              src="/cover.png"
              alt=""
            />
            <div className="relative p-8">
              <p className="text-sm font-bold tracking-widest text-gold uppercase">
                Public Speaker
              </p>

              <p className="text-2xl font-bold text-black">BennyHinn</p>

              <div className="mt-64">
                <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-sm text-black">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibtusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <p className="text-center mr-6 mt-40 text-xl flex items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            illo accusantium quasi dolores error dolorem sed ipsum iste.
            Dignissimos adipisci iste odio minima earum neque sapiente quam
            reiciendis assumenda illo.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Possimus illo accusantium quasi dolores error
            dolorem sed ipsum iste. Dignissimos adipisci iste odio minima earum
            neque sapiente quam reiciendis assumenda illo. <br /> <br />
          </p>
          <img src="/fc.png" alt="" className="w-1/4 lg:ml-96 hover:animate-bounce"/>
        </div>
       
      </div>
    </div>
    </section>
  );
};
