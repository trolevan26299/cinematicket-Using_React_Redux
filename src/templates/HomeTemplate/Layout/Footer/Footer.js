import {TwitterSquareFilled, FacebookFilled ,YoutubeFilled,InstagramFilled } from '@ant-design/icons'
import _ from 'lodash'
import React from 'react'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';


export default function Footer(props) {
    const { t, i18n } = useTranslation();

    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);
   
    const arrHeThongRap = _.map(heThongRapChieu,(heThongRap) => _.pick(heThongRap,['maHeThongRap','tenHeThongRap','logo']));

    
    return (
        <footer className="py-6 bg-coolGray-100 text-coolGray-900 bg-gray-800">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6  md:pb-0 col-span-full md:col-span-5 ">
                        <a href="#" className="flex justify-center space-x-3 md:justify-start text-black">
                           
                            <img width={200} src="https://assets.glxplay.io/web/images/logoglx.svg" alt="logo.vn"/>
                        </a>
                    </div>
                    
                    <div className="col-span-6  md:text-left md:col-span-4 ">
                        <p className="pb-1 text-lg text-center pr-20 font-medium text-white font-mono ">{t('partner')}</p>
                        <div className="grid grid-cols-3" style={{color:'#fff'}}>
                            {arrHeThongRap.map((htr,index) => {
                                return <div key={index}>
                                <img className='mt-1' src={htr.logo} style={{width:50}} />
                            </div>
                            })}
                        </div>
                    </div>
                    <div className="col-span-6  text-center md:text-left md:col-span-3 text-white">
                        <p className="pb-1 text-lg font-medium font-mono">{t('social')}</p>
                        <div className="flex text-white">
                            <div className="mr-5 cursor-pointer">
                            <TwitterSquareFilled className="text-2xl" /> 
                            </div>
                            <div className="mr-5 cursor-pointer">
                            <FacebookFilled className="text-2xl"/>
                            </div>
                            <div className="mr-5 cursor-pointer">
                            <YoutubeFilled className="text-2xl"/>
                            </div>
                            <div className="mr-5 cursor-pointer">
                            <InstagramFilled className="text-2xl"/>
                            </div>
                          
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>

    )
}
