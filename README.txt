PANDUAN INSTALASI DAN PENGGUNAAN ECOSPHERE

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


Jika terdapat kendala dalam menjalankan website anda dapat menghubungi pihak panitia atau menghubungi pihak tim kami, +6281364324016 (Ello)