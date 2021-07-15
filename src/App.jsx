

import Navbar from "./components/Navbar/Navbar";
import Contador from "./components/Navbar/Contador";


function App() {

  const darBienvenida = () => alert("Bienvenidos a nuestra tienda");
  return (

    <>
     <div className="App">
     <Navbar  nombreTienda="VLST" subtitulo= "Store" darBienvenida= {darBienvenida} />
    <Contador/>
    
      </div>


    </>
  );
};

export default App;












