import React from "react";
import ProductImg from '../../assets/TartaFrutilla.jpeg';
import './Product.css';

/* //class component
class Product extends React.Component {
    render() {
        return (
            <div>
                Component de tipo clase
            </div>
        )
    }
} */

//functional component
const Producto = (props) => {
    return (
        <div className="container-producto">
            <div>
                <img src={ProductImg} alt="" />
            </div>
            <h3>{props.title}</h3>
            <p>${props.price}</p>
            <button>Comprar</button>
        </div>
    )
}

export default Producto;