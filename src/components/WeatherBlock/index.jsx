import React, { useCallback, useState } from 'react'

import { Input, NoData } from '../'
import { useDebounce } from '../../hooks'

import { axiosInstance } from '../../axios'
import { getIconUrl } from '../../utils'

import styles from './styles.module.scss'
import Loader from '../Loader'
const WeatherBlock = () => {
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const getWetherData = async () => {
        if (!city) {
            return
        }
        setLoading(true)
        try {

            const resp = await axiosInstance.get(`/data/2.5/weather?q=${city}`)
            if (resp.status === 200) {
                setData(resp.data)
            }
        } catch (error) {
            setData(false)
        }
        setLoading(false)
    }


    const onChangeCity = useCallback((e) => {
        setCity(e.target.value)
    }, [setCity])


    useDebounce(getWetherData, [city], 1000)


    return (
        <div className={styles.block}>
            <Input innerClass={styles.block__input} value={city} onChange={onChangeCity} placeholder="Enter city" search />


            {
                loading
                    ? <Loader innerClass={styles.block__loader} />
                    : data
                        ? <>
                            <h1>{data.name}</h1>
                            <div className={styles.block__list}>

                                {
                                    data.weather.map(el =>
                                        <div className={styles.block__weather} key={el.id}>
                                            <div className={styles.block__weatherIcon}>
                                                <img src={getIconUrl(el.icon)} alt={el.description} />
                                            </div>
                                            <div className={styles.block__weatherTitle}>
                                                {el.description}
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                            <div className={styles.data}>
                                <p>
                                    <strong>Temperature:</strong> {data.main.temp} °C
                                </p>
                                <p>
                                    <strong>Feels like:</strong> {data.main.feels_like} °C
                                </p>
                                <p>
                                    <strong>Pressure:</strong> {data.main.pressure} kPa
                                </p>
                                <p>
                                    <strong>Humidity: </strong> {data.main.humidity} %
                                </p>

                            </div>
                        </>
                        : <NoData />
            }

        </div>
    )
}

export default WeatherBlock