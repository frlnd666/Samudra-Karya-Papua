/*
  ====================================================================
  FILE INI ADALAH TEMPAT MENGEDIT SELURUH ISI WEBSITE
  Tidak perlu paham coding. Cukup ubah teks di dalam tanda kutip " ".
  Setelah edit, simpan file ini, lalu refresh halaman website.
  ====================================================================
*/

const SITE_CONTENT = {
  hero: {
    eyebrow: "PT. Samudra Karya Papua",
    title_line1: "Membangun Papua",
    title_line2_italic: "dengan Pelayanan, Kualitas & Integritas",
    description: "Mitra terpercaya di bidang kontraktor, supplier, dan trading yang berkomitmen menghadirkan solusi infrastruktur dan pengadaan barang berkualitas tinggi di seluruh wilayah Papua.",
    stats: [
      { number: "10+", label: "Tahun Pengalaman" },
      { number: "12+", label: "Proyek Selesai" },
      { number: "10+", label: "Mitra & Klien" },
      { number: "100%", label: "Berbasis Indonesia Timur" }
    ]
  },

  about: {
    year_founded: "2015",
    title: "Kontraktor, Supplier & Trading Terpercaya di Bumi Cenderawasih",
    description: "PT. Samudra Karya Papua hadir sebagai perusahaan multi-lini yang menyediakan jasa konstruksi, pengadaan barang, dan perdagangan umum. Kami memahami karakteristik geografis Papua dan menghadirkan solusi yang efisien, aman, dan tepat waktu.",
    points: [
      "Tim teknis berpengalaman menangani proyek infrastruktur skala kecil hingga besar di wilayah Papua.",
      "Jaringan supplier dan logistik yang kuat untuk menjamin ketersediaan material tepat waktu.",
      "Standar kualitas dan keselamatan kerja yang konsisten di setiap tahap proyek."
    ]
  },

  services: [
    {
      number: "01 / Contractor",
      title: "Jasa Konstruksi",
      description: "Pembangunan infrastruktur, gedung, dan fasilitas umum dengan standar mutu dan keselamatan kerja yang ketat.",
      tags: ["Sipil", "Renovasi", "Infrastruktur"]
    },
    {
      number: "02 / Supplier",
      title: "Pengadaan Barang",
      description: "Penyediaan material bangunan, alat berat, dan kebutuhan logistik proyek dengan jaringan distribusi yang luas.",
      tags: ["Material", "Alat Berat", "Logistik"]
    },
    {
      number: "03 / Trading",
      title: "Perdagangan Umum",
      description: "Distribusi dan perdagangan komoditas serta kebutuhan industri lintas wilayah dengan sistem yang transparan.",
      tags: ["Distribusi", "Komoditas", "B2B"]
    }
  ],

  process: [
    { step: "01", title: "Konsultasi", description: "Diskusi kebutuhan proyek, survei lokasi, dan identifikasi lingkup pekerjaan." },
    { step: "02", title: "Perencanaan", description: "Penyusunan RAB, timeline, dan dokumen teknis sesuai standar yang berlaku." },
    { step: "03", title: "Eksekusi", description: "Pelaksanaan konstruksi atau pengadaan dengan pengawasan mutu berkala." },
    { step: "04", title: "Serah Terima", description: "Evaluasi hasil pekerjaan, dokumentasi akhir, dan dukungan purna proyek." }
  ],

  quote: {
    text: "Komitmen kami sederhana: setiap proyek dikerjakan dengan pelayanan yang tulus, kualitas yang terukur, dan integritas yang tidak dapat ditawar.",
    author: "Manajemen PT. Samudra Karya Papua",
    role: "Contractor · Supplier · Trading"
  },

  clients: [
    "Pemerintah Daerah",
    "Mitra Swasta",
    "BUMN & BUMD",
    "Kontraktor Lokal",
    "Distributor Regional"
  ],

  contact: {
    address: "Jl. Contoh Alamat No. 00, Kota/Kabupaten, Provinsi Papua, Indonesia",
    phone: "+62 811-0000-0000",
    email: "admin@samudrakaryapapua.web.id",
    hours: "Senin – Jumat, 08.00 – 17.00 WIT"
  },

  footer: {
    description: "PT. Samudra Karya Papua berkomitmen menjadi mitra pembangunan dan pengadaan yang andal, mengutamakan pelayanan, kualitas, dan integritas dalam setiap proyek.",
    copyright: "© 2026 PT. Samudra Karya Papua. Seluruh hak cipta dilindungi."
  }
};

