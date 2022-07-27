import React from "react";

export const Resourse = () => {
  return (
    <section className="my-5 mt-10 border border-y-8 rounded-xl bg-snow h-max">
      <div className="flex flex-row ml-8 text-black font-bold justify-around gap-28">
      <div className="">
          <a className="relative block group" href="www">
            <img
              className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 rounded-lg group-hover:opacity-50"
              src="/sht7.png"
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
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <p className="text-center mr-6 mt-40 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            illo accusantium quasi dolores error dolorem sed ipsum iste.
            Dignissimos adipisci iste odio minima earum neque sapiente quam
            reiciendis assumenda illo.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Possimus illo accusantium quasi dolores error
            dolorem sed ipsum iste. Dignissimos adipisci iste odio minima earum
            neque sapiente quam reiciendis assumenda illo. <br /> <br />
            <i className='bx bx-book-reader bx-lg text-black hover:text-gold'></i>
          </p>
        </div>
       
      </div>
    </section>
  );
};
