import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom"
import * as yup from "yup"
import Header from "./components/Header";
import formSchema from "./components/formSchema";
import Home from "./components/Home";
import UserInfo from "./components/UserInfo";
import Pizza from "./components/Pizza";
import Continue from "./components/Continue";
import OrderConf from "./components/OrderConf";

const initialOrder = 
  {
    name: "",
    email: "",
    phone: "",
    totalItems: [
      {
        size: "Medium",
        pizzaCrust: "Hand Tossed",
        cheese: "Regular",
        toppings: {
          meats: {
            pepperoni: false,
            bacon: false,
            chicken: false,
            ham: false,
            sausage: false,
            italian: false,
            beef: false,
            salami: false,
            bbqChicken: false,
            bbqBrisket: false,
            bbqPork: false,
            bbqTrio: false,
            meatballs: false,
            sardines: false,
            anchovies: false,
            prawns: false,
            capers: false,
            tofu: false,
            chorizo: false,
            pastrami: false
          },
          veggies: {
            tomatoes: false,
            mushrooms: false,
            onions: false,
            blackOlives: false,
            greenOlives: false,
            greenPeppers: false,
            jalapenos: false,
            pineapple: false,
            basil: false,
            broccoli: false,
            chickpeas: false,
            artichoke: false,
            spinach: false,
            bannanaPepper: false,
            cauliflower: false,
            eggplant: false,
            buffMoz: false,
            ricota: false,
            feta: false,
            goat: false
          }
        },
        specIn: "",
        qty: 1,
      },
    ],
    total: 0
  }

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  size: "Medium",
  pizzaCrust: "Hand Tossed",
  cheese: "Regular",
  toppings: {
    meats: {
      pepperoni: false,
      bacon: false,
      chicken: false,
      ham: false,
      sausage: false,
      italian: false,
      beef: false,
      salami: false,
      bbqChicken: false,
      bbqBrisket: false,
      bbqPork: false,
      bbqTrio: false,
      meatballs: false,
      sardines: false,
      anchovies: false,
      prawns: false,
      capers: false,
      tofu: false,
      chorizo: false,
      pastrami: false
    },
    veggies: {
      tomatoes: false,
      mushrooms: false,
      onions: false,
      blackOlives: false,
      greenOlives: false,
      greenPeppers: false,
      jalapenos: false,
      pineapple: false,
      basil: false,
      broccoli: false,
      chickpeas: false,
      artichoke: false,
      spinach: false,
      bannanaPepper: false,
      cauliflower: false,
      eggplant: false,
      buffMoz: false,
      ricota: false,
      feta: false,
      goat: false
    }
  },
  specIn: "",
  qty: 1,
  total: 0
}

const initialFormErrors = {
  name: "",
  email: "",
  phone: "",
  size: "",
  pizzaCrust: "",
  cheese: ""
}

const initialDisabled = true;

const App = () => {

  const [currentOrder, setcurrentOrder] = useState(initialOrder);
  const [formData, setformData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [activeTab, setActiveTab] = useState('1');

  useEffect(() => {
    formSchema.isValid(formData)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formData])

  const onInputChange = event => {
    const { name } = event.target
    const { value } = event.target

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""})
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setformData({
      ...formData,
      [name]: value})
  }

  return (
    <div className="App container">
      <div className="wrapper container">
        <Header/>
        <div className="innerWrapper">
        <Switch>
          <Route exact path={`/`}>
            <Home></Home>
          </Route>
          <Route path={`/UserInfo`}> 
            <UserInfo></UserInfo>
          </Route>
          <Route path={`/Pizza`}>  
            <Pizza></Pizza>
          </Route>
          <Route path={`/Continue`}>  
            <Continue></Continue>
          </Route>
          <Route path={`/OrderConf`}>  
            <OrderConf></OrderConf>
          </Route>
        </Switch>
        </div>
      </div>
    </div>
  );
};
export default App;