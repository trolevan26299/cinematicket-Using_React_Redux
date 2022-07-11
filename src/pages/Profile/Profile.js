import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
//Hook đa ngôn ngữ
import { useTranslation } from 'react-i18next';

function KetQuaDatVe(props) {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);


    useEffect(() => {
        const action = layThongTinNguoiDungAction();
        dispatch(action)
    }, [])

    console.log('thongTinNguoiDung', thongTinNguoiDung);

    const renderTicketItem = function () {
        return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
            const seats = _.first(ticket.danhSachGhe);

            return <div className="p-2  lg:w-1/3 md:w-1/2 w-full " key={index}>
                <div className="h-full flex items-center border-gray-200 border bg-yellow-100 p-2 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
                    <div className="flex-grow">
                        <h2 className="text-pink-500 title-font font-medium text-2xl">{ticket.tenPhim}</h2>
                        <p className="text-gray-500"><span className="font-bold">{t('showtime')}:</span> {moment(ticket.ngayDat).format('hh:mm A')} - <span className="font-bold">{t('showdate')}:</span>  {moment(ticket.ngayDat).format('DD-MM-YYYY')} .</p>
                        <p><span className="font-bold">{t('address')}:</span> {seats.tenHeThongRap}   </p>
                        <p>
                            <span className="font-bold">{t('cinemaname')}:</span>  {seats.tenCumRap} - <span className="font-bold">{t('seat')}:</span>  {ticket.danhSachGhe.map((ghe, index) => { return <span className="text-green-500 text-xl" key={index}> [ {ghe.tenGhe} ] </span> })}
                        </p>
                    </div>
                </div>
            </div>
        })
    }

    return <div className="p-3 font-mono">

        <section className="text-gray-600 body-font ">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-8">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font   text-yellow-500 ">{t('bookthistory')} :</h1>
                </div>
                <div className="flex flex-wrap -m-2">
                    {renderTicketItem()}
                </div>
            </div>
        </section>

    </div>
}

function InfoProfile(props) {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);


    const soVeDaDat=_.size(thongTinNguoiDung?.thongTinDatVe)

    useEffect(() => {
        const action = layThongTinNguoiDungAction();
        dispatch(action)
    }, [])
    return <div className='border border-4 border-yellow-500 rounded-md   w-1/2 m-auto py-5 font-mono '>
         <h1 className="sm:text-3xl text-center text-2xl  font-medium title-font   text-yellow-500 ">{t('profileInfo')}</h1>
    <div className="m-auto max-w-xl p-4 sm:flex sm:space-x-6 bg-yellow-50 text-gray-800 flex justify-items-center">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src="https://i.pravatar.cc/300" alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-1 ">
                    <div>
                        <h2 className=" font-semibold text-xl">{t('account')}: <span className='text-lg font-normal'>{thongTinNguoiDung?.taiKhoan}</span> </h2>
                        <h2 className=" font-semibold text-xl">{t('password')}: <span className='text-lg font-normal'>{thongTinNguoiDung?.matKhau}</span> </h2>
                        <h2 className=" font-semibold text-xl">{t('fullname')}: <span className='text-lg font-normal'>{thongTinNguoiDung?.hoTen}</span> </h2>
                        <h2 className=" font-semibold text-xl">{t('memberpoint')}: <span className='text-lg font-normal'>{soVeDaDat}</span> </h2>
                        <h2 className=" font-semibold text-xl">Email: <span className='text-lg font-normal'> {thongTinNguoiDung?.email}</span> </h2>

                    </div>
                </div>
    </div>
    </div>
}

export default function Profile() {
    return (
        <div className='grid pt-28 '>
            <InfoProfile />
            <KetQuaDatVe />
        </div>
    )
}
