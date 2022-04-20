import React, { Fragment } from 'react'
import styles from './HomePageStyle.module.css'

import logo from '../../assets/logoW.png'

const HomePage = () => {
    return (
        <Fragment>
            <header className={styles.headerContent}>
                <nav>
                    <img src={logo} alto="logo" className={styles.appLogo}/>
                </nav>
            </header>
            <main className={styles.mainContent}>
                <section>
                    <article>
                        search
                    </article>
                    <article>
                        Map
                    </article>
                </section>
                <aside>
                    Form
                </aside>
            </main>
        </Fragment>
    )
}

export default HomePage