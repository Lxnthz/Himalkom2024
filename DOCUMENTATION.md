# Overview <a name="overview"></a>
Dokumentasi ini dibuat dengan tujuan untuk melakukan _progress tracking_ selama proses pengembangan berlangsung. Dokumentasi ini ditujukan untuk para pengembang website baik yang sekarang maupun pengembang yang baru tergabung pada tim website Ristek Himalkom selanjutnya.

# Table of Contents <a name="table_of_contents"></a>
1. [Overview](#overview)
2. [Table of Contents](#table_of_contents)
3. [Features](#features)
4. [Development Setup](#development_setup)
   1. [Prerequisites](#prerequisites)
      1. [Frontend](#frontend)
      2. [Backend](#backend)
   2. [Installation](#installation)
5. [Progression](#progression)
   1. [Week 1](#week1)
   2. [Week 2](#week2)
   3. [Week 3](#week3)

# Features <a name="features"></a>
Berikut adalah fitur-fitur esensial yang merupakan fitur utama dari website Himalkom:

1. **Komnews**: Untuk menampung semua berita-berita terkait dengan Ilmu Komputer.
2. **IGallery**: Digunakan untuk menjadi library proyek-proyek yang pernah dikerjakan oleh mahasiswa Ilmu Komputer.
3. **Syntax**: Buku edisi tahunan Himalkom yang mencakup berbagai laporan dan artikel.
4. **Hasil Riset**: Menampilkan hasil riset yang mencakup cover, judul, tanggal, dan link ke setiap data riset.

# Design
[Figma](https://www.figma.com/design/jEsUCLMBxasaoGOuIdBFr8/Redesign-Web-HIMALKOM?node-id=0-1&t=DCOcAobOOwvHCDjb-0)

# Development Setup <a name="development_setup"></a>
Pada pengembangan website Himalkom 2024, berikut adalah tools-tools yang digunakan.

## Prerequisites <a name="prerequisites"></a>

### Frontend <a name="frontend"></a>
1. **ReactJS**: Library JavaScript untuk membangun antarmuka pengguna.
2. **Vite**: Build tool untuk pengembangan frontend yang cepat.
3. **Tailwind CSS**: Framework CSS untuk desain yang fleksibel dan cepat.

### Backend <a name="backend"></a>
1. **NodeJS**: Runtime JavaScript untuk membangun server-side aplikasi.
2. **SQLite**: Database SQL ringan untuk penyimpanan data.
3. **ExpressJS**: 

## Installation <a name="installation"></a>
Berikut adalah langkah-langkah untuk mengatur lingkungan pengembangan:

### 1. Setup backend. <a name="backend"></a>
1. Inisiasi backend.
    ```bash
        mkdir himalkom
        cd himalkom
        mkdir server
        cd server
        npm install --save
        npm init -y
    ```
2. Buat 'server.js' sebagai backend utama.
3. Import library-library yang dibutuhkan dalam pengembangan.
    1. ExpressJS
    2. SQLite
    3. Cors
    ```js
        npm install express sqlite3 cors
    ```
    4. Express-session
    ```js
        npm install express-session
    ```

### 2. Setup frontend <a name="frontend"></a>
1. Inisitasi frontend (Vite React Project).

    ```bash
        cd ../
        npm create vite@latest client --template react
        npm init -y
    ```

2. Install dependencies.
    ```bash
        npm install
    ```
    1. Axios
    ```bash
        npm install axios
    ```
    2. Tailwind CSS
    ```bas
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
    ```
3. Konfigurasi **tailwind.config.js**.
    ```bash
        /** @type {import('tailwindcss').Config} */
        export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }
    ```

> Bagian instalasi diatas adalah requirement dasar dari pengembangan website Himalkom, untuk library-library yang ditambahakan diwaktu yang akan datang tidak akan diberikan dokumentasi, tetapi hanya akan dilist.

# Progression <a name="progression"></a>
## Week 1 <a name="week1"></a>
> **4 Juli 2024** -- Inisiasi enviroment pengembangan, menyiapkan backend dan frontend website.

> **5 Juli 2024** -- Uji coba pengembangan dengan membuat struktur website dan menbuat template komponen Header (Navbar) dan Footer

> **7 Juli 2024** -- Inisiasi repositori github, melakukan _first commit_ pada _**main branch**_

## Week 2 <a name="week2"></a>
> **8 Juli 2024** -- Uji coba pengembangan backend, uji request dan response antara backend dengan frontend, penambahan library **'axios'**.

> **9 Juli 2024** -- Uji pembuatan database dengan **SQLite** untuk membuat akun admin untuk keperluan maintenance website.

> **10 Juli 2024** -- Pembuatan halaman login admin dan halaman dashboard admin.

> **14 Juli 2024** -- Revisi kode untuk _routing_ ke halaman admin

> **15 Juli 2024** -- **Footer selesai dikerjakan** sudah dicek responsiveness, Header mulai dikerjakan, halaman dashboard admin sudah dibuat templatenya. ***Commit main branch ke-2***

## Week 3 <a name="week3"></a>
> **16 Juli 2024** -- **Header** progress memperbaiki navbar, (- buat submenu ilkomunity belom masuk semua), **Routing** sudah sesuai tapi belum testing karna database belum jadi, Start pembuatan preloader, **_Commit main branch ke-3_**

> **17 Juli 2024** -- Improve **security** backend, memindahkan credential admin kedalam **.env**

> **18 Juli 2024** -- memindahkan admin dashboard ke backend, implementasi helmet, dotenv, adminjs, multer pada server

> 


