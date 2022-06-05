import React from "react";



export default function TotalSellerCard(props) {
    return (
        <div className="card">
            <p className="name">Total of {props.name}</p>
            <p className="total">$ {props.total}</p>
        </div>
    )
}