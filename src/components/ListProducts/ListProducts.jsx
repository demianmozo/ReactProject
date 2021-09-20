import React,{Component} from "react";
import Producto from "../Product/Product";

export default class ListProducts extends Component {
    render() {
        return (
            <div>
                <Producto title="tarta Frutilla" price="1200" />
                <Producto title="tarta Frutilla2" price="800" />
                <Producto title="tarta Frutilla3" price="2000" />
                <Producto title="tarta Frutilla4" price="1000" />
            </div>
        )
    }
}