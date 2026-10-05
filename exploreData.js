const EXPLORE_DATA = [
  {
    id: "soft",
    title: "Soft Day",
    description: "Soft waves + minimal makeup + comfortable minimalist outfit.",
    tags: ["Everyday", "Casual"],
    lookImageText: "SOFT DAY",
    imageUrl: "https://i.pinimg.com/736x/da/93/ee/da93ee53682c86632d1aa8f34063a213.jpg",
    components: {
      hair: {
        id: "hair_002",
        name: "Soft Long Layers",
        desc: "gentle layers and movement"
      },
      makeup: {
        id: "makeup_001",
        name: "Soft Everyday Glow",
        desc: "radiant and natural"
      },
      outfit: {
        id: "outfit_005",
        name: "Korean Minimalist",
        desc: "clean lines and neutral tones"
      }
    },
    products: [
      { name: "Máy uốn tóc 32mm", price: "Từ ₫250,000", shopee: "https://shopee.vn/search?keyword=máy%20uốn%20tóc%2032mm", tiktok: "https://shop.tiktok.com/view/search?keyword=máy%20uốn%20tóc%2032mm" },
      { name: "Kem chống nắng Glow", price: "Từ ₫180,000", shopee: "https://shopee.vn/search?keyword=kem%20chống%20nắng%20glow", tiktok: "https://shop.tiktok.com/view/search?keyword=kem%20chống%20nắng%20glow" },
      { name: "Túi Tote vải", price: "Từ ₫90,000", shopee: "https://shopee.vn/search?keyword=túi%20tote%20vải", tiktok: "https://shop.tiktok.com/view/search?keyword=túi%20tote%20vải" }
    ]
  },
  {
    id: "smart",
    title: "Smart & Polished",
    description: "Sleek straight hair + soft glam makeup + structured outfit.",
    tags: ["Presentation", "Work"],
    lookImageText: "SMART",
    imageUrl: "https://i.pinimg.com/1200x/b8/55/6b/b8556bd767a54d69aaa1c80acd939837.jpg",
    components: {
      hair: {
        id: "hair_004",
        name: "Sleek Straight Glass Hair",
        desc: "smooth and professional"
      },
      makeup: {
        id: "makeup_006",
        name: "Soft Glam",
        desc: "defined and confident"
      },
      outfit: {
        id: "outfit_001",
        name: "Korean Office Chic",
        desc: "structured blazer + trousers"
      }
    },
    products: [
      { name: "Máy ép tóc thẳng", price: "Từ ₫199,000", shopee: "https://shopee.vn/search?keyword=máy%20ép%20tóc", tiktok: "https://shop.tiktok.com/view/search?keyword=máy%20ép%20tóc" },
      { name: "Bảng phấn mắt", price: "Từ ₫150,000", shopee: "https://shopee.vn/search?keyword=bảng%20phấn%20mắt", tiktok: "https://shop.tiktok.com/view/search?keyword=bảng%20phấn%20mắt" },
      { name: "Áo Blazer nữ", price: "Từ ₫350,000", shopee: "https://shopee.vn/search?keyword=áo%20blazer%20nữ", tiktok: "https://shop.tiktok.com/view/search?keyword=áo%20blazer%20nữ" }
    ]
  },
  {
    id: "weekend",
    title: "Weekend Glow",
    description: "Messy bun + clean girl makeup + casual streetwear.",
    tags: ["Weekend", "Easy"],
    lookImageText: "WEEKEND",
    imageUrl: "https://i.pinimg.com/736x/72/74/d3/7274d37a6a8cd03d9def7080a7238ce8.jpg",
    components: {
      hair: {
        id: "hair_006",
        name: "Low Messy Bun",
        desc: "effortless and quick"
      },
      makeup: {
        id: "makeup_004",
        name: "Clean Girl Makeup",
        desc: "fresh and minimalistic"
      },
      outfit: {
        id: "outfit_002",
        name: "Douyin Streetwear",
        desc: "comfortable casual combination"
      }
    },
    products: [
      { name: "Kẹp tóc càng cua", price: "Từ ₫25,000", shopee: "https://shopee.vn/search?keyword=kẹp%20tóc%20càng%20cua", tiktok: "https://shop.tiktok.com/view/search?keyword=kẹp%20tóc%20càng%20cua" },
      { name: "Son bóng", price: "Từ ₫120,000", shopee: "https://shopee.vn/search?keyword=son%20bóng", tiktok: "https://shop.tiktok.com/view/search?keyword=son%20bóng" },
      { name: "Quần ống rộng", price: "Từ ₫150,000", shopee: "https://shopee.vn/search?keyword=quần%20ống%20rộng%20nữ", tiktok: "https://shop.tiktok.com/view/search?keyword=quần%20ống%20rộng%20nữ" }
    ]
  },
  {
    id: "datenight",
    title: "Date Night",
    description: "Voluminous waves + alluring makeup + feminine floral dress.",
    tags: ["Date", "Elegant"],
    lookImageText: "DATE NIGHT",
    imageUrl: "https://i.pinimg.com/736x/4e/8a/ad/4e8aadf4ac3dfb1072dc92c2db08f2bb.jpg",
    components: {
      hair: {
        id: "hair_005",
        name: "Voluminous Wavy Lob",
        desc: "bouncy and elegant"
      },
      makeup: {
        id: "makeup_008",
        name: "Date Night Makeup",
        desc: "alluring and romantic"
      },
      outfit: {
        id: "outfit_010",
        name: "Feminine Floral Muse",
        desc: "soft floral dress"
      }
    },
    products: [
      { name: "Lược tròn tạo kiểu", price: "Từ ₫45,000", shopee: "https://shopee.vn/search?keyword=lược%20tròn%20tạo%20kiểu", tiktok: "https://shop.tiktok.com/view/search?keyword=lược%20tròn%20tạo%20kiểu" },
      { name: "Son đỏ quyến rũ", price: "Từ ₫250,000", shopee: "https://shopee.vn/search?keyword=son%20đỏ%20quý%20phái", tiktok: "https://shop.tiktok.com/view/search?keyword=son%20đỏ%20quý%20phái" },
      { name: "Váy hoa nhí", price: "Từ ₫220,000", shopee: "https://shopee.vn/search?keyword=váy%20hoa%20nhí", tiktok: "https://shop.tiktok.com/view/search?keyword=váy%20hoa%20nhí" }
    ]
  },
  {
    id: "vintage",
    title: "Vintage Vibe",
    description: "Hippie curls + matte latte makeup + retro 90s outfit.",
    tags: ["Retro", "Edgy"],
    lookImageText: "VINTAGE",
    imageUrl: "https://i.pinimg.com/736x/4e/b0/35/4eb035367b3a3086b3a48dd847e91ab4.jpg",
    components: {
      hair: {
        id: "hair_008",
        name: "Hippie Curls",
        desc: "fun and textured"
      },
      makeup: {
        id: "makeup_007",
        name: "Latte Makeup",
        desc: "warm and matte"
      },
      outfit: {
        id: "outfit_004",
        name: "Hong Kong Vintage 90s",
        desc: "nostalgic retro fashion"
      }
    },
    products: [
      { name: "Máy uốn tóc lọn nhỏ", price: "Từ ₫180,000", shopee: "https://shopee.vn/search?keyword=máy%20uốn%20tóc%20lọn%20nhỏ", tiktok: "https://shop.tiktok.com/view/search?keyword=máy%20uốn%20tóc%20lọn%20nhỏ" },
      { name: "Phấn tạo khối", price: "Từ ₫130,000", shopee: "https://shopee.vn/search?keyword=phấn%20tạo%20khối", tiktok: "https://shop.tiktok.com/view/search?keyword=phấn%20tạo%20khối" },
      { name: "Áo khoác denim", price: "Từ ₫290,000", shopee: "https://shopee.vn/search?keyword=áo%20khoác%20denim", tiktok: "https://shop.tiktok.com/view/search?keyword=áo%20khoác%20denim" }
    ]
  },
  {
    id: "idoly2k",
    title: "Idol Y2K",
    description: "Butterfly cut + peach makeup + trendy Y2K style.",
    tags: ["Trendy", "Y2K"],
    lookImageText: "IDOL Y2K",
    imageUrl: "https://i.pinimg.com/736x/d1/fe/6f/d1fe6fd83ac99e7c1f7bb5edd478133a.jpg",
    components: {
      hair: {
        id: "hair_007",
        name: "Butterfly Cut",
        desc: "layered and dynamic"
      },
      makeup: {
        id: "makeup_003",
        name: "Peach Makeup",
        desc: "bright and youthful"
      },
      outfit: {
        id: "outfit_007",
        name: "Kpop Idol Y2K",
        desc: "bold and trendy"
      }
    },
    products: [
      { name: "Kẹp tóc bướm", price: "Từ ₫15,000", shopee: "https://shopee.vn/search?keyword=kẹp%20tóc%20bướm", tiktok: "https://shop.tiktok.com/view/search?keyword=kẹp%20tóc%20bướm" },
      { name: "Phấn má hồng đào", price: "Từ ₫110,000", shopee: "https://shopee.vn/search?keyword=phấn%20má%20hồng%20đào", tiktok: "https://shop.tiktok.com/view/search?keyword=phấn%20má%20hồng%20đào" },
      { name: "Áo croptop Y2K", price: "Từ ₫150,000", shopee: "https://shopee.vn/search?keyword=áo%20croptop%20y2k", tiktok: "https://shop.tiktok.com/view/search?keyword=áo%20croptop%20y2k" }
    ]
  }
,
        {
    "id": "explore_007",
    "title": "City Chic Makeover",
    "description": "Transform your daily office look into a sleek, powerful aesthetic.",
    "tags": [
      "Office",
      "Chic",
      "Evening"
    ],
    "lookImageText": "CITY CHIC",
    "imageUrl": "https://i.pinimg.com/736x/12/5f/6f/125f6fd4bb736b6f2e775d5e9aefc989.jpg",
    "components": {
      "hair": {
        "id": "hair_010",
        "name": "Sleek High Ponytail",
        "desc": "chic and confident"
      },
      "makeup": {
        "id": "makeup_008",
        "name": "Date Night Makeup",
        "desc": "bold red lip"
      },
      "outfit": {
        "id": "outfit_001",
        "name": "Korean Office Chic",
        "desc": "crisp and professional"
      }
    },
    "products": [
      {
        "name": "Gel vuốt tóc",
        "price": "Từ ₫95,000",
        "shopee": "https://shopee.vn/search?keyword=gel%20vuot%20toc",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=gel%20vuot%20toc"
      },
      {
        "name": "Son đỏ lì",
        "price": "Từ ₫250,000",
        "shopee": "https://shopee.vn/search?keyword=son%20do%20li",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=son%20do%20li"
      },
      {
        "name": "Áo sơ mi trắng",
        "price": "Từ ₫180,000",
        "shopee": "https://shopee.vn/search?keyword=ao%20so%20mi%20trang",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=ao%20so%20mi%20trang"
      }
    ]
  },
  {
    "id": "explore_008",
    "title": "The Douyin Doll",
    "description": "Master the viral Chinese makeup trend featuring dramatic lashes.",
    "tags": [
      "Douyin",
      "Viral",
      "Glitter"
    ],
    "lookImageText": "DOUYIN DOLL",
    "imageUrl": "https://i.pinimg.com/736x/81/cd/98/81cd98a73e85a15c8fecc1fda830a64f.jpg",
    "components": {
      "hair": {
        "id": "hair_009",
        "name": "Wispy Bangs",
        "desc": "soft see-through bangs"
      },
      "makeup": {
        "id": "makeup_012",
        "name": "Douyin Doll Makeup",
        "desc": "manhua lashes and glitter"
      },
      "outfit": {
        "id": "outfit_003",
        "name": "Cozy Cafe Minimalist",
        "desc": "soft and cute"
      }
    },
    "products": [
      {
        "name": "Nhũ mắt lấp lánh",
        "price": "Từ ₫60,000",
        "shopee": "https://shopee.vn/search?keyword=nhu%20mat",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=nhu%20mat"
      },
      {
        "name": "Mi giả manhua",
        "price": "Từ ₫45,000",
        "shopee": "https://shopee.vn/search?keyword=mi%20gia%20manhua",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=mi%20gia%20manhua"
      },
      {
        "name": "Áo len mỏng",
        "price": "Từ ₫150,000",
        "shopee": "https://shopee.vn/search?keyword=ao%20len%20mong",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=ao%20len%20mong"
      }
    ]
  },
  {
    "id": "explore_009",
    "title": "Preppy Academia",
    "description": "Channel your inner scholar with this sophisticated blend of pleated skirts.",
    "tags": [
      "Academia",
      "Autumn"
    ],
    "lookImageText": "PREPPY ACADEMIA",
    "imageUrl": "https://i.pinimg.com/1200x/1c/52/1d/1c521d61dae70fef5e0df11bf9edbb43.jpg",
    "components": {
      "hair": {
        "id": "hair_003",
        "name": "Curtain Bangs",
        "desc": "face-framing fringe"
      },
      "makeup": {
        "id": "makeup_004",
        "name": "Clean Girl Makeup",
        "desc": "minimal and glowing"
      },
      "outfit": {
        "id": "outfit_010",
        "name": "Academia Preppy",
        "desc": "pleated skirt and loafers"
      }
    },
    "products": [
      {
        "name": "Chân váy xếp ly",
        "price": "Từ ₫160,000",
        "shopee": "https://shopee.vn/search?keyword=chan%20vay%20xep%20ly",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=chan%20vay%20xep%20ly"
      },
      {
        "name": "Giày loafer",
        "price": "Từ ₫220,000",
        "shopee": "https://shopee.vn/search?keyword=giay%20loafer",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=giay%20loafer"
      },
      {
        "name": "Áo gile len",
        "price": "Từ ₫130,000",
        "shopee": "https://shopee.vn/search?keyword=ao%20gile%20len",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=ao%20gile%20len"
      }
    ]
  },
  {
    "id": "explore_010",
    "title": "90s Grunge Revival",
    "description": "Bring back the 90s attitude with matte skin, dark lips, and edgy fashion.",
    "tags": [
      "Grunge",
      "Vintage",
      "Edgy"
    ],
    "lookImageText": "90S GRUNGE",
    "imageUrl": "https://i.pinimg.com/736x/3e/af/1a/3eaf1ad5193dc6e3348e3cd310309c56.jpg",
    "components": {
      "hair": {
        "id": "hair_012",
        "name": "Soft Shag Cut",
        "desc": "modern textured shag"
      },
      "makeup": {
        "id": "makeup_013",
        "name": "90s Grunge Glam",
        "desc": "matte skin and dark lips"
      },
      "outfit": {
        "id": "outfit_009",
        "name": "Y2K Cyberpunk",
        "desc": "parachute pants and platforms"
      }
    },
    "products": [
      {
        "name": "Son màu đất",
        "price": "Từ ₫190,000",
        "shopee": "https://shopee.vn/search?keyword=son%20mau%20dat",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=son%20mau%20dat"
      },
      {
        "name": "Quần túi hộp",
        "price": "Từ ₫250,000",
        "shopee": "https://shopee.vn/search?keyword=quan%20tui%20hop",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=quan%20tui%20hop"
      },
      {
        "name": "Giày boots",
        "price": "Từ ₫350,000",
        "shopee": "https://shopee.vn/search?keyword=giay%20boots",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=giay%20boots"
      }
    ]
  },
  {
    "id": "explore_011",
    "title": "Beach Resort Getaway",
    "description": "Pack the perfect suitcase with breathable linen outfits and beachy waves.",
    "tags": [
      "Summer",
      "Travel",
      "Resort"
    ],
    "lookImageText": "RESORT GETAWAY",
    "imageUrl": "https://i.pinimg.com/736x/9f/86/d5/9f86d5d0071e6c9f58a08f2fc6e4aed5.jpg",
    "components": {
      "hair": {
        "id": "hair_013",
        "name": "Mermaid Waves",
        "desc": "glamorous continuous waves"
      },
      "makeup": {
        "id": "makeup_011",
        "name": "Strawberry Makeup",
        "desc": "fresh and glossy"
      },
      "outfit": {
        "id": "outfit_012",
        "name": "Summer Linen Resort",
        "desc": "breathable elegant linen"
      }
    },
    "products": [
      {
        "name": "Máy uốn sóng nước",
        "price": "Từ ₫200,000",
        "shopee": "https://shopee.vn/search?keyword=may%20uon%20song%20nuoc",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=may%20uon%20song%20nuoc"
      },
      {
        "name": "Set đồ linen",
        "price": "Từ ₫320,000",
        "shopee": "https://shopee.vn/search?keyword=set%20linen",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=set%20linen"
      },
      {
        "name": "Mũ cói đi biển",
        "price": "Từ ₫80,000",
        "shopee": "https://shopee.vn/search?keyword=mu%20coi",
        "tiktok": "https://shop.tiktok.com/view/search?keyword=mu%20coi"
      }
    ]
  }
];
