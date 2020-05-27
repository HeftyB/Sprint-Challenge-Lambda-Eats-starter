import React from 'react'
import { Link } from "react-router-dom";
import { Button, Navbar } from 'reactstrap'

export default function UserInfo(props) {
    const {
        values,
        onInputChange,
        onSubmitPizza,
        onSubmitUser,
        disabled,
        errors
      } = props;

    return (
        <div>
            <form 
            className="form container" 
            onSubmit={onSubmitUser}
            >
                <div className="form-group submit">
                    <h3>BUILD YO PIZZA</h3>
                    <br/>
                    <h4>TREAT YO SELF</h4>
                </div>
                    <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.phone}</div>
                    <div>{errors.size}</div>
                    <div>{errors.crust}</div>
                    <div>{errors.cheese}</div>
                </div>
                <div className="form-group inputs">
                    <h4>Your Information</h4>


                    <label>Name:&nbsp;
                        <input
                        type="text"
                        placeholder="Type your name"
                        maxLength="20"
                        name="name"
                        value={values.name}
                        onChange={onInputChange}
                        />
                    </label>
                    <br/>
                    <label>Email:&nbsp;
                        <input
                        type="text"
                        placeholder="Type email"
                        maxLength="25"
                        name="email"
                        value={values.email}
                        onChange={onInputChange}
                        />
                    </label>
                    <br/>
                    <label>Phone #:&nbsp;
                        <input
                        type="text"
                        placeholder="Type your phone number"
                        maxLength="10"
                        name="phone"
                        value={values.phone}
                        onChange={onInputChange}
                        />
                    </label>
                </div>
                <Button disabled={disabled} className="userSubmit">Submit Info</Button>
            </form>
            <div>
            <Navbar className="nav nav-bar">
                <Link to="/">
                    <Button className="homeButton">Home</Button>
                </Link>
                <Link to="/Pizza">
                    <Button className="pizzaButton">Pizza</Button>
                </Link>
            </Navbar>
            </div>
        </div>
    )
}
