import React from "react";

export const Element = ({props}) => {

    return (
        <>
            <h1> ID: { props.Id_producto } | Nombre: {props.Nombre} </h1>
        </>
    );
};

export default Element;