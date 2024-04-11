import React from 'react'
import css from './Layout.module.css'
import moment from 'moment/moment'
import {BiSearch} from 'react-icons/bi'

export default function Layout() {
  return (
    <div className={css.container}>
            <div>sidebar</div>
            <div className={css.dashboard}>
                <div className={css.topBaseGradients}>
                    <div className="gradient-red"></div>
                    <div className="gradient-orange"></div>
                    <div className="gradient-blue"></div>

                </div>
            </div>

            <div className={css.header}>
                <span>{moment().format("dddd, Do MMM YYYY")}</span>
                <div className={css.searchBar}>
                    <BiSearch size={20}/>
                    <input type="text" placeholder='Search'/>
                </div>
            </div>
    </div>
  )
}
