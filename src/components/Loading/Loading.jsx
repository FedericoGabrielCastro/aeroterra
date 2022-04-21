import React from 'react'
import styles from './LoadingStyle.module.css'

// Just a simple loading spinner.
const Loading = () => {
    return (
        <div className={styles.positionLoading}>
            <div className={styles.simlpleLoading} />
        </div>
    )
}

export default Loading