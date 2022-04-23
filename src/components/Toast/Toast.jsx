import React from 'react'
import { Toaster } from 'react-hot-toast'

const Toast = () => {
    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}/>
        </div>
    )
}

export default Toast