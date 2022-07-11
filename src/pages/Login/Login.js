import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';
//Hook đa ngôn ngữ
import { useTranslation } from 'react-i18next';


export default function Login(props) {

    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer);

    console.log('userLogin',userLogin)

    const formik = useFormik({
        initialValues: {
          taiKhoan: '',
          matKhau: '',
        },
        onSubmit: values => {

            const action = dangNhapAction(values);
            dispatch(action);

            console.log('values',values);
        },
      });


    return (
        <form onSubmit={formik.handleSubmit} className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div className="cursor-pointer flex items-center">
                    <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <img width={100} src="https://assets.glxplay.io/web/images/logoglx.svg" alt="hinhAnh" />
                    </NavLink>
                </div>
            </div>
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold">{t('login')}</h2>
                <div className="mt-12">
                    <div>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">{t('username')}</div>
                            <input name="taiKhoan" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"  placeholder={t('inputusername')} />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div  className="text-sm font-bold text-gray-700 tracking-wide">
                                {t('password')}
                                </div>
                                <div>
                                    <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                          cursor-pointer">
                                        {t('forgotpass')}
        </a>
                                </div>
                            </div>
                            <input type="password" name="matKhau" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"  placeholder={t('inputpass')} />
                        </div>
                        <div className="mt-10">
                            <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg">
                                {t('login')}
    </button>
                        </div>
                    </div>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                    {t('donthave')} <NavLink to="register" className="cursor-pointer text-indigo-600 hover:text-indigo-800">{t('register')}</NavLink>
                    </div>
                </div>
            </div>
        </form>
    )
}
