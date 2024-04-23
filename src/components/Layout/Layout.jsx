import React from 'react'
import css from './Layout.module.css'
import moment from 'moment/moment'
import { BiSearch } from 'react-icons/bi'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet,useLocation,Navigate} from 'react-router-dom'
import { logoutAPI } from '../../api/login'

export default function Layout() {
  const {pathname}=useLocation()
  const handleClick=()=>{
    if(confirm('Are you sure you want to logout ?')){
      logoutAPI().then(res=>{
        if(res.data.code===0){
          console.log(res.data.msg)
        }
      }).catch(err=>{
        console.log('err in logout: ',err)
      })
      
    }
  }
  return (
    <div className={css.container}>
      <Sidebar/>
      {/* making the dashboard the default route */}
      {pathname==="/"&&<Navigate to="/dashboard"/>}
      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>

        </div>
        <div className={css.header}>
          <span>{moment().format("dddd, Do MMM YYYY")}</span>
          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder='Search' />
          </div>
          <div className={css.profile}>
            <img src="./profile.png" alt="person image" onClick={handleClick}/>
            <div className={css.detail}>
              <span>Danis Steven</span>
              <span>xxxxxxx@gmail.com</span>

            </div>
          </div>
        </div>
        <div className={css.content}>
            <Outlet/>
          </div>
      </div>


    </div>
  )
}
