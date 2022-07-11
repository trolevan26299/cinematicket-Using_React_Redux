import React, { useEffect, useState } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
//Kết nối redux
import { useSelector, useDispatch } from 'react-redux'
import Film from '../../components/Film/Film';
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapActions';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
//Hook đa ngôn ngữ
import { useTranslation } from 'react-i18next';

export default function Home(props) {
    const { t, i18n } = useTranslation();
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();
    console.log('propsHome', arrFilm);

    
    // props.match.params
    // const renderFilms = () => {
    //     return arrFilm.map((phim, index) => {
    //         return <Film key={index} />


    //     })
    // }

    useEffect(()=>{
        const action = layDanhSachPhimAction();
        dispatch(action); //dispatch function từ thunk

        dispatch(layDanhSachHeThongRapAction());

    },[])
    
    return (
        <div>
            <HomeCarousel />

            <section className="text-gray-600 body-font" >
                <div className="container px-24 py-12 mx-auto " >
                    <h2 className='text-center text-4xl pb-5 text-yellow-500 font-mono font-bold'>{t('newfilm')} </h2>
                    <MultipleRowSlick arrFilm={arrFilm}/>
                </div>
            </section>

            <div className="mx-36">
                <HomeMenu  heThongRapChieu={heThongRapChieu}/>

            </div>
        </div>
    )
}
