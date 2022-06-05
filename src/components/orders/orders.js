import React, { Component } from 'react';
import axios from "axios";
import "./orders.css";

import TotalSellerCard from './total_seller_card/total_seller_card';
import Table from './table/table';

export default class Orders extends Component {

    state = {
        items: [],
    }

    // fetchData(changeState) {
    //     console.log(fetchedData)
    //     if (!fetchedData) {
    //         console.log("fetchData")
    //         fetchedData = true
    //         var ordersSetState = this.setState
    //         axios.get("http://localhost:8080").then(
    //             (res) => {
    //                 console.log(res.data)
    //                 ordersSetState({ items: res.data })
    //                 changeState({ items: res.data })
    //             }
    //         ).catch((e) => console.log(e))
    //     }
    // }

    render() {
        return (
            <div className="orders-content">
                <h1>Orders</h1>
                <div className="row-seller">
                    <TotalSellerCard name="Seller 1" total="200"></TotalSellerCard>
                    <TotalSellerCard name="Seller 2" total="200"></TotalSellerCard>
                    <TotalSellerCard name="Seller 3" total="200"></TotalSellerCard>
                </div>
                <Table items={this.state.items}></Table>
            </div>
        )
    }
}