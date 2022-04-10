import React from "react"
import {Header} from '../components/Header'
import { QrScanner } from '../components/QrScanner'
import { Fragment } from 'react'

const HomePage = () => {
    return (
        <Fragment>
            <Header/>
            <QrScanner/>
        </Fragment>
    )
}

export default HomePage