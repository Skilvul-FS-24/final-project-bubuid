import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Bacaartikel() {
  return (
    <>
    <Navbar/>
      <div
        className="hero"
        style={{ backgroundImage: "url(src/assets/bacaartikel.jpeg)" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Artikel</h1>
          </div>
        </div>
      </div>

      <div className="p-10 font-bold">
        <div className="p-10 bg-slate-100">
          <h1 style={{ textAlign: "center", fontSize: "24px" }}>
            Sikap Orangtua Terhadap Bullying Anak: Melindungi atau Melawan?
          </h1>
          <div className="grid grid-cols-1 justify-center items-center">
            <img
              src="/src/assets/imgbaca.png"
              width={300}
              className="mx-auto mt-5 mb-5"
              alt=""
            />
            <p>
              Bullying adalah perilaku yang berulang dan merugikan yang
              dilakukan oleh satu individu atau sekelompok individu terhadap
              orang lain. Ini bisa terjadi dalam berbagai konteks, seperti di
              sekolah, tempat kerja, lingkungan sosial, atau bahkan di dunia
              maya. Perilaku bullying mencakup tindakan-tindakan yang memiliki
              niat untuk menyakiti, merendahkan, atau mendiskreditkan targetnya
              secara fisik, verbal, atau emosional.
            </p>
          </div>
          <div className="justify-between">
            <div className="flex gap-4 items-center left-content">
              <img src="src/assets/fotoartikel.png" width={30} alt="" />
              <div className="">
                <p>Mustika Wardani</p>
                <p>Guru</p>
              </div>
              <div className="flex gap-4">
                <a>
                  <img src="/src/assets/Logofb.png" width={20} alt="" />
                </a>
                <a>
                  <img src="/src/assets/Logogugel.png" width={20} alt="" />
                </a>
                <a>
                  <img src="/src/assets/Logoig.png" width={20} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Bacaartikel;
