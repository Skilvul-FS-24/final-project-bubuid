import React from "react";

function Regis() {
  return (
    <div className="hero min-h-screen bg-[#18978F]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card md:flex-row flex-col items-center w-full max-w-2xl shadow-2xl bg-base-100 px-20">
          <form className="card-body">
            <div className="mb-8">
              <img src="/src/assets/regis.png" width={250} alt="" />
            </div>
            <div className="form-control">
              <h1 className="text-center font-bold">CREATE ACCOUNT</h1>
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <input
                type="email"
                placeholder="Masukkan Nama Anda"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Asal Sekolah</span>
              </label>
              <input
                type="password"
                placeholder="Masukkan Asal Sekolah Anda"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="password"
                placeholder="Example@gmail.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Input Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Konfirmasi Password</span>
              </label>
              <input
                type="password"
                placeholder="Input Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6 items-center">
              <button className="btn bg-[#18978F] text-white">
                Create Account
              </button>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-center"
                >
                  Sudah Punya Akun
                </a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Regis;
