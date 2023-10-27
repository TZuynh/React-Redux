import SanPham from "./san_pham";

function LoaiSanPham(){
    const SanPhams = [
    {
        typename:'Loai san pham 1',
        pd:[
        {
            hinh_anh: 'Adidas1',
            ten:'San pham 11',
            gia: 5000
        },
        {
            hinh_anh: 'Adidas2',
            ten:'San pham 12',
            gia: 5000
        }
        ]
    },
    {
        typename:'Loai san pham 2',
        pd:[
        {
            hinh_anh: 'Adidas3',
            ten:'San pham 21',
            gia: 5000
        },
        {
            hinh_anh: 'Adidas4',
            ten:'San pham 22',
            gia: 5000
        }
        ]
    }
    ]
    const lstSP = SanPhams.map(function(item){
        return(
            <SanPham typename={item.typename} pd={item.pd}/>
        );
    });
    return(
        <>
        {lstSP}
        </>
    );
};
export default LoaiSanPham;