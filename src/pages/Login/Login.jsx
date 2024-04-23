import React,{useRef,useState} from 'react'
import css from './Login.module.css'
import md5 from 'md5'
import { NavLink,useNavigate } from 'react-router-dom'
import { loginAPI } from '../../api/login'


export default function Login() {
    // const [email,setEmail]=useState('')
    // const [password,setPassword]=useState('')
    let email=useRef('')
    let password=useRef('')
    const navigate=useNavigate()
    const handleLogin=()=>{
        // console.log(email.current.value,password.current.value)
        // console.log('send username and password')
        //这里如果成功就要自动跳转到dashboard页面
        loginAPI({email:email.current.value,password:password.current.value}).then(res=>{
            if (res.data.code===1003) {
                console.log('err: ',res.data.msg)
            }else if(res.data.code!==0) throw res
            else{
                navigate('/dashboard')
            }
        }).catch(err=>{
            console.log('err in login:',err)
        })
        // navigate('/dashboard')
    }
    return (
        <div className={css.container}>
            <div className={css.formcon}>

            
            <span>Log In</span>
            <form onSubmit={(e) => e.preventDefault()}>
                <input className={css.text} type="email" placeholder="Email" ref={email}/>
                <input className={css.text} type="password" placeholder="Password" ref={password}/>
                <div>
                    <button className={css.loginButton} onClick={handleLogin}>Sign In</button>
                    <NavLink to="/register" title={"Register"}>
                        <button className={css.signupButton}>No Account</button>
                    </NavLink>
                    
                </div>
                
            </form>
            </div>
        </div>
    )
}
