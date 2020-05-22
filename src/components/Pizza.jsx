import React from 'react'
import ToppingsForm from "./ToppingsForm";
import { Link } from "react-router-dom";
import { Navbar, Button } from 'reactstrap';
import SpecialInstForm from "./SpecialInstForm";
export default function Pizza(props) {

    const {
        activeTab, 
        setActiveTab, 
        values,
        onInputChange,
        disabled,
        errors,
        onMeatsCheckboxChange,
        onVeggiesCheckboxChange
      } = props;

      const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
      }
    
    return (
        <div>
            <form>
            <label>Size:&nbsp;
                <select 
                    name="size" 
                    value={values.size} 
                    onChange={onInputChange}
                >
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="XL">XL</option>
                </select>
            </label>
            <br/>
            <label>Crust:&nbsp;
                <select 
                    name="pizzaCrust" 
                    value={values.pizzaCrust} 
                    onChange={onInputChange}
                >
                    <option value="Hand Tossed">Hand Tossed</option>
                    <option value="Deep Dish">Deep Dish</option>
                    <option value="Thin Crust">Thin Crust</option>
                </select>
            </label>
            <br/>
            <div>
                <label> Cheese: 
                    <br/>
                    <label>Regular
                        <input
                        type='radio'
                        name='cheese'
                        value='Regular'
                        onChange={onInputChange}
                        />
                    </label>
                    &nbsp;
                    &nbsp;
                    <label>Light
                        <input
                        type='radio'
                        name='cheese'
                        value='Light'
                        onChange={onInputChange}
                        />
                        </label>
                    &nbsp;
                    &nbsp;
                    <label>Extra
                        <input
                        type='radio'
                        name='cheese'
                        value='Extra'
                        onChange={onInputChange}
                        />
                    </label>
                </label>
            </div>
            <hr/>
            <ToppingsForm 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            values={values}
            disabled={disabled}
            errors={errors}
            onInputChange={onInputChange}
            onMeatsCheckboxChange={onMeatsCheckboxChange}
            onVeggiesCheckboxChange={onVeggiesCheckboxChange}
            />
            <SpecialInstForm
                onInputChange={onInputChange}></SpecialInstForm>
            </form>
            
            <Navbar className="nav nav-bar">
                <Link to="/UserInfo">
                    <Button className="userButton">User Info</Button>
                </Link>
                <Link to="/Continue">
                    <Button className="continue">Continue</Button>
                </Link>
            </Navbar>

        </div>
    )
}
