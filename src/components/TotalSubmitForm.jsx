import React from 'react'
import { Button } from 'reactstrap'

export default function TotalSubmitForm(props) {

    const {
        values,
        onInputChange,
        onSubmit,
        disabled
      } = props

    return (
        <div className="container">
            <form className="form container" onSubmit={onSubmit}>
                <label>QTY:&nbsp;
                    <select 
                        name="qty" 
                        value={values.qty} 
                        onChange={onInputChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                &nbsp;
                <div className="total">
                    Total: {`FUCK YES`}
                </div>
                <br/>
                <Button disabled={disabled} className="submitOder">Submit Order</Button>
            </form>
        </div>
    )
}
