import {useEffect} from 'react';
import { useState } from "react";
import DanhSachSanPham from "./danh_sach_san_pham";
function LoaiSanPham(){
    
    //Du lieu
    const [dsloaisp, setdsloaisp] = useState([]) 
    useEffect(() =>{
        async function getDatFromAPI(){
            var response = await fetch('http://localhost:8000/api/loai-san-pham/danh-sach');
            var json = await response.json();
            setdsloaisp(json.data);
        }
        getDatFromAPI();
    }, []);   
    const lstSP = dsloaisp.map(function(item){
        return(
            <>
            <DanhSachSanPham typename={item.ten_loai_san_pham} pd={item.ds_san_pham}/>
            </>
        );
          
    });
    return(
        <>
        <div className="lstSPALL">
            {lstSP}
        </div>
        </>
    );
};
export default LoaiSanPham;