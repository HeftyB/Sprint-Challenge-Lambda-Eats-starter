import React from 'react'
import { Link } from "react-router-dom";
import { Button, Table } from 'reactstrap'
import TotalSubmitForm from "./TotalSubmitForm";

export default function OrderConf(props) {
    const {currentOrder, currentUser} = props;
    return (
        <div>
            <h2>ORDER CONF</h2>
            <div>
                <Table>
                <tbody>
                <tr>
                <td>Your Name:&nbsp;</td>
                <td>&nbsp;{currentUser.name}</td>
                </tr>
                <tr>
                <td>Your Phone#:&nbsp;</td>
                <td>&nbsp;{currentUser.phone}</td>
                </tr>
                <tr>
                <td>Your Email:&nbsp;</td>
                <td>&nbsp;{currentUser.email}</td>
                </tr>
                <tr>
                <td>Your Order&nbsp;</td>
                <td>&nbsp;{console.log(currentOrder.totalItems)}</td>
                </tr>
                </tbody>
                </Table>
            </div>
            <Link to="/">
                <Button className="home">Home</Button>
            </Link>
        </div>
    )
}
