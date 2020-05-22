import * as yup from "yup"

const formSchema = yup.object().shape({
    name: yup.string()
      .trim()
      .min(2, "Your name must be at least two characters long")
      .required("The name is a required field"),
    email: yup.string()
      .email("The email must be a valid email address")
      .required("The email is a required field"),
    phone: yup.number()
      .min(10, "The phone number must be at least 10 characters")
      .required("The phone number is a required field"),
    size: yup.string()
      .required("Size is a required field"),
    pizzaCrust: yup.string()
      .required("Crust is a required field"),
    cheese: yup.string()
      .required("Cheese is a required field"),
    specIn: yup.string(),
    qty: yup.string()
  })
  
  export default formSchema