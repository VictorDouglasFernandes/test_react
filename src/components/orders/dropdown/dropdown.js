import React from "react";

export default function Dropdown(props) {
    return (
        // <select value={props.value} onChange={prop.onChange}>
        <select>
            ...{props.items.map((item) =>
                <option value={item.value}>{item.label}</option>
            )}
        </select>
    )

}