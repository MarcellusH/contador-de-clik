import React, { useState} from "react";
import Itemm from "./Itemm";



 const Productos = () => {

    const [displayProductos, setDisplayProductos] = useState([]);

    const preoductosArray = [
        {
            id: 1,
            title: "imagen1",
            img: "./img/conjuntoflecha.jpg",
            precio: 15,
            stock: 20,
        },
        {
            id: 1,
            img: "./img/blusax.jpg",
            title: "imagen2",
            precio: 25,
            stock: 20,

        },
        {
            id: 1,
            img: "./img/conjunto.jpg",
            title: "imagen3",
            precio: 30,
            stock: 20,
        }

    ]
    return (
        <div>
            <h1>Catalogo</h1>
            {preoductosArray.map  (contenido=> { 
                <Itemm  itemm = {itemm} key= {itemm.id}   />
            })}
            
        </div>
    );
};


export default Productos;