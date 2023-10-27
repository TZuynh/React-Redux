import './App.css';
import TheThanhVien from './components/the_thanh_vien';

const members = [
  {
    avatar: "avatars/user1.png",
    ho_ten: "TRẦN THANH TUẤN",
    loai_tv: "VIP",
    ngay_tg: "07/9/2023"
  },
  {
    avatar: "avatars/user2.png",
    ho_ten: "NGUYỂN VĂN A",
    loai_tv: "VVIP",
    ngay_tg: "05/9/2023"
  },
  {
    avatar: "avatars/user3.png",
    ho_ten: "NGUYỂN VĂN B",
    loai_tv: "NORMAL",
    ngay_tg: "01/9/2023"
  }
];

function App() {
  const listMembers = members.map(function(item){
    return (
      <TheThanhVien member={item}/>
    );
  });

  return (
    <>
    {listMembers}
    </>
  );
}

export default App;