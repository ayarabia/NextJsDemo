import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

function Layout({ children }) {
  return (
    <div>
     <NavBar></NavBar>
 <main>
 {children}
 </main>
  <Footer></Footer>
    </div>
  );
}

export default Layout;
