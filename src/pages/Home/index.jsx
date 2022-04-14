import React, { useCallback, useState } from 'react'
import { WeatherBlock } from '../../components'



import styles from './styles.module.scss'
const Home = () => {


    return (
        <section className={styles.home}>

            <div className='container'>
                <WeatherBlock />
            </div>
        </section>
    )
}

export default Home