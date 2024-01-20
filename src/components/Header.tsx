import React from "react"
import Name from "./Name"
import styles from '../styles/components/Header.module.scss'

const Header: React.FC = () => {

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Name name="Accounts" style="bw" path='/'/>
        <Name name="Profiles" style="pu" path='/profile'/>
        <Name name="Compaigns" style="aq"path='/compaign' />
      </div>
    </div>
  )
}

export default Header