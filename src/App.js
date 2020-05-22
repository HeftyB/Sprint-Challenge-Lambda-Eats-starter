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
    totalItems: [
    ],
    total: 0
  }

const initialUser = {
  name: "",
  email: "",
  phone: ""
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
  const [currentUser, setcurrentUser] = useState(initialUser);
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

  const onSubmitUser = event => {
    event.preventDefault()

    const newUser = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    }

    setcurrentUser({...newUser})
  }

  const onSubmitPizza = event => {
    event.preventDefault()

    const newItem = {
      size: formData.size,
      pizzaCrust: formData.pizzaCrust,
      cheese: formData.cheese,
      toppings: {
        meats: {
          pepperoni: formData.toppings.meats.pepperoni,
          bacon: formData.toppings.meats.bacon,
          chicken: formData.toppings.meats.chicken,
          ham: formData.toppings.meats.ham,
          sausage: formData.toppings.meats.sausage,
          italian: formData.toppings.meats.itialian,
          beef: formData.toppings.meats.beef,
          salami: formData.toppings.meats.salami,
          bbqChicken: formData.toppings.meats.bbqChicken,
          bbqBrisket: formData.toppings.meats.bbqBrisket,
          bbqPork: formData.toppings.meats.bbqPork,
          bbqTrio: formData.toppings.meats.bbqTrio,
          meatballs: formData.toppings.meats.meatballs,
          sardines: formData.toppings.meats.sardines,
          anchovies: formData.toppings.meats.anchovies,
          prawns: formData.toppings.meats.prawns,
          capers: formData.toppings.meats.capers,
          tofu: formData.toppings.meats.tofu,
          chorizo: formData.toppings.meats.chorizo,
          pastrami: formData.toppings.meats.pastrami
        },
        veggies: {
          tomatoes: formData.toppings.veggies.tomatoes,
          mushrooms: formData.toppings.veggies.mushrooms,
          onions: formData.toppings.veggies.onions,
          blackOlives: formData.toppings.veggies.blackOlives,
          greenOlives: formData.toppings.veggies.greenOlives,
          greenPeppers: formData.toppings.veggies.greenPeppers,
          jalapenos: formData.toppings.veggies.jalapenos,
          pineapple: formData.toppings.veggies.pineapple,
          basil: formData.toppings.veggies.basil,
          broccoli: formData.toppings.veggies.broccoli,
          chickpeas: formData.toppings.veggies.chickpeas,
          artichoke: formData.toppings.veggies.artichoke,
          spinach: formData.toppings.veggies.spinach,
          bannanaPepper: formData.toppings.veggies.bannanaPepper,
          cauliflower: formData.toppings.veggies.cauliflower,
          eggplant: formData.toppings.veggies.eggplant,
          buffMoz: formData.toppings.veggies.buffMoz,
          ricota: formData.toppings.veggies.ricota,
          feta: formData.toppings.veggies.feta,
          goat: formData.toppings.veggies.goat
        }
      },
      specIn: formData.specIn,
      qty: formData.qty,
      total: 0

    }
    setcurrentOrder({...currentOrder, 
      totalItems: 
        [...currentOrder.totalItems, 
        newItem]})
  }
  
    const onMeatsCheckboxChange = event => {
    const { name } = event.target
    const { checked } = event.target

    setformData({
      ...formData,
      toppings: {
        ...formData.toppings,
        meats: {
          ...formData.toppings.meats, [name]: checked,
        }
      }
    })
  }

  const onVeggiesCheckboxChange = event => {
    const { name } = event.target
    const { checked } = event.target

    setformData({
      ...formData,
      toppings: {
        ...formData.toppings,
        veggies: {
          ...formData.toppings.veggies, [name]: checked,
        }
      }
    })
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
            <UserInfo
              values={formData}
              disabled={disabled}
              errors={formErrors}
              onInputChange={onInputChange}
              onSubmitPizza={onSubmitPizza}
              onSubmitUser={onSubmitUser}
              onMeatsCheckboxChange={onMeatsCheckboxChange}
              onVeggiesCheckboxChange={onVeggiesCheckboxChange}
              ></UserInfo>
          </Route>
          <Route path={`/Pizza`}>  
            <Pizza
              activeTab={activeTab} 
              setActiveTab={setActiveTab}
              values={formData}
              disabled={disabled}
              errors={formErrors}
              onInputChange={onInputChange}
              onMeatsCheckboxChange={onMeatsCheckboxChange}
              onVeggiesCheckboxChange={onVeggiesCheckboxChange}></Pizza>
          </Route>
          <Route path={`/Continue`}>  
            <Continue
              values={formData}
              disabled={disabled}
              errors={formErrors}
              onInputChange={onInputChange}
              onSubmitPizza={onSubmitPizza}
              onSubmitUser={onSubmitUser}
              onMeatsCheckboxChange={onMeatsCheckboxChange}
              onVeggiesCheckboxChange={onVeggiesCheckboxChange}></Continue>
          </Route>
          <Route path={`/OrderConf`}>  
            <OrderConf
              currentOrder={currentOrder}
              currentUser={currentUser}></OrderConf>
          </Route>
        </Switch>
        </div>
      </div>
    </div>
  );
};
export default App;