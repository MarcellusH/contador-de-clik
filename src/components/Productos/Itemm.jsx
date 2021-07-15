import React from "react";
import Productos from "./Productos";


 const Itemm = ({Itemm}) => {
    return (
        <div>
            <img src={Itemm.img} alt={Itemm.title}  />
            <strong>{Itemm.title}</strong>
            <p> Precio: <span>{Itemm.precio}</span></p>
            
        </div>
    );
};

export default Itemm;