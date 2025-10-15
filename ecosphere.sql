-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 15, 2025 at 04:42 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecosphere`
--

-- --------------------------------------------------------

--
-- Table structure for table `actions`
--

CREATE TABLE `actions` (
  `id` int NOT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `eco_impact` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `points` int NOT NULL,
  `req_level` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `actions`
--

INSERT INTO `actions` (`id`, `title`, `category`, `eco_impact`, `description`, `points`, `req_level`) VALUES
(1, 'Matikan Lampu Saat Tidak Dipakai', 'Hemat Energi', 'Mengurangi pemborosan energi listrik dan membantu menekan emisi karbon dari pembangkit listrik.', 'Cek kamar, matikan lampu jika tidak digunakan.', 5, 1),
(2, 'Cabut Charger Setelah Dipakai', 'Hemat Energi', 'Menghemat energi yang terbuang sia-sia dan memperpanjang umur perangkat elektronik.', 'Setelah ponsel penuh, cabut charger dari stopkontak.', 5, 1),
(3, 'Gunakan Cahaya Alami di Siang Hari', 'Hemat Energi', 'Mengurangi penggunaan listrik harian dan membantu menurunkan konsumsi energi rumah tangga.', 'Jangan nyalakan lampu siang hari jika cukup terang.', 10, 2),
(4, 'Gunakan Peralatan Hemat Energi', 'Hemat Energi', 'Menghemat biaya listrik dan menurunkan jejak karbon rumah tangga secara signifikan.', 'Gunakan lampu LED atau perangkat efisien energi.', 20, 3),
(5, 'Bawa Botol Minum Sendiri', 'Kurangi Sampah Plastik', 'Mengurangi jumlah sampah plastik sekali pakai dan mendukung gaya hidup ramah lingkungan.', 'Hindari beli air mineral sekali pakai.', 5, 1),
(6, 'Gunakan Tas Kain Saat Belanja', 'Kurangi Sampah Plastik', 'Mengurangi limbah plastik di tempat pembuangan dan membantu menjaga kebersihan lingkungan.', 'Bawa tas kain daripada kantong plastik.', 10, 1),
(7, 'Pisahkan Sampah Organik & Non-Organik', 'Kurangi Sampah Plastik', 'Mempermudah proses daur ulang dan mencegah pencemaran lingkungan.', 'Gunakan dua wadah sampah berbeda di rumah.', 15, 2),
(8, 'Gunakan Barang Daur Ulang', 'Kurangi Sampah Plastik', 'Mengurangi permintaan bahan baku baru dan membantu menghemat sumber daya alam.', 'Gunakan produk dari bahan daur ulang.', 20, 3),
(9, 'Siram Tanaman Setiap Hari', 'Peduli Alam', 'Menjaga tanaman tetap hidup dan membantu menyejukkan udara sekitar.', 'Merawat tanaman di rumah atau sekolah.', 5, 1),
(10, 'Tanam Bibit Baru', 'Peduli Alam', 'Meningkatkan kualitas udara dan membantu menyerap karbon dioksida.', 'Tanam satu tanaman baru di sekitar rumah.', 15, 2),
(11, 'Bersih-Bersih Halaman atau Taman', 'Peduli Alam', 'Menciptakan lingkungan bersih, sehat, dan nyaman untuk semua.', 'Kumpulkan sampah di sekitar tempat tinggal.', 20, 3),
(12, 'Ikut Kegiatan Menanam Pohon', 'Peduli Alam', 'Menambah tutupan hijau bumi, mencegah erosi tanah, dan mendukung keseimbangan ekosistem.', 'Partisipasi dalam kegiatan lingkungan lokal.', 25, 4),
(13, 'Habiskan Makanan di Piringmu', 'Bijak dalam Konsumsi', 'Mengurangi limbah makanan dan menghargai sumber daya yang digunakan untuk memproduksinya.', 'Jangan sisakan makanan.', 5, 1),
(14, 'Gunakan Produk Lokal', 'Bijak dalam Konsumsi', 'Mengurangi jejak karbon dari transportasi jarak jauh dan mendukung ekonomi lokal.', 'Pilih produk buatan daerahmu sendiri.', 10, 2),
(15, 'Kurangi Makanan Instan', 'Bijak dalam Konsumsi', 'Mengurangi sampah kemasan plastik dan membantu pola hidup lebih sehat.', 'Masak makanan sendiri lebih sehat dan minim limbah.', 15, 3),
(16, 'Gunakan Barang Sampai Habis', 'Bijak dalam Konsumsi', 'Mengurangi jumlah limbah dan memaksimalkan pemanfaatan sumber daya.', 'Jangan buang barang sebelum benar-benar rusak.', 20, 3),
(17, 'Gunakan Kembali Botol Plastik', 'Daur Ulang', 'Memperpanjang umur pakai plastik dan mengurangi jumlah sampah yang mencemari lingkungan.', 'Kurangi limbah dengan memakai ulang botol plastik untuk fungsi lain.', 15, 3),
(18, 'Buat Kerajinan dari Barang Bekas', 'Daur Ulang', 'Mengasah kreativitas sekaligus mengurangi limbah rumah tangga.', 'Ubah barang tidak terpakai menjadi benda baru yang bermanfaat.', 20, 4),
(19, 'Kumpulkan Barang Bekas untuk Daur Ulang', 'Daur Ulang', 'Membantu proses pengelolaan sampah yang berkelanjutan dan mengurangi beban TPA.', 'Pilah dan kumpulkan barang yang bisa didaur ulang agar tidak terbuang.', 25, 5);

-- --------------------------------------------------------

--
-- Table structure for table `badges`
--

CREATE TABLE `badges` (
  `id` int NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `criteria` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `badges`
--

INSERT INTO `badges` (`id`, `name`, `image_name`, `criteria`) VALUES
(1, 'Green Starter', 'Aktif_Badge_Green_Starter.png', 'Selesaikan 1 aksi lingkungan pertama.'),
(2, 'Plastic Hero', 'Aktif_Badge_Plastic_Hero.png', 'Selesaikan 5 aksi di kategori Kurangi Sampah Plastik.\n\n'),
(3, 'Energy Saver', 'Aktif_Badge_Energy_Saver.png', 'Selesaikan 5 aksi di kategori Penghematan Energi.\n\n'),
(4, 'Nature Guardian', 'Aktif_Badge_Nature_Guardian.png', 'Selesaikan 5 aksi di kategori Peduli Alam.\r\n\r\n'),
(5, 'Eco Explorer', 'Aktif_Badge_Eco_Explorer.png', 'Selesaikan minimal 1 aksi di 3 kategori berbeda.'),
(6, 'Eco Master', 'Aktif_Badge_Eco_Master.png', 'Capai level maksimum.');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int NOT NULL,
  `nama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pesan` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `min_points` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `name`, `min_points`) VALUES
(1, 'Level 1', 0),
(2, 'Level 2', 50),
(3, 'Level 3', 150),
(4, 'Level 4', 300),
(5, 'Level 5', 500);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) NOT NULL,
  `expires` int UNSIGNED NOT NULL,
  `data` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password_hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `display_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `avatar_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'sphero',
  `points` int DEFAULT '0',
  `level` int DEFAULT '1',
  `last_action_date` date DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password_hash`, `display_name`, `avatar_name`, `points`, `level`, `last_action_date`, `created_at`) VALUES
