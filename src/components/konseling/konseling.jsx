import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

function Konseling() {
  return (
    <>
      <Navbar/>
      <div className="min-h-fit m-auto text-center bg-[#54BAB9] text-white">
        <div className="p-10">
          <h1 className="text-3xl font-rufina mb-5">Konseling</h1>
          <p className="font-poppins text-sm">
            Kami akan membantu mendengarkan, meresapi, dan memecahkan setiap
            masalahmu!
          </p>
        </div>
      </div>
      <div className="min-h-fit m-auto">
        <div className="p-10">
          <div className="font-poppins text-center">
            <h2 className="text-2xl text-[#224F34]">Alur Konseling</h2>
            <p className="text-sm">
              Berikut adalah tahapan ketika ingin konseling dengan koselor.
            </p>
          </div>
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 mt-8 gap-5">
            <div className="grid justify-items-center p-4 gap-2">
              <div className="bg-slate-300 p-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#224F34]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <div className="text-center font-poppins">
                <h1 className="font-semibold">Pilih Konsoler</h1>
                <p className="text-sm">
                  Pilih Konsoler yang cocok dengan tingkat bullying yang anda
                  hadapi.
                </p>
              </div>
            </div>
            <div className="grid justify-items-center p-4 gap-2">
              <div className="bg-slate-300 p-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#224F34]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </div>
              <div className="text-center font-poppins">
                <h1 className="font-semibold">Jadwal Konseling</h1>
                <p className="text-sm">
                  Pilih Jadwal yang sesuai dengan jadwal Konsoler dan jadwal
                  kosong anda.
                </p>
              </div>
            </div>
            <div className="grid justify-items-center p-4 gap-2">
              <div className="bg-slate-300 p-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#224F34]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </div>
              <div className="text-center font-poppins">
                <h1 className="font-semibold">Mulai Konseling</h1>
                <p className="text-sm">
                  Ceritakan semua pengalaman anda kepada konsoler dan dipastikan
                  privasi anda terjaga.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4 justify-items-center">
          <div className="grid p-4 gap-2 w-2/3 md:w-2/5 rounded-xl bg-[#9ed1cf] font-poppins justify-items-center text-[#224F34] ">
            <h1 className="text-lg md:text-xl">
              Muhammad Bagas M
            </h1>
            <img src="/src/assets/physical.png" alt="" width={200} />
            <div className="grid gap-2">
              <h2 className="text-sm">Muhammad Bagas M</h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, harum facere impedit quia dignissimos doloremque!
                Earum aperiam unde, aliquid corrupti corporis quibusdam quo
                soluta quasi, voluptas aut tempora itaque eveniet?
              </p>
            </div>
            <Link to="/konseling/:id"><button className="bg-white w-full text-sm rounded-xl p-1">Pilih Konsoler</button></Link>
          </div>
          <div className="grid p-4 gap-2 w-2/3 md:w-2/5 rounded-xl bg-[#9ed1cf] font-poppins justify-items-center text-[#224F34] ">
            <h1 className="text-lg md:text-xl">
              Muhammad Bagas M
            </h1>
            <img src="/src/assets/physical.png" alt="" width={200} />
            <div className="grid gap-2">
              <h2 className="text-sm">Muhammad Bagas M</h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, harum facere impedit quia dignissimos doloremque!
                Earum aperiam unde, aliquid corrupti corporis quibusdam quo
                soluta quasi, voluptas aut tempora itaque eveniet?
              </p>
            </div>
            <button className="bg-white w-full text-sm rounded-xl p-1">Pilih Konsoler</button>
          </div>
          <div className="grid p-4 gap-2 w-2/3 md:w-2/5 rounded-xl bg-[#9ed1cf] font-poppins justify-items-center text-[#224F34] ">
            <h1 className="text-lg md:text-xl">
              Muhammad Bagas M
            </h1>
            <img src="/src/assets/physical.png" alt="" width={200} />
            <div className="grid gap-2">
              <h2 className="text-sm">Muhammad Bagas M</h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, harum facere impedit quia dignissimos doloremque!
                Earum aperiam unde, aliquid corrupti corporis quibusdam quo
                soluta quasi, voluptas aut tempora itaque eveniet?
              </p>
            </div>
            <button className="bg-white w-full text-sm rounded-xl p-1">Pilih Konsoler</button>
          </div>
          <div className="grid p-4 gap-2 w-2/3 md:w-2/5 rounded-xl bg-[#9ed1cf] font-poppins justify-items-center text-[#224F34] ">
            <h1 className="text-lg md:text-xl">
              Muhammad Bagas M
            </h1>
            <img src="/src/assets/physical.png" alt="" width={200} />
            <div className="grid gap-2">
              <h2 className="text-sm">Muhammad Bagas M</h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, harum facere impedit quia dignissimos doloremque!
                Earum aperiam unde, aliquid corrupti corporis quibusdam quo
                soluta quasi, voluptas aut tempora itaque eveniet?
              </p>
            </div>
            <button className="bg-white w-full text-sm rounded-xl p-1">Pilih Konsoler</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Konseling;
