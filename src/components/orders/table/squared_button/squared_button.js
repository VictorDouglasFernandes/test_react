import React, { Component } from "react";
import "./squared_button.css";

export default class SquaredButton extends Component {
    render() {
        return (
            <button className="squared-button" onClick={e => this.props.click(this.props.label)}>{this.props.label}</button>
        )
    }
}