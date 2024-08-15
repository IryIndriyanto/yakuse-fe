import { bisnisType, permintaanType } from "../type";

export const permintaan: permintaanType[] = [
  {
    id: 0,
    title: "some title",
    user_info: {
      user_id: 1,
      owner_username: "someName",
      user_profile_url: "/profile.png",
    },
    description: "some desc",
    is_visible: true,
    category: {
      id: 0,
      name: "string",
    },
    created_at: "2024-08-13T12:15:14.067Z",
    updated_at: "2024-08-13T12:15:14.067Z",
  },
  {
    id: 1,
    title: "Mencari Catering",
    user_info: {
      user_id: 1,
      owner_username: "Jane",
      user_profile_url: "/profile.png",
    },
    description:
      "Saya sedang membutuhkan UMKM catering untuk acara pernikahan di Jakarta daerah Bundaran HI pada 29 Februari 2025. Kepada penjual yang bersedia memenuhi permintaan saya, tolong segara hubungi saya di 1234567890. Detail dapat dibicaran lebih lanjut.",
    is_visible: true,
    category: {
      id: 0,
      name: "Kuliner",
    },
    created_at: "2024-08-13T12:15:14.067Z",
    updated_at: "2024-08-13T12:15:14.067Z",
  },
  {
    id: 2,
    title: "Mencari Penjual Bunga",
    user_info: {
      user_id: 1,
      owner_username: "Jane",
      user_profile_url: "/profile.png",
    },
    description:
      "Saya sedang membutuhkan UMKM yang dapat merangkai bunga untuk acara pernikahan di Jakarta daerah Bundaran HI pada 29 Februari 2025. Kepada penjual yang bersedia memenuhi permintaan saya, tolong segara hubungi saya di 1234567890. Detail dapat dibicaran lebih lanjut.",
    is_visible: true,
    category: {
      id: 1,
      name: "Kreatif",
    },
    created_at: "2024-08-13T12:15:14.067Z",
    updated_at: "2024-08-13T12:15:14.067Z",
  },
  {
    id: 3,
    title: "Mencari MC",
    user_info: {
      user_id: 1,
      owner_username: "Jane",
      user_profile_url: "/profile.png",
    },
    description:
      "Saya sedang membutuhkan MC untuk acara pernikahan di Jakarta daerah Bundaran HI pada 29 Februari 2025. Kepada penjual yang bersedia memenuhi permintaan saya, tolong segara hubungi saya di 1234567890. Detail dapat dibicaran lebih lanjut.",
    is_visible: true,
    category: {
      id: 1,
      name: "Kreatif",
    },
    created_at: "2024-08-13T12:15:14.067Z",
    updated_at: "2024-08-13T12:15:14.067Z",
  },
];

export const bisnis: bisnisType[] = [
  {
    id: 0,
    name: "Nama bisnis",
    description: "Deskripsi bisnis",
    photo_url: "/bussiness-image-frame.png",
    location: "Lokasi bisnis",
    contact: "Kontak bisnis",
    created_at: "2024-08-13T13:42:05.496Z",
    updated_at: "2024-08-13T13:42:05.496Z",
    category: "Kuliner",
    owner: "Nama owner",
    rating: 0,
    rating_list: [
      {
        id: 0,
        rating_count: 0,
        review_description: "Deskripsi rating",
        business_name: "Nama bisnis",
        rater_name: "Nama pemberi rating",
      },
    ],
  },
  {
    id: 1,
    name: "Rumah Makan Padang",
    description:
      "Menjual macam-macam masakan padang. Menerima catering dan pembelian dalam jumlah banyak.",
    photo_url: "/bussiness-image-frame.png",
    location: "Bekasi",
    contact: "0987654321",
    created_at: "2024-08-13T13:42:05.496Z",
    updated_at: "2024-08-13T13:42:05.496Z",
    category: "Kuliner",
    owner: "Jane ABC",
    rating: 0,
    rating_list: [
      {
        id: 0,
        rating_count: 3,
        review_description: "Makanannya enak",
        business_name: "Rumah Makan Padang",
        rater_name: "Jane DEF",
      },
    ],
  },
  {
    id: 2,
    name: "ZXY Flowerist",
    description:
      "Menjual bunga dalam bentuk tangkai maupun rangkaian. Menerima pemesanan untuk acara besar dan pembelian dalam jumlah yang banyak.",
    photo_url: "/bussiness-image-frame.png",
    location: "Kudus",
    contact: "9876543210",
    created_at: "2024-08-13T13:42:05.496Z",
    updated_at: "2024-08-13T13:42:05.496Z",
    category: "Kreatif",
    owner: "Jane ABC",
    rating: 0,
    rating_list: [
      {
        id: 0,
        rating_count: 3,
        review_description: "Bunganya segar, bagus",
        business_name: "ZXY Flowerist",
        rater_name: "Jane DEF",
      },
    ],
  },
  {
    id: 3,
    name: "Tukang Kayu",
    description:
      "Sedia berbagai macam perabotan berbahan kayu. Menerima request dan custom.",
    photo_url: "/bussiness-image-frame.png",
    location: "Bandung",
    contact: "6759038410",
    created_at: "2024-08-13T13:42:05.496Z",
    updated_at: "2024-08-13T13:42:05.496Z",
    category: "Properti",
    owner: "Jane ABC",
    rating: 0,
    rating_list: [
      {
        id: 0,
        rating_count: 3,
        review_description: "Custom lumayan cepat dan pengerjaannya rapih",
        business_name: "Tukang Kayu",
        rater_name: "Jane DEF",
      },
    ],
  }
];
