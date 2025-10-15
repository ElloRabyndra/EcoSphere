// Mock data
const userStats = {
  totalActions: 42,
  totalPoints: 12000,
  badges: { current: 6, total: 6 },
};


const steps = [
  {
    number: 1,
    title: 'Daftar Gratis',
    description: '30 detik untuk bergabung'
},
  {
    number: 2,
    title: 'Pilih Aksi',
    description: '19 aksi mudah tersedia'
  },
  {
    number: 3,
    title: 'Raih Reward',
    description: 'Poin, level, dan badge keren!'
  }
]


const impacts = [
  {
    title: '8 Juta Ton',
    subtitle: 'Sampah plastik laut/tahun',
    image:'/Landing/sampah-numpuk.jpeg'
  },
  {
    title: '+1.1°C',
    subtitle: 'Kenaikan suhu global',
    image: '/Landing/pemanasan-global.jpeg'
  },
  {
    title: '10 Miliar',
    subtitle: 'Pohon hilang/tahun',
    image: '/Landing/Hutan-Gundul.jpg'
  },
];

const missions = [
  {
    id: 1,
    title: "Matikan Lampu Saat Tidak Dipakai",
    description: "Cek kamar, matikan lampu jika tidak digunakan.",
    level: 1,
    points: 5,
  },
  {
    id: 2,
    title: "Bawa Botol Minum Sendiri",
    description: "Hindari beli air mineral sekali pakai.",
    level: 1,
    points: 5,
  },
  {
    id: 3,
    title: "Siram Tanaman Setiap Hari",
    description: "Merawat tanaman di rumah atau sekolah.",
    level: 1,
    points: 5,
  },
];

const guides = [
  {
    id: 1,
    title: "Memulai Gaya Hidup Zero Waste",
    description:
      "Pelajari langkah-langkah sederhana untuk mengurangi sampah dalam kehidupan sehari-hari. Mulai dari dapur hingga kamar mandi.",
    image: "/Education/gambar-1.png",
  },
  {
    id: 2,
    title: "Menghemat Air di Rumah",
    description:
      "Tips praktis untuk mengurangi konsumsi air tanpa mengurangi kenyamanan. Hemat air, hemat biaya, selamatkan planet.",
    image: "/Education/gambar-2.png",
  },
  {
    id: 3,
    title: "Transportasi Ramah Lingkungan",
    description:
      "Alternatif transportasi yang mengurangi jejak karbon. Sepeda, transportasi umum, dan kendaraan listrik.",
    image: "/Education/gambar-3.png",
  },
];

const tips = [
  {
    id: 1,
    title: "Ganti ke Lampu LED",
    description: "Hemat energi hingga 75% dan tahan 25x lebih lama",
  },
  {
    id: 2,
    title: "Bawa Tas Belanja Sendiri",
    description: "Satu tas kain = 1000 kantong plastik",
  },
  {
    id: 3,
    title: "Kompos Sampah Organik",
    description: "Ubah sisa makanan jadi pupuk alami",
  },
  {
    id: 4,
    title: "Gunakan Transportasi Umum",
    description: "Kurangi emisi CO2 hingga 4.6 ton per tahun",
  },
];

const badges = [
  {
    id: 1,
    title: "Green Starter",
    description: "Selesaikan 1 aksi lingkungan pertama.",
    isComplete: true,
  },
  {
    id: 2,
    title: "Eco Explorer",
    description: "Selesaikan minimal 1 aksi di 3 kategori berbeda.",
    isComplete: false,
  },
  {
    id: 3,
    title: "Plastic Hero",
    description: 'Selesaikan 5 aksi di kategori "Kurangi Sampah Plastik".',
    isComplete: true,
  },
  {
    id: 4,
    title: "Energy Saver",
    description: 'Selesaikan 5 aksi di kategori "Penghematan Energi".',
    isComplete: false,
  },
  {
    id: 5,
    title: "Eco Master",
    description: "Capai level maksimum atau selesaikan semua aksi.",
    isComplete: true,
  },
  {
    id: 6,
    title: "Nature Guardian",
    description: 'Selesaikan 5 aksi di kategori "Peduli Alam".',
    isComplete: false,
  },
];

const actions = [
  // --- Kategori: Hemat Energi (a) ---
  {
    id: 1,
    title: "Matikan Lampu Saat Tidak Dipakai",
    category: "Hemat Energi",
    description: "Cek kamar, matikan lampu jika tidak digunakan.", // Deskripsi Singkat
    eco_impact:
      "Mengurangi pemborosan energi listrik dan membantu menekan emisi karbon dari pembangkit listrik.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 5, //
    level: 1, //
  },
  {
    id: 2,
    title: "Cabut Charger Setelah Dipakai",
    category: "Hemat Energi",
    description: "Setelah ponsel penuh, cabut charger dari stopkontak.", // Deskripsi Singkat
    eco_impact:
      "Menghemat energi yang terbuang sia-sia dan memperpanjang umur perangkat elektronik.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 5, //
    level: 1, //
  },
  {
    id: 3,
    title: "Gunakan Cahaya Alami di Siang Hari",
    category: "Hemat Energi",
    description: "Jangan nyalakan lampu siang hari jika cukup terang.", // Deskripsi Singkat
    eco_impact:
      "Mengurangi penggunaan listrik harian dan membantu menurunkan konsumsi energi rumah tangga.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 10, //
    level: 2, //
  },
  {
    id: 4,
    title: "Gunakan Peralatan Hemat Energi",
    category: "Hemat Energi",
    description: "Gunakan lampu LED atau perangkat efisien energi.", // Deskripsi Singkat
    eco_impact:
      "Menghemat biaya listrik dan menurunkan jejak karbon rumah tangga secara signifikan.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 20, //
    level: 3, //
  },

  // --- Kategori: Kurangi Sampah Plastik (b) ---
  {
    id: 5,
    title: "Bawa Botol Minum Sendiri",
    category: "Kurangi Sampah Plastik",
    description: "Hindari beli air mineral sekali pakai.", // Deskripsi Singkat
    eco_impact:
      "Mengurangi jumlah sampah plastik sekali pakai dan mendukung gaya hidup ramah lingkungan.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 5, //
    level: 1, //
  },
  {
    id: 6,
    title: "Gunakan Tas Kain Saat Belanja",
    category: "Kurangi Sampah Plastik",
    description: "Bawa tas kain daripada kantong plastik.", // Deskripsi Singkat
    eco_impact:
      "Mengurangi limbah plastik di tempat pembuangan dan membantu menjaga kebersihan lingkungan.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 10, //
    level: 1, //
  },
  {
    id: 7,
    title: "Pisahkan Sampah Organik & Non-Organik",
    category: "Kurangi Sampah Plastik",
    description: "Gunakan dua wadah sampah berbeda di rumah.", // Deskripsi Singkat
    eco_impact:
      "Mempermudah proses daur ulang dan mencegah pencemaran lingkungan.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 15, //
    level: 2, //
  },
  {
    id: 8,
    title: "Gunakan Barang Daur Ulang",
    category: "Kurangi Sampah Plastik",
    description: "Gunakan produk dari bahan daur ulang.", // Deskripsi Singkat
    eco_impact:
      "Mengurangi permintaan bahan baku baru dan membantu menghemat sumber daya alam.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 20, //
    level: 3, //
  },

  // --- Kategori: Peduli Alam (c) ---
  {
    id: 9,
    title: "Siram Tanaman Setiap Hari",
    category: "Peduli Alam",
    description: "Merawat tanaman di rumah atau sekolah.", // Deskripsi Singkat
    eco_impact:
      "Menjaga tanaman tetap hidup dan membantu menyejukkan udara sekitar.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 5, //
    level: 1, //
  },
  {
    id: 10,
    title: "Tanam Bibit Baru",
    category: "Peduli Alam",
    description: "Tanam satu tanaman baru di sekitar rumah.", // Deskripsi Singkat
    eco_impact:
      "Meningkatkan kualitas udara dan membantu menyerap karbon dioksida.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 15, //
    level: 2, //
  },
  {
    id: 11,
    title: "Bersih-Bersih Halaman atau Taman",
    category: "Peduli Alam",
    description: "Kumpulkan sampah di sekitar tempat tinggal.", // Deskripsi Singkat
    eco_impact: "Menciptakan lingkungan bersih, sehat, dan nyaman untuk semua.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 20, //
    level: 3, //
  },
  {
    id: 12,
    title: "Ikut Kegiatan Menanam Pohon",
    category: "Peduli Alam",
    description: "Partisipasi dalam kegiatan lingkungan lokal.", // Deskripsi Singkat
    eco_impact:
      "Menambah tutupan hijau bumi, mencegah erosi tanah, dan mendukung keseimbangan ekosistem.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 25, //
    level: 4, //
  },

  // --- Kategori: Bijak dalam Konsumsi (d) ---
  {
    id: 13,
    title: "Habiskan Makanan di Piringmu",
    category: "Bijak dalam Konsumsi",
    description: "Jangan sisakan makanan.", // Deskripsi Singkat
    eco_impact:
      "Mengurangi limbah makanan dan menghargai sumber daya yang digunakan untuk memproduksinya.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 5, //
    level: 1, //
  },
  {
    id: 14,
    title: "Gunakan Produk Lokal",
    category: "Bijak dalam Konsumsi",
    description: "Pilih produk buatan daerahmu sendiri.", // Deskripsi Singkat
    eco_impact:
      "Mengurangi jejak karbon dari transportasi jarak jauh dan mendukung ekonomi lokal.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 10, //
    level: 2, //
  },
  {
    id: 15,
    title: "Kurangi Makanan Instan",
    category: "Bijak dalam Konsumsi",
    description: "Masak makanan sendiri lebih sehat dan minim limbah.", // Deskripsi Singkat
    eco_impact:
      "Mengurangi sampah kemasan plastik dan membantu pola hidup lebih sehat.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 15, //
    level: 3, //
  },
  {
    id: 16,
    title: "Gunakan Barang Sampai Habis",
    category: "Bijak dalam Konsumsi",
    description: "Jangan buang barang sebelum benar-benar rusak.", // Deskripsi Singkat
    eco_impact:
      "Mengurangi jumlah limbah dan memaksimalkan pemanfaatan sumber daya.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 20, //
    level: 3, //
  },

  // --- Kategori: Daur Ulang (e) ---
  {
    id: 17,
    title: "Gunakan Kembali Botol Plastik",
    category: "Daur Ulang",
    description:
      "Kurangi limbah dengan memakai ulang botol plastik untuk fungsi lain.", // Deskripsi Singkat
    eco_impact:
      "Memperpanjang umur pakai plastik dan mengurangi jumlah sampah yang mencemari lingkungan.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 15, //
    level: 3, //
  },
  {
    id: 18,
    title: "Buat Kerajinan dari Barang Bekas",
    category: "Daur Ulang",
    description:
      "Ubah barang tidak terpakai menjadi benda baru yang bermanfaat.", // Deskripsi Singkat
    eco_impact:
      "Mengasah kreativitas sekaligus mengurangi limbah rumah tangga.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 20,
    level: 4,
  },
  {
    id: 19,
    title: "Kumpulkan Barang Bekas untuk Daur Ulang",
    category: "Daur Ulang",
    description:
      "Pilah dan kumpulkan barang yang bisa didaur ulang agar tidak terbuang.", // Deskripsi Singkat
    eco_impact:
      "Membantu proses pengelolaan sampah yang berkelanjutan dan mengurangi beban TPA.", // Dampak Lingkungan
    image_name: "/action/aksi.png", // default
    point: 25, //
    level: 5, //
  },
];

