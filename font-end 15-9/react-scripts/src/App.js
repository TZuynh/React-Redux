import './App.css';
import {Route,Routes} from "react-router-dom"
import TrangChu from './pages/trang_chu';
// import GioiThieu from './menu/gioithieu';
// import SanPham from './menu/sanpham';
// import TinTuc from './menu/tintuc';
// import LienHe from './menu/lienhe';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TrangChu/>}/>
        {/* <Route path="/gioi-thieu" element={<GioiThieu/>}/>
        <Route path="/san-pham" element={<SanPham/>}/>
        <Route path="/tin-tuc" element={<TinTuc/>}/>
        <Route path="/lien-he" element={<LienHe/>}/> */}
      </Routes>
    </>
  );
}

export default App;