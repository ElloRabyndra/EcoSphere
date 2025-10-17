PANDUAN INSTALASI DAN PENGGUNAAN ECOSPHERE (SINERGI FEST 2025)

============================= PERSYARATAN SISTEM =============================
Sebelum memulai instalasi, pastikan sistem Anda memenuhi persyaratan berikut:

  A. Node.js
  -Versi minimal: Node.js 18.x atau lebih tinggi
  -Download: https://nodejs.org/en/download/
  -Pilih versi LTS (Long Term Support) untuk stabilitas terbaik
  -Verifikasi instalasi dengan perintah: node --version

  B. MySQL
  Bisa menggunakan DBMS seperti XAMPP atau Laragon

  C. Package Manager
  -npm (sudah terinstall bersama Node.js)
  -Verifikasi instalasi dengan perintah: npm --version

  D. IDE Seperti VSCODE


============================= INSTALASI =============================
  A. Ekstrak project
  -Pastikan sudah mengekstrak project ecosphere
  -Pastikan struktur folder tetap utuh (backend, frontend, ecosphere.sql)
  -Buka terminal dan jalankan "code ." jika ingin langsung membuka vscode


============================= KONFIGURASI DATABASE =============================
  A. Jalankan MySQL

  B. Buat database baru dengan nama "ecosphere"

  C. Import database 
  -Pilih database "ecosphere" yang baru dibuat dan klik import
  -Pilih file "ecosphere.sql" dari root folder project, dengan nama "ecosphere.sql"
  -Verifikasi Database, Anda akan melihat tabel-tabel: actions, badges, feedback, levels, sessions, users, user_actions, user_badges


============================= KONFIGURASI BACKEND =============================
  A. Masuk ke Direktori Backend
    -Jalankan perintah: cd backend

  B. Install Dependencies
    -Jalankan perintah: npm install

  C. Konfigurasi Koneksi Database
    -Buka file backend/db.js 
    -Sesuaikan konfigurasi user, password, dan database dengan setting MySQL Anda:


============================= KONFIGURASI FRONTEND =============================
  A. Masuk ke Direktori Frontend
    -Dari direktori backend, kembali ke root: cd ..
    -Masuk ke direktori frontend: cd frontend

  B. Install Dependencies
    -Jalankan perintah: npm install


============================= MENJALANKAN WEBSITE =============================
  A. Menjalankan Backend Server
    -Buka terminal/command prompt baru
    -Navigasi ke folder backend: cd backend
    -Jalankan server: npm run dev
    -Server akan berjalan di http://localhost:3000
    -Biarkan terminal ini tetap terbuka

  B. Menjalankan Frontend Server
    -Buka terminal/command prompt baru (jangan tutup terminal backend)
    -Navigasi ke folder frontend: cd frontend
    -Jalankan server: npm run dev
    -Server akan berjalan di http://localhost:5173
    -Biarkan terminal ini tetap terbuka

  C. Mengakses Website
    -Buka browser 
    -Akses http://localhost:5173/
    -Anda akan melihat landing page EcoSphere

============================= PANDUAN MENGGUNAKAN WEBSITE =============================
A. Landing Page
  -Setelah mengakses http://localhost:5173/, Anda akan melihat landing page
  -Landing page menjelaskan tentang EcoSphere dan fitur-fiturnya
  -Klik tombol "Gabung Sekarang" untuk mulai menggunakan aplikasi

B. Login/Register
  Opsi 1 - Menggunakan Akun Test:
    -Klik tombol "Masuk" di landing page atau navigasi ke /login
    -Gunakan kredensial berikut:
    -Email: test_user@gmail.com
    -Password: 123456
    -Klik tombol "Masuk"

  Opsi 2 - Registrasi Akun Baru:
    -Klik tombol "Daftar" atau navigasi ke /register
    -Isi form registrasi dan klik tombol "Daftar
    -Anda akan otomatis login dan diarahkan ke halaman home

C. Navigasi Sidebar
  -Menu: Home, Edukasi, Aksi, Badge, Tentang, Profil
  -Logout

D. Halaman Home (Dashboard)
  -Menampilkan kartu profil (avatar, nama, level, poin, progress bar ke level berikutnya)
  -Koleksi badge
  -Daftar misi: rekomendasi aksi berdasarkan level

E. Halaman Edukasi
  -Berisi panduan lingkungan dan tips ramah lingkungan
  -Eco Tips: tips singkat untuk kehidupan sehari-hari yang ramah lingkungan

F. Halaman Aksi
  -Menampilkan semua aksi yang tersedia
  -Dikelompokkan dalam 5 kategori: Peduli Alam, Kurangi Sampah Plastik, Hemat Energi, Bijak dalam -Konsumsi, Daur Ulang
  -Setiap kartu aksi menampilkan: judul, kategori, poin, level minimal, status
  -Aksi terkunci ditandai dengan ikon gembok dan informasi level yang dibutuhkan
  -Klik kartu aksi untuk melihat detail dan melakukan aksi

G. Detail Aksi & Melakukan Aksi
  -Menampilkan deskripsi lengkap, dampak ekologis, poin, dan level minimal
  -Klik tombol "Lakukan Aksi" untuk menyelesaikan
  -Sistem akan otomatis: menambah poin, cek level up, cek badge baru, tampilkan notifikasi

H. Sistem Level
  -Level 1: 0 poin, Level 2: 50 poin, Level 3: 150 poin, Level 4: 300 poin, Level 5: 500 poin
  -Naik level dengan mengumpulkan poin dari aksi
  -Manfaat: membuka aksi baru, mendapat badge khusus (Eco Master untuk level 5)

I. Halaman Badge
  -Menampilkan semua 6 badge yang tersedia
  -Badge yang sudah didapat berwarna terang, yang belum berwarna abu-abu/pudar
  -Badge otomatis didapat saat kriteria terpenuhi

J. Halaman Tentang
  -Informasi tim pengembang EcoSphere
  -Form feedback untuk mengirim saran dan kritik

K. Halaman Profil
  -Informasi akun: avatar, nama, email, level, total poin
  -Statistik: total aksi, jumlah badge, progress badge, progress ke level berikutnya

Jika terdapat kendala dalam menjalankan website anda dapat menghubungi pihak panitia atau menghubungi pihak tim kami, +6281364324016 (Ello)