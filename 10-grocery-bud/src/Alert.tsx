import React from 'react'
import {TAlert} from "./modules";

const Alert = ({alert}: {alert: TAlert}) => {

    return (
        <p className={`alert ${alert.type}`}>
            {alert.msg}
        </p>
    )
}

export default Alert
