<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

$tintuc = [
  [
    'namepage'=> 'Tin Tức Về Giày',
    'lstpages'=> [
      [
        'hinh_anh'=> '/adidas1.jpg',
        'mota'=> 'ADIDAS BLUE giảm giá 10%',
      ],
      [
        'hinh_anh'=> '/adidas2.jpg',
        'mota'=> 'ADIDAS RED tăng vọt 40% số lượng bán',
      ],
      [
        'hinh_anh'=> '/adidas1.jpg',
        'mota'=> 'ADIDAS BLUE 2 bán chạy sau khi mẫu 1 ra mắt',
      ],    
      [
        'hinh_anh'=> '/adidas1.jpg',
        'mota'=> 'ADIDAS BLUE 4 vừa mới ra mắt tháng này',
      ],
      [
        'hinh_anh'=> '/adidas1.jpg',
        'mota'=> 'ADIDAS BLUE 5 hàng loạt mẫu mới ra mắt',
      ],
      [
        'hinh_anh'=> '/adidas1.jpg',
        'mota'=> 'ADIDAS BLUE 15 đánh bại mẫu 1 lên top',
      ],
      [
        'hinh_anh'=> '/adidas1.jpg',
        'mota'=> 'ADIDAS BLUE 16 bán chạy',
      ],
    ]
  ],
  [
    'namepage'=> 'Tin Tức Về Quần Áo',
    'lstpages'=> [
      [
        'hinh_anh'=> '/adidas4.jpg',
        'mota'=> 'ADIDAS SHIRT BLACK Bla bla',
      ],
      [
        'hinh_anh'=> '/adidas5.jpg',
        'mota'=> 'ADIDAS SHIRT ORANGE ble ble',
      ],
      [
        'hinh_anh'=> '/adidas11.jpg',
        'mota'=> 'ADIDAS SHIRT BLACK blu blu',
      ],
      [
        'hinh_anh'=> '/adidas12.jpg',
        'mota'=> 'ADIDAS SHIRT BLACK bli bli',
      ],
      [
        'hinh_anh'=> '/adidas13.jpg',
        'mota'=> 'ADIDAS SHIRT BLACK blo blo',
      ],
      [
        'hinh_anh'=> '/adidas14.jpg',
        'mota'=> 'ADIDAS SHIRT WHITE blp blp',
      ],
      [
        'hinh_anh'=> '/adidas15.jpg',
        'mota'=> 'ADIDAS SHIRT WHITE blj blj',
      ]
    ]
  ]
];

echo json_encode($tintuc);