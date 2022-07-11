import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung"
import { DANG_KY_ACTION, DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDungType";
import {history} from '../../App'
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";
import Swal from 'sweetalert2'


export const dangNhapAction = (thongTinDangNhap) => {



    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);


            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                });
             
                //Chuyển hướng đăng nhập về trang trước đó
                history.push("/");
            }

            console.log('result', result);

        } catch (error) {
            
            console.log('error', error.response.data);
        }

    }

}
export const dangKyAction = (thongTinDangKy) => {



    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);


            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_KY_ACTION,
                    thongTinDangKy: result.data.content
                });
                let timerInterval
                Swal.fire({
                  title: 'ĐĂNG KÝ THÀNH CÔNG!',
                  html: 'Vui lòng đăng nhập để tiếp tục ! <b></b> ',
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                      b.textContent = Swal.getTimerLeft()
                    }, 100)
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
                }).then((result) => {
                  //Chuyển hướng đăng nhập về trang trước đó
                history.push("/login");
                })
                
            }

            console.log('result', result);

        } catch (error) {
            
            console.log('error', error.response.data);
        }

    }

}





export const layThongTinNguoiDungAction = (thongTinDangNhap) => {



    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();


            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });

            }

            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}
