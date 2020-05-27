import React from 'react'
import { Link } from "react-router-dom";
import { Button, Navbar } from 'reactstrap';
import TotalSubmitForm from "./TotalSubmitForm";

export default function Continue(props) {

    const {
        values,
        onInputChange,
        onSubmitPizza,
        onSubmitUser,
        disabled,
        errors
      } = props

    return (
        <div>
            <h2>CONTINUE SHOPPING?</h2>

            <TotalSubmitForm
                values={values}
                disabled={disabled}
                errors={errors}
                onInputChange={onInputChange}
                onSubmit={onSubmitPizza}>
            </TotalSubmitForm> 

            <Navbar className="nav nav-bar">
                <Link to="/Pizza">
                    <Button className="pizzaButton">Pizza</Button>
                </Link>
                <Link to="/OrderConf">
                    <Button className="orderConf">OrderConf</Button>
                </Link>
            </Navbar>
        </div>
    )
}