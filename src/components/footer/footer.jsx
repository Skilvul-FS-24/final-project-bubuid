import React from 'react'

function Footer() {
  return (
    <footer className="footer p-10 bg-[#18978F] text-white font-poppins">
    <aside className='grid justify-items-center'>
    
    <img src="/src/assets/LogoTanganFooter.png" width={210} alt="Bubu.id" />    
    
    <nav className="relative left-6">
        <header className="footer-title text-center font-poppins">Social Media</header> 
        <div className="grid grid-flow-col gap-8">
        <a><img src="/src/assets/fb.png" width={24} alt="" /></a>
        <a><img src="/src/assets/twt.png" width={24} alt="" /></a>
        <a><img src="/src/assets/ig.png" width={24} alt="" /></a>
        </div>
    </nav>
      
    </aside> 
    <nav>
      <header className="footer-title">Daftar</header> 
      <a className="link link-hover">Home</a>
      <a className="link link-hover">About Bullying</a>
      <a className="link link-hover">Konseling</a>
      <a className="link link-hover">Artikel</a>
    </nav> 
    <nav>
      <header className="footer-title">Company</header> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Forum</a>
    </nav> 
    <nav>
      <header className="footer-title">Partner</header> 
    <img src="/src/assets/skilvul.png" width={100} alt="Skilvul"/>
    </nav>
  </footer>
  )
}

export default Footer