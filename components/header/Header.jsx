import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className = {css.container}>
      <div className={css.logo}>
        <img src={Logo}  alt=""/>
        <span>amazon</span>
      </div>


      <div className={css.right}>
        <div className={css.menu}>
          menu
        </div>


        <input type="text" className={css.search} />

        <span>PNG icon of start </span>
      </div>
    </div>

    
  
  )
}

export default Header