import Header from "./header";
import Footer from "./footer";
import LoaiSanPham from "../item/loai_san_pham";
import Banner from "./banner";
function TrangChu()
{    
    return(
    <>
        <div className="main">
            <Header/>
            <Banner/>
            <LoaiSanPham/>
            <Footer/>
        </div> 
    </>
    );
}
export default TrangChu;