const actionThemes = {
  hematEnergi: {
    backgroundColor: "bg-[#FFD900]/30",
    textColor: "text-[#FFA600]",
  },
  kurangiSampahPlastik: {
    backgroundColor: "bg-[#DD0026]/20",
    textColor: "text-[#DD0026]",
  },
  peduliAlam: {
    backgroundColor: "bg-[#32CD32]/20",
    textColor: "text-[#228C22]",
  },
  bijakDalamKonsumsi: {
    backgroundColor: "bg-[#EB73B0]/20",
    textColor: "text-[#DC3B95]",
  },
  daurUlang: {
    backgroundColor: "bg-[#3C83F6]/20",
    textColor: "text-[#195B80]",
  },
};

const developer = [
  {
    name: "M. Rabyndra Janitra Binello",
    role: "Front End Developer",
    quote:
      '"Great frontend experiences start with understanding users and caring about the planet they live on."',
    hope: "Menjadi platform yang tidak hanya mengedukasi, tapi juga menginspirasi jutaan anak muda untuk menjadi agen perubahan lingkungan.",
    cardBg: "bg-[#3C83F6]/20",
    cardColor: "#3C83F6",
    image: "/About/dev-1.png",
  },
  {
    name: "Fitran Husein",
    role: "Back End Developer",
    quote:
      '"Strong backend systems are the foundation that powers environmental change at scale."',
    hope: "Semoga EcoSphere bisa menjadi aplikasi yang digunakan di seluruh sekolah Indonesia, membuat pembelajaran lingkungan jadi lebih interaktif dan menyenangkan.",
    cardBg: "bg-[#d62241]/20",
    cardColor: "#DD0026",
    hopeBg: "bg-[#FFD900]/30",
    hopeColor: "text-[#FFA600]",
    image: "/About/dev-2.png",
  },
  {
    name: "Monica Amrina Rosyada",
    role: "UI/UX Designer",
    quote:
      '"Good design is not just how it looks, but how it makes people feel and act."',
    hope: "Berharap EcoSphere menjadi contoh bagaimana teknologi dan desain bisa bersatu untuk menciptakan dampak sosial yang positif dan berkelanjutan.",
    cardBg: "bg-[#EB73B0]/20",
    cardColor: "#DC3B95",
    hopeBg: "bg-[#FFD900]/30",
    hopeColor: "text-[#FFA600]",
    image: "/About/dev-3.png",
  },
];

const levels = [
  {
    id: 1,
    level: 1,
    point: 0,
    min_point: 0,
  },
  {
    id: 2,
    level: 2,
    point: 10,
    min_point: 50,
  },
  {
    id: 3,
    level: 3,
    point: 20,
    min_point: 150,
  },
  {
    id: 4,
    level: 4,
    point: 30,
    min_point: 300,
  },
  {
    id: 5,
    level: 5,
    point: 40,
    min_point: 500,
  },
];

export {
  userStats,
  steps,
  impacts,
  missions,
  guides,
  tips,
  badges,
  actions,
  actionThemes,
  developer,
  levels,
};
