import React, { Component } from "react";
import axios from "axios";
import "./table.css"

import SquaredButton from "./squared_button/squared_button";
import RoundedButton from "./rounded_button/rounded_button";

var fetchedData = false

export default class Table extends Component {
    state = {
        items: this.props.items,
        page: 1,
        rows: 6,
    }

    constructor(props) {
        super(props)

        fetchedData = false
    }

    fetchData() {
        console.log(fetchedData)
        if (!fetchedData) {
            console.log("fetchData")
            fetchedData = true
            axios.get("http://localhost:8080").then(
                (res) => {
                    console.log(res.data)
                    this.setState({ items: res.data })
                }
            ).catch((e) => console.log(e))
        }
    }

    buildHeaderRow() {
        return (<div className="table-header">
            {this.buildHeaderItem("Order Id")}
            {this.buildHeaderItem("Product")}
            {this.buildHeaderItem("Price")}
            {this.buildHeaderItem("Seller")}
            {this.buildHeaderItem("Country")}
        </div>)
    }

    buildHeaderItem(label) {
        return <div className="table-header-item">{label}</div>
    }

    buildTableContent() {
        var color = "plum";

        var rows = []

        for (var i = (this.state.page - 1) * this.state.rows; i < this.state.items.length; i++) {
            if (color === "white") {
                color = "plum"
            } else {
                color = "white"
            }
            rows.push(this.buildDataRow(color, this.state.items[i]))

            if (rows.length == this.state.rows) break
        }

        return rows
    }

    buildDataRow(color, item) {
        return (<div className="table-data-row" style={{ backgroundColor: color }}>
            {this.buildDataItem(item.orderId)}
            {this.buildDataItem(item.product)}
            {this.buildDataItem(item.price)}
            {this.buildDataItem(item.seller)}
            {this.buildDataItem(item.country)}
        </div>)
    }

    buildDataItem(label) {
        return <div className="table-data-item">{label}</div>
    }

    buildPageButtons() {
        var totalPages = Math.ceil(this.state.items.length / this.state.rows)

        var buttons = []

        for (var page = 1; page <= totalPages; page++) {
            buttons.push(
                <SquaredButton label={page} click={(value) =>
                    this.setState({ page: value })
                }></SquaredButton>
            )
        }

        return <div className="page-buttons">
            <SquaredButton label="<<" click={(value) => {
                var pageNumber = this.state.page - 1
                if (pageNumber < 1) pageNumber = 1
                this.setState({ page: pageNumber })
            }}></SquaredButton>
            {buttons}
            <SquaredButton label=">>" click={(value) => {
                var pageNumber = this.state.page + 1
                if (pageNumber > totalPages) pageNumber = totalPages
                this.setState({ page: pageNumber })
            }}></SquaredButton>
        </div>
    }

    buildRoundedButtons() {
        var totalPages = Math.ceil(this.state.items.length / this.state.rows)

        return (
            <div className="rounded-buttons-row">
                <RoundedButton label="Older" click={() => this.setState({ page: 1 })}></RoundedButton>
                <div style={{ width: "20px" }}></div>
                <RoundedButton label="Newer" click={() => this.setState({ page: totalPages })}></RoundedButton>
            </div>
        )
    }

    render() {
        this.fetchData()

        return (
            <div className="table">
                {this.buildHeaderRow()}
                {this.buildTableContent()}
                <div style={{ height: "20px" }}></div>
                {this.buildPageButtons()}
                <div style={{ height: "20px" }}></div>
                {this.buildRoundedButtons()}
            </div>
        )
    }
}