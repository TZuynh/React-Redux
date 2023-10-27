import Avatar from './avatar'
import HoTen from './ho_ten';
import LoaiThanhVien from './loai_thanh_vien';
import NgayThamGia from './ngay_tham_gia';


function TheThanhVien(props) {
    return (
      <div className="wrapper">
        <Avatar url={props.member.avatar} />
        <HoTen ho_ten={props.member.ho_ten} />
        <LoaiThanhVien ten_loai={props.member.loai_tv} />
        <NgayThamGia ngay={props.member.ngay_tg} />
      </div>
    );
}

export default TheThanhVien;