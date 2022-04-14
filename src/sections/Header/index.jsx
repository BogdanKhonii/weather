import React from 'react'
import { Sun } from '../../assets'

import styles from './styles.module.scss'
const Header = () => {

    return (
        <header className={styles.header}>
            <div className="container">

                <div className={styles.header__logo}>
                    <Sun /> Weather
                </div>
            </div>
        </header>
    )
}

export default Header