/*
  ====================================================================
  DATA BLOG / ARTIKEL BERITA
  Untuk menambah artikel baru, salin (copy) satu blok { ... } di bawah
  ini, tempel (paste) di baris paling atas array, lalu ubah isinya.
  Gunakan format tanggal: "05 Juli 2026"
  Gambar cover bisa memakai file di folder assets/, contoh: "assets/logo.jpg"
  ====================================================================
*/

const BLOG_POSTS = [
  {
    id: "proyek-pembangunan-fasilitas-papua",
    date: "05 Juli 2026",
    cover: "assets/fasum.jpg",
    title: "Proyek Pembangunan Fasilitas Umum di Papua",
    excerpt: "PT. Samudra Karya Papua menyelesaikan proyek infrastruktur baru dengan standar mutu dan keselamatan kerja tinggi.",
    content: [
      "PT. Samudra Karya Papua kembali menyelesaikan salah satu proyek pembangunan fasilitas umum di wilayah Papua dengan tepat waktu dan sesuai standar mutu yang ditetapkan.",
      "Proyek ini melibatkan tim teknis berpengalaman serta pengawasan mutu berkala di setiap tahap pengerjaan, mulai dari perencanaan hingga serah terima.",
      "Ke depan, perusahaan berkomitmen untuk terus mendukung pembangunan infrastruktur di Papua melalui pelayanan yang tulus, kualitas yang terukur, dan integritas bisnis yang konsisten."
    ]
  },
  {
    id: "kemitraan-strategis-supplier-material",
    date: "28 Juni 2026",
    cover: "assets/suplier.jpg",
    title: "Memperkuat Jaringan Supplier Material di Wilayah Timur",
    excerpt: "Kerja sama baru dengan distributor material bertujuan mempercepat ketersediaan bahan baku proyek.",
    content: [
      "Sebagai bagian dari lini usaha Supplier, PT. Samudra Karya Papua menjalin kemitraan strategis dengan beberapa distributor material bangunan di wilayah timur Indonesia.",
      "Kemitraan ini diharapkan dapat mempercepat proses pengadaan barang dan menjaga stabilitas harga material untuk seluruh proyek yang sedang berjalan.",
      "Perusahaan terus berupaya memperluas jaringan logistik agar dapat menjangkau wilayah-wilayah terpencil di Papua secara lebih efisien."
    ]
  },
  {
    id: "komitmen-legalitas-dan-standar-kerja",
    date: "10 Juni 2026",
    cover: "assets/seal.jpg",
    title: "Komitmen Legalitas dan Standar Kerja Perusahaan",
    excerpt: "Seluruh proses bisnis PT. Samudra Karya Papua dijalankan sesuai regulasi dan standar keselamatan kerja nasional.",
    content: [
      "PT. Samudra Karya Papua memastikan seluruh proses bisnis, mulai dari kontraktor, supplier, hingga trading, dijalankan sesuai dengan regulasi yang berlaku di Indonesia.",
      "Perusahaan secara rutin melakukan evaluasi internal terhadap standar keselamatan kerja dan kualitas layanan untuk menjaga kepercayaan klien dan mitra.",
      "Legalitas yang lengkap menjadi salah satu fondasi utama perusahaan dalam membangun kerja sama jangka panjang dengan pemerintah daerah maupun sektor swasta."
    ]
  }
];
