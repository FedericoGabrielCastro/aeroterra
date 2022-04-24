import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './HomePageStyle.module.css'

import logo from '../../assets/logoW.png'

import SearchPopup from '../../components/search/SearchPopup'
import CreatePoputForm from '../../components/createPoputForm/CreatePoputForm'
import LeafletMap from '../../components/LeafletMap/LeafletMap' 
import MapModal from '../../components/LeafletMap/MapModal'
import Toast from '../../components/Toast/Toast'

import { getCurrentLocationAction, getCurrentLocationErrorAction } from '../../redux/actions/getCurrentLocationAction'
import { setDataFormAction } from '../../redux/actions/setDataFormAction'

const HomePage = () => {

    const dispatch = useDispatch()
    
    const showModal = useSelector(store => store.showMapModalReducer) // Boolean to show map modal.

    useEffect(() => {
        dispatch(setDataFormAction())
        navigator.geolocation.getCurrentPosition(
            function (positon) {
                dispatch(getCurrentLocationAction({
                    lng: positon.coords.longitude,
                    lat: positon.coords.latitude
                }))
            },
            function (error) {
                dispatch(getCurrentLocationErrorAction(error))
            }
        )
    }, [dispatch])

    return (
        <Fragment>
            <Toast />
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