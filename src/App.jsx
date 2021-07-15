
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Contador from "./components/Navbar/Contador";
import Productos from "./components/Productos/Productos";
import itemm from "./components/Productos/Itemm";

function App() {

  const darBienvenida = () => alert("Bienvenidos a nuestra tienda");
  return (

    <>
     <div className="App">
     <Navbar  nombreTienda="VLST" subtitulo= "Store" darBienvenida= {darBienvenida} />
    <Contador/>
    <Productos/>
    
      </div>


    </>
  );
};

export default App;












