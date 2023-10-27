<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

$dsLoaiSanPham = [
  [
    'typename'=> 'ADIDAS SNEAKER',
    'pd'=> [
      [
        'hinh_anh'=> '/adidas1.jpg',
        'ten'=> 'ADIDAS BLUE',
        'gia'=> 10000
      ],
      [
        'hinh_anh'=> '/adidas2.jpg',
        'ten'=> 'ADIDAS RED',
        'gia'=> 15000
      ],
      [
        'hinh_anh'=> '/adidas1.jpg',
        'ten'=> 'ADIDAS BLUE 2',
        'gia'=> 12000
      ],
      [
        'hinh_anh'=> '/adidas1.jpg',
        'ten'=> 'ADIDAS BLUE 3',
        'gia'=> 13000
      ],
      [
        'hinh_anh'=> '/adidas1.jpg',
        'ten'=> 'ADIDAS BLUE 4',
        'gia'=> 14600
      ],
      [
        'hinh_anh'=> '/adidas1.jpg',
        'ten'=> 'ADIDAS BLUE 5',
        'gia'=> 12000
      ],
      [
        'hinh_anh'=> '/adidas1.jpg',
        'ten'=> 'ADIDAS BLUE 15',
        'gia'=> 15000
      ],
      [
        'hinh_anh'=> '/adidas1.jpg',
        'ten'=> 'ADIDAS BLUE 16',
        'gia'=> 15000
      ],
      [
        'hinh_anh'=> '/adidas1.jpg',
        'ten'=> 'ADIDAS BLUE 17',
        'gia'=> 15000
      ]
    ]
  ],
  [
    'typename'=> 'ADIDAS SHIRT',
    'pd'=> [
      [
        'hinh_anh'=> '/adidas4.jpg',
        'ten'=> 'ADIDAS SHIRT BLACK',
        'gia'=> 30000
      ],
      [
        'hinh_anh'=> '/adidas5.jpg',
        'ten'=> 'ADIDAS SHIRT ORANGE',
        'gia'=> 40000
      ],
      [
        'hinh_anh'=> '/adidas11.jpg',
        'ten'=> 'ADIDAS SHIRT BLACK',
        'gia'=> 35000
      ],
      [
        'hinh_anh'=> '/adidas12.jpg',
        'ten'=> 'ADIDAS SHIRT BLACK',
        'gia'=> 36000
      ],
      [
        'hinh_anh'=> '/adidas13.jpg',
        'ten'=> 'ADIDAS SHIRT BLACK',
        'gia'=> 31000
      ],
      [
        'hinh_anh'=> '/adidas14.jpg',
        'ten'=> 'ADIDAS SHIRT WHITE',
        'gia'=> 32000
      ],
      [
        'hinh_anh'=> '/adidas15.jpg',
        'ten'=> 'ADIDAS SHIRT WHITE',
        'gia'=> 53000
      ]
    ]
  ]
];

echo json_encode($dsLoaiSanPham);