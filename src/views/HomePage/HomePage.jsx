import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import styles from './HomePageStyle.module.css'

import logo from '../../assets/logoW.png'

import SearchPopup from '../../components/search/SearchPopup'
import CreatePoputForm from '../../components/createPoputForm/CreatePoputForm'
import LeafletMap from '../../components/LeafletMap/LeafletMap' 
import MapModal from '../../components/LeafletMap/MapModal'

const HomePage = () => {

    const showModal = useSelector(store => store.showMapModalReducer) // Boolean.

    return (
        <Fragment>
            { showModal ? <MapModal /> : null }
            <header className={styles.headerContent}>
                <nav>
                    <img src={logo} alt="logo" className={styles.appLogo}/>
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