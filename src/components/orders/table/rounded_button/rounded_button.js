import React, { Component } from "react";
import "./rounded_button.css";

export default class RoundedButton extends Component {
    render() {
        return (
            <button className="rounded-button" onClick={e => this.props.click(this.props.label)}>{this.props.label}</button>
        )
    }
}