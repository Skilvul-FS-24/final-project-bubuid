import React from 'react'

function Login() {
  return (
    <div className="hero min-h-screen bg-[#18978F]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card md:flex-row flex-col items-center w-full max-w-2xl shadow-2xl bg-base-100 px-20">
      <form className="card-body">
        <div className="form-control">
            <h1 className="text-center font-bold">LOGIN</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="example@gmail.com" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="input password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            <a href="#" className="label-text-alt link link-hover">Create Acoount</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#18978F] text-white">Login</button>
        </div>
      </form>
      <div className="">
        <img src="/src/assets/login.jpeg" width={350} alt="" />
        </div>
    </div>
  </div>
</div>
  )
}

export default Login