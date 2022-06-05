import React, { Component } from "react";
import "./main.css";

import Info from "../info/info";
import Orders from "../orders/orders";
import Button from "./button/button";

export default class Main extends Component {
    state = {
        page: <Info></Info>,
    }

    constructor(props) {
        super(props)

        this.sendInfoPage = this.sendInfoPage.bind(this)
        this.sendOrdersPage = this.sendOrdersPage.bind(this)
    }

    sendOrdersPage() {
        this.setState({ page: <Orders></Orders> })
        console.log('sendOrdersPage')
    }

    sendInfoPage() {
        this.setState({ page: <Info></Info> })
        console.log('sendInfoPage')
    }

    render() {
        return (
            <div className="main">
                <div className="header">
                    <Button label="info" click={this.sendInfoPage}></Button>
                    <div className="spacer"></div>
                    <Button label="orders" click={this.sendOrdersPage}></Button>
                </div>
                {this.state.page}
            </div>
        )
    }
}