import classNames from 'classnames'
import React from 'react'
import { Search } from '../../assets'

import styles from './styles.module.scss'

const Input = ({ type = "text", search = false, innerClass, ...props }) => {
    return (
        <div className={classNames(styles.input, innerClass, { [styles.icon]: search })}>
            {
                search && <Search />
            }
            <input type={type} {...props} />

        </div>
    )
}

export default Input