import classNames from 'classnames'
import React from 'react'

import styles from './styles.module.scss'
const Loader = ({ innerClass }) => {
    return (
        <div className={classNames(styles.loader, innerClass)}>
            <span></span>
        </div>
    )
}

export default Loader