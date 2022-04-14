import React from 'react'

import { cloud } from '../../assets'

import styles from './styles.module.scss'
const NoData = () => {
    return (
        <div className={styles.noData}>
            <img src={cloud} alt="sad cloud" />
            <strong>
                No data
            </strong>
        </div>
    )
}

export default NoData