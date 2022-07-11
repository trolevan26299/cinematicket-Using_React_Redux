import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
export class QuanLyNguoiDungService  extends baseService{

    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }
    dangKy = (thongTinDangKy) => { // {taiKhoan:'',matKhau:'',email,soDt,maNhom,hoTen}
        return this.post(`/api/QuanLyNguoiDung/DangKy`,thongTinDangKy);
    }
    
    layThongTinNguoiDung = () => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }

    
  
}



export const quanLyNguoiDungService = new QuanLyNguoiDungService();
