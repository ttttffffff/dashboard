import React,{useRef} from 'react'
import css from './Register.module.css'
import { registerAPI } from '../../api/login'
import { NavLink,useNavigate } from 'react-router-dom'

export default function Register() {
    let email=useRef('')
    let password=useRef('')
    const navigate=useNavigate()
    const handleSignup=()=>{
        console.log(email.current.value,password.current.value)
        
        registerAPI({email:email.current.value,password:password.current.value}).then(res=>{
            console.log(res)
            if(res.data.code!==0){
                throw res
            }
            else{
                // console.log('sign up ok! ')
                navigate('/login')

            }
        }).catch(err=>{
            console.log('err in register:',err)
        })
    }
    return (
        <div className={css.container}>
            <div className={css.formcon}>
            <span>Register</span>
            <form onSubmit={(e) => e.preventDefault()}>
                <input className={css.text} type="email" placeholder="Email" ref={email}/>
                <input className={css.text} type="password" placeholder="Password" ref={password}/>
                <button className={css.loginButton} onClick={handleSignup}>Sign Up</button>
            </form>
            </div>
        </div>
    )
}
