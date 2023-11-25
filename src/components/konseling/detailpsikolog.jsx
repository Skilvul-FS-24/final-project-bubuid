import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function DetailPsikolog() {
  return (
    <>
      <Navbar/>
      <div className="min-h-fit m-auto text-center bg-[#54BAB9] text-white">
        <div className="p-10">
          <h1 className="text-3xl font-rufina mb-5">Profil Psikolog</h1>
          <p className="font-poppins text-sm">
            Kami akan membantu mendengarkan, meresapi, dan memecahkan setiap
            masalahmu!
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-center p-10 gap-9">
        <div class="md:basis-1/5 font-poppins md:grid  md:place-content-between">
          <img src="/src/assets/physical.png" alt="" className="w-full" />
          {/* <button className="w-full bg-[#54BAB9] rounded-xl text-sm p-1">
            Konsultasi Sekarang
          </button> */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="text-white bg-[#54BAB9] p-1 rounded-xl w-full hover:bg-[#9fe4e3]"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Konsultasi Sekarang
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form className="mx-auto mt-10">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border rounded w-full py-2 px-3"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border rounded w-full py-2 px-3"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    No. HP
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="border rounded w-full py-2 px-3"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="school"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Asal Sekolah
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    className="border rounded w-full py-2 px-3"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="onlineOffline"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Pilihan Online/Offline
                  </label>
                  <select
                    id="onlineOffline"
                    name="onlineOffline"
                    className="border rounded md:w-full py-2 px-3"
                  >
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Tanggal
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="border rounded w-full py-2 px-3"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="complaint"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Keluhan Anda
                  </label>
                  <textarea
                    id="complaint"
                    name="complaint"
                    className="border rounded w-full py-2 px-3"
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-[#54BAB9] p-1 rounded-xl w-full hover:bg-[#9fe4e3]"
                >
                  Submit
                </button>
              </form>
            </div>
          </dialog>
        </div>
        <div class="md:basis-1/2 p-10 bg-[#54BAB9] rounded-xl font-poppins">
          <h1 className="text-xl font-bold">Muhamad Bagas M</h1>
          <div className="mt-2">
            <h1 className="text-white font-semibold mb-2">Biography</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              iure voluptas voluptate, sapiente cumque libero temporibus aperiam
              ab eos ea facilis provident mollitia nam est laudantium modi,
              dolore impedit culpa!
            </p>
          </div>
          <div className="mt-2">
            <h1 className="text-white font-semibold mb-2">Pendidikan</h1>
            <ul className="list-disc text-sm">
              <li>Pendidikan S1: Sarjana Psikologi Universitas Indonesia</li>
              <li>
                Pendidikan S2: Magister Psikologi Profesi Klinis Universitas
                Jayabaya
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h1 className="text-white font-semibold mb-2">Jadwal Konseling</h1>
            <ul className="list-disc text-sm">
              <li>Selasa 18.00 - 19.00</li>
              <li>Rabu, 13.00 - 14.00</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h1 className="mb-5 text-xl font-bold font-poppins text-[#224F34] text-center">
          Testimoni
        </h1>
        <div className="flex flex-col md:flex-row gap-2 font-poppins justify-around">
          <div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-xs">
                <h2 className="font-semibold">Sarah Emelly</h2>
                <p>
                  The customer experience was exceptional from start to finish.
                  The website is user-friendly, the checkout process was smooth,
                  and the clothes I ordered fit perfectly. I'm beyond satisfied!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-xs">
                <h2 className="font-semibold">Sarah Emelly</h2>
                <p>
                  The customer experience was exceptional from start to finish.
                  The website is user-friendly, the checkout process was smooth,
                  and the clothes I ordered fit perfectly. I'm beyond satisfied!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-xs">
                <h2 className="font-semibold">Sarah Emelly</h2>
                <p>
                  The customer experience was exceptional from start to finish.
                  The website is user-friendly, the checkout process was smooth,
                  and the clothes I ordered fit perfectly. I'm beyond satisfied!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default DetailPsikolog;
