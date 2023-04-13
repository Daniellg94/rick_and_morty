import { useState } from "react"
import Validations from "../Validations/Validations"
import styles from "./styleForms.module.css"
import Formimg from './Formimg.webp'



const Form = ({login,}) => {

    const [userData,setUserData]= useState({
        email:'',
        password:''
    })
    
    const [errors,setErrors]= useState({
        email:'',
        password:''
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            Validations({
                ...userData,
                [event.target.name]: event.target.value
            }
            )
        )
    }
    
    const handleSumit = (event) => {
        event.preventDefault()
        login(userData)
    } 


    console.log(errors.email)
    return (
        <form onSubmit={handleSumit} className={styles.container}>
            <img src={Formimg} alt="" />
        <label htmlFor="email">Email</label>
        <input type="email" value={userData.email} name="email" placeholder="ingresa tu email" onChange={handleChange}/>
        {errors.email && <p>{errors.email}</p>}
        <br />
        <label htmlFor="password" >password</label>
        <input type="password" value={userData.password} name="password" placeholder="ingresa tu password" onChange={handleChange}/>
       <br />
       {errors.password && <p>{errors.password}</p>}
        <button type="submit" disabled={!userData.email || !userData.password || errors.email || errors.password}>submit</button>
        </form>
    )
}
export default Form