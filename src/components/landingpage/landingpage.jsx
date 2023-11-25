import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Navbar/>
      <div className="bg-[#54BAB9] min-h-screen py-16">
        <div className="hero-content flex-col justify-evenly md:flex-row-reverse">
          <div>
            <img
              src="/src/assets/logobubu.png"
              className="max-w-xs"
              width={250}
            />
          </div>
          <div className="md:w-1/2 text-white">
            <div className="w-64 text-center">
              <h1 className="text-6xl font-rufina">Say No!! To Bullying</h1>
            </div>
            <p className="py-6 font-poppins antialiased tracking-wider">
              Bubu.id adalah website yang mendukung gerakan anti-bullying,
              terutama di dunia pendidikan yang menyediakan fitur dan layanan
              yang terbaik. #BullyingBusters
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col md:flex-row justify-around items-center">
        <div className="mb-4 md:mb-0">
          <img
            src="/src/assets/kompak.png"
            alt=""
            className="max-w-sm"
            width={300}
          />
        </div>
        <div className="">
          <div className="card md:w-96 bg-[#18978F] shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-white text-lg font-semibold">
                Misi Kami
              </h2>
              <p className="text-white text-center font-poppins text-sm">
                Melalui program yang kami kelola, Bubu.id di dedikasikan untuk
                mengurangi kasus Bullying di Indonesia, khususnya di dunia
                pendidikan
              </p>
              <div className="text-center mt-2">
                <Link to="/"><button className="bg-white px-4 py-2 rounded-md">
                  Learn More
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-max bg-[#18978F] text-white p-4 md:text-left">
        <div className="hero-content flex-col justify-around lg:flex-row-reverse">
          <img
            src="/src/assets/animasi.png"
            className="max-w-sm rounded-lg shadow-2xl"
            width={200}
          />
          <div className="w-1/2">
            <h1 className="text-xl font-base font-poppins">About Bullying</h1>
            <p className="py-3 font-poppins text-sm">
              Bullying adalah penggunaan kekerasan, ancaman, atau paksaan untuk
              menyalahgunakan atau mengintimidasi orang lain. Perilaku ini dapat
              menjadi suatu kebiasaan dan melibatkan ketidakseimbangan kekuasaan
              sosial atau fisik.
            </p>
            <Link to="/aboutbullying"><button className="bg-white px-4 py-1 rounded-md text-black">
              Learn More
            </button></Link>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-max p-5"
        style={{ backgroundImage: "url(/src/assets/bg-fitur.png)" }}
      >
        <div className="text-center">
          <div className="">
            <h1 className="mb-5 text-xl font-bold font-poppins text-[#224F34]">
              Fitur Kami
            </h1>
            <div class="flex flex-col md:flex-row gap-2 font-poppins text-white justify-around">
              <div class="basis-1/4">
                <div className="card shadow-xl bg-[#18978F]">
                  <div className="card-body">
                    <h2 className="text-sm text-left">Konseling</h2>
                    <h3 className="font-semibold text-left">
                      Tersedia Konseling Online & Offline
                    </h3>
                    <p className="text-left font-poppins text-sm mt-4">
                      Kamu bisa memilih waktu konseling, yang disesuaikan dengan
                      kenyamananmu bercerita
                    </p>
                    <div className="card-actions justify-center">
                      <Link to="/konseling"><button className="bg-white px-4 py-1 rounded-md text-black">
                        Learn More
                      </button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="basis-1/4">
                <div className="card shadow-xl bg-[#18978F]">
                  <div className="card-body ">
                    <h2 className="text-sm text-left">Artikel</h2>
                    <h3 className="font-semibold text-left">
                      Tersedia artikel yang yang beragam
                    </h3>
                    <p className="text-left font-poppins text-sm mt-4">
                      Kamu dapat meningkatkan pengetahuan tentang informasi
                      mengenai bullying, baik itu cara mencegahnya, dampak dan
                      akibatnya
                    </p>
                    <div className="card-actions justify-center">
                      <Link to="/artikel"><button className="bg-white px-4 py-1 rounded-md text-black">
                        Learn More
                      </button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="basis-1/4">
                <div className="card shadow-xl bg-[#18978F]">
                  <div className="card-body">
                    <h2 className="text-sm text-left">Forum</h2>
                    <h3 className="font-semibold text-left">
                      Forum Diskusi
                    </h3>
                    <p className="text-left font-poppins text-sm mt-4">
                      Forum diskusi untuk user yang menghadapi masalah bullying
                      dapat berbagi pengalaman mereka & mendapat dukungan dari
                      sesama, untuk mengatasi situasi bullying.
                    </p>
                    <div className="card-actions justify-center">
                      <button className="bg-white px-4 py-1 rounded-md text-black">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h1 className="mb-5 text-xl font-bold font-poppins text-[#224F34] text-center">
          Feedback Corner
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

export default LandingPage;
