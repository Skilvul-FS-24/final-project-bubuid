import React from "react";

function DetailPsikolog() {
  return (
    <>
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
        <div class="md:basis-1/5 text-white font-poppins md:grid  md:place-content-between">
          <img src="/src/assets/physical.png" alt="" className="w-full" />
          <button className="w-full bg-[#54BAB9] rounded-xl text-sm p-1">
            Konsultasi Sekarang
          </button>
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
    </>
  );
}

export default DetailPsikolog;
