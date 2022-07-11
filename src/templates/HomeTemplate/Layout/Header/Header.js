import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../../../App';
import { Select } from 'antd';
import {UserOutlined} from '@ant-design/icons'

//Hook đa ngôn ngữ
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config';

const { Option } = Select;


export default function Header(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    const { t, i18n } = useTranslation();


    const handleChange = (value) => {
        i18n.changeLanguage(value)
    }


    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <button onClick={() => {
                    history.push('/login')
                }} className="self-center px-4 py-3 rounded font-mono font-bold hover:text-yellow-500">{t('signin')}</button>
                <button onClick={() => {
                    history.push('/register')
                }} className="self-center px-8 py-3 font-mono rounded font-bold bg-violet-600 text-coolGray-50 hover:text-yellow-500" >{t('signup')}</button>

            </Fragment>
        }


        return <Fragment> <button onClick={() => {
            history.push('/profile')
        }} className="self-center px-2 py-3  font-mono rounded font-bold  bg-yellow-500 flex items-center hover:bg-yellow-400 transtion "> <UserOutlined className='px-2' style={{ fontSize: '20px', color: '#fff' }} /> {userLogin.taiKhoan.toUpperCase()}</button>
            <button onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                history.push('/home');
                window.location.reload();
            }} className="text-yellow-500 mr-5 font-mono font-bold px-2">{t('logout')}</button>
        </Fragment>
    }
    return (
        <header className="p-4  bg-coolGray-100 text-coolGray-800  bg-gray-800 text-white fixed w-full z-10" >
            <div className="container flex justify-between h-12 mx-auto">
                <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img width={100} src="https://assets.glxplay.io/web/images/logoglx.svg" alt="hinhAnh" />
                </NavLink>
                <ul className="items-stretch mt-2 ml-56 hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" className=" font-mono text-lg text-yellow-500 flex items-center -mb-0.5 border-b-2  px-4 border-transparent text-violet-600 border-violet-600 " activeClassName="border-b-2 border-yellow-500">{t('home')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className=" font-mono text-lg text-yellow-500 flex items-center -mb-0.5 border-b-2  px-4 border-transparent " activeClassName="border-b-2 border-yellow-500">{t('contact')}</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">

                    {renderLogin()}




                    <Select defaultValue="en" className='font-mono' style={{ width: 100 }} onChange={handleChange}>
                        <Option value="en"  className='font-mono'>Eng</Option>
                        <Option value="vi"  className='font-mono'>Vi</Option>
                    </Select>

                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>


                {/* {t('hello.2')} */}
            </div>
        </header>

    )
}
