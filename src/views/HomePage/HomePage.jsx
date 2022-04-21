import React, { lazy, Suspense, Fragment } from 'react'
import styles from './HomePageStyle.module.css'

import logo from '../../assets/logoW.png'

import SearchPopup from '../../components/search/SearchPopup'
import CreatePoputForm from '../../components/createPoputForm/CreatePoputForm'
import LeafletMap from '../../components/LeafletMap/LeafletMap' 

const HomePage = () => {
    return (
        <Fragment>
            <header className={styles.headerContent}>
                <nav>
                    <img src={logo} alto="logo" className={styles.appLogo}/>
                </nav>
            </header>
            <main className={styles.mainContent}>
                <section className={styles.searchAndMapContainer}>
                    <article className={styles.searchContent}>
                        <SearchPopup />
                    </article>
                    <article className={styles.mapContent}>
                        <LeafletMap />
                    </article>
                </section>
                <aside>
                    <CreatePoputForm />
                </aside>
            </main>
        </Fragment>
    )
}

export default HomePage