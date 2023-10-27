import './App.css';
import {Route,Routes} from "react-router-dom"
import TrangChu from './pages/trang_chu';
import NewsPage from './pages/newspage';
import ThanhToan from './item/thanh_toan';
import XuLyDangNhap from './pages/xuly-login';
import XuLyDangKy from './pages/xuly-register';
import XulyChiTietSanPham from './pages/xuly-chi_tiet_san_pham';
import GioHang from './pages/gio_hang';
function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<TrangChu/>}/>
        <Route path="/Newspage" element={<NewsPage/>}/>
        <Route path="/Product" element={<ThanhToan/>}/>
        <Route path="/GioHang" element={<GioHang/>}/>
        <Route path="/Login" element={<XuLyDangNhap/>}/>
        <Route path="/Register" element={<XuLyDangKy/>}/>
        <Route path="/ChiTietSanPham/:spID" element={<XulyChiTietSanPham/>}/>
      </Routes>
    </>
  );
}
export default App;
