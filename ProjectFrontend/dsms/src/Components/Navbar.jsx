import React from "react";

const Navbar = () => {
  return (
    <>
      <section className="header">
        <img src=".\logo.png" alt="" className="logo" />
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="Product.html">shop</a>
          <a href="gallery.html">gallery</a>
          <a href="#about">about</a>
          <a href="#food">expertise</a>
          <a href="#blogs">reviews</a>
          <a href="#footer">Contact us</a>
          <a href="Login.html">Login</a>
          <a href="cart.html">Cart</a>
        </nav>
        <div id="menu-btn" className="fas fa-bars"></div>
      </section>
    </>
  );
};

export default Navbar;
