import React from "react";

//class component
class Product extends React.Component {
    render() {
        return (
            <div>
                Component de tipo clase
            </div>
        )
    }
}

//functional component
const Producto = () => {
    return (
        <div>
            Componente de funcional
        </div>
    )
}

export default Producto;