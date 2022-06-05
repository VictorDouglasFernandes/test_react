import React, { Component } from "react";

import "./info.css";

export default class Info extends Component {
    render() {
        return (
            <div className="info-content">
                <h1>Info</h1>
                <h3>Julia Knabem</h3>
                <p>This mini-project was created by using:</p>
                <ul>
                    <li>Node.js</li>
                    <li>ReactJS</li>
                </ul>
            </div>
        )
    }
}