(1, 'test_user@gmail.com', '$2b$10$CfjHyQw21yRrj9TEgQaXYOV6w891MOrWIy8i5kS/SoQTSUtm8royW', 'test_user', 'sphero', 330, 4, '2025-10-15', '2025-10-15 11:15:24'),
(2, 'ello@gmail.com', '$2b$10$YGprq00/nMGOgL4qm8FpEuzCdgkZ./iacEHI9.jFOQoKKyQfng2Qm', 'ElloRabyndra', 'sphero', 0, 1, NULL, '2025-10-15 11:42:18');

-- --------------------------------------------------------

--
-- Table structure for table `user_actions`
--

CREATE TABLE `user_actions` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `action_id` int NOT NULL,
  `timestamp` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_actions`
--

INSERT INTO `user_actions` (`id`, `user_id`, `action_id`, `timestamp`) VALUES
(1, 1, 9, '2025-10-15 11:18:05'),
(2, 1, 5, '2025-10-15 11:18:14'),
(3, 1, 1, '2025-10-15 11:18:18'),
(4, 1, 6, '2025-10-15 11:38:27'),
(5, 1, 6, '2025-10-15 11:38:30'),
(6, 1, 6, '2025-10-15 11:38:34'),
(7, 1, 6, '2025-10-15 11:38:37'),
(8, 1, 9, '2025-10-15 11:38:53'),
(9, 1, 7, '2025-10-15 11:38:57'),
(10, 1, 7, '2025-10-15 11:39:00'),
(11, 1, 7, '2025-10-15 11:39:03'),
(12, 1, 7, '2025-10-15 11:39:06'),
(13, 1, 7, '2025-10-15 11:39:09'),
(14, 1, 7, '2025-10-15 11:39:15'),
(15, 1, 11, '2025-10-15 11:39:25'),
(16, 1, 11, '2025-10-15 11:39:28'),
(17, 1, 11, '2025-10-15 11:39:31'),
(18, 1, 11, '2025-10-15 11:39:39'),
(19, 1, 11, '2025-10-15 11:39:42'),
(20, 1, 11, '2025-10-15 11:39:45'),
(21, 1, 11, '2025-10-15 11:39:50'),
(22, 1, 11, '2025-10-15 11:39:55'),
(23, 1, 11, '2025-10-15 11:41:34');

-- --------------------------------------------------------

--
-- Table structure for table `user_badges`
--

CREATE TABLE `user_badges` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `badge_id` int NOT NULL,
  `awarded_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_badges`
--

INSERT INTO `user_badges` (`id`, `user_id`, `badge_id`, `awarded_at`) VALUES
(1, 1, 1, '2025-10-15 11:18:05'),
(2, 1, 5, '2025-10-15 11:18:18'),
(3, 1, 2, '2025-10-15 11:38:37'),
(4, 1, 4, '2025-10-15 11:39:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actions`
--
ALTER TABLE `actions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `badges`
--
ALTER TABLE `badges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_actions`
--
ALTER TABLE `user_actions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `action_id` (`action_id`);

--
-- Indexes for table `user_badges`
--
ALTER TABLE `user_badges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `badge_id` (`badge_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actions`
--
ALTER TABLE `actions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `badges`
--
ALTER TABLE `badges`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_actions`
--
ALTER TABLE `user_actions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `user_badges`
--
ALTER TABLE `user_badges`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_actions`
--
ALTER TABLE `user_actions`
  ADD CONSTRAINT `user_actions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_actions_ibfk_2` FOREIGN KEY (`action_id`) REFERENCES `actions` (`id`);

--
-- Constraints for table `user_badges`
--
ALTER TABLE `user_badges`
  ADD CONSTRAINT `user_badges_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_badges_ibfk_2` FOREIGN KEY (`badge_id`) REFERENCES `badges` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
