

import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function Loading(props) {

    const { isLoading } = useSelector(state => state.LoadingReducer);


    return (
        <Fragment>
            {isLoading ?
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
                    <img src='https://azgroup.co/wp-content/uploads/2022/03/animated-unscreen.gif' alt='loading'/>
                </div> : ''

            }
        </Fragment>
    )
}
