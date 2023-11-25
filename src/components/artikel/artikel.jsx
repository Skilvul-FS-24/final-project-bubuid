import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

function Artikel() {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/src/assets/frameArtikel.png')] hero min-h-full p-4 bg-opacity-50 ">
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Artikel</h1>
          </div>
        </div>
      </div>

      <div className="md:p-20">
        <div className="p-10 bg-slate-100 md:w-3/4 m-auto md:px-28 text-[#224F34] ">
          <h1 className="text-start mb-10 text-3xl font-bold">
            Temukan Artikel
          </h1>
          <div className="flex flex-col-reverse md:flex-row justify-between mb-16">
            <div className="">
              <h1 className="text-2xl font-bold">
                Jadi Korban Bullying di Sekolah,Apa <br></br>Dampaknya pada
                Anak?
              </h1>
              <p className="py-6">
                Bullying bisa terjadi kepada siapa saja dan di mana saja,
                <br></br>
                tak terkecuali pada anak di sekolah. sekolah yang seharusnya
                <br></br>
                menjadi tempat belajar, nyatanya pada beberapa kasus, bisa{" "}
                <br></br>
                jadi ajang bullying ke sesama murid.
              </p>
              <Link to="/artikel/:id"><button className="btn btn-outline btn-xs sm:btn-sm md:btn-md ">
                Baca Selengkapnya
              </button></Link>
            </div>

            <div>
              <img
                src="/src/assets/img-artikel-1.png"
                width={350}
                className="rounded-3xl"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-between mb-16 ">
            <div className="">
              <h1 className="text-2xl font-bold">
                Jadi Korban Bullying di Sekolah,Apa <br></br>Dampaknya pada
                Anak?
              </h1>
              <p className="py-6">
                Bullying bisa terjadi kepada siapa saja dan di mana saja,
                <br></br>
                tak terkecuali pada anak di sekolah. sekolah yang seharusnya
                <br></br>
                menjadi tempat belajar, nyatanya pada beberapa kasus, bisa{" "}
                <br></br>
                jadi ajang bullying ke sesama murid.
              </p>

              <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md ">
                Baca Selengkapnya
              </button>
            </div>

            <div>
              <img
                src="/src/assets/img-artikel-1.png"
                width={350}
                className="rounded-3xl"
              />
            </div>
          </div>
          <div>
            <button className="btn btn-active btn-accent btn-xs sm:btn-sm md:btn-md ">
              Load More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Artikel;
