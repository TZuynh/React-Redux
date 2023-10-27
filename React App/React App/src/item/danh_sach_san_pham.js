import { NavLink} from "react-router-dom";
import SanPham from "./san_pham";
function DanhSachSanPham(props){
    const lstPd = props.pd.map(function(item){

        return(
            <>
                <SanPham data = {item}/>
            </>
        );
    });
    return(
        <>
        <div className="title_pd">
            <span className="type_name h3">{props.typename}</span>
         </div>
        <div className="wrapper-product">
            {lstPd}
        </div> 
        </>
    );
}
export default DanhSachSanPham;