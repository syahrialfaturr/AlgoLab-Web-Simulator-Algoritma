# *🧠 AlgoLab Web Simulator Algoritma*

>**Ujian Akhir Semester - Algoritma Pemrograman**  
>🏛️ Universitas Muhammadiyah Malang - 2025

## 👥 Nama Anggota
| Nama                     | NIM             |
|--------------------------|-----------------|
| Muhammad Robi Ardita     | 202410370110002 |
| Syahrial Nur Faturrahman | 202410370110009 |
| Farid Al Farizi          | 202410370110017 |
| Naufal Arkaan            | 202410370110020 |

---

## 📜 Deskripsi Proyek
**AlgoLab Web Simulator Algoritma** adalah aplikasi berbasis web yang dikembangkan sebagai **Project UAS mata kuliah Algoritma Pemrograman**.  
Aplikasi ini dirancang untuk membantu pengguna memahami konsep algoritma melalui **simulasi interaktif**, di mana pengguna dapat memasukkan data secara langsung dan melihat hasil pemrosesan algoritma.

Proyek ini mengimplementasikan beberapa studi kasus algoritma yang telah ditentukan dalam ketentuan UAS dan disajikan dalam satu aplikasi terpadu.

##  Tujuan Pembuatan
- Memenuhi tugas Project UAS mata kuliah Algoritma Pemrograman
- Membantu pengguna memahami alur kerja dan logika algoritma melalui simulasi langsung
- Meningkatkan pemahaman pembelajaran algoritma dengan memberikan pengalaman belajar yang lebih visual dan praktis
- Mengimplementasikan konsep algoritma ke dalam bentuk aplikasi interaktif berbasis web


## 🧩 Studi Kasus Algoritma yang Diimplementasikan
Aplikasi ini mengimplementasikan **tiga studi kasus algoritma**, yaitu:
### 1. Huffman Coding  
Algoritma Huffman Coding digunakan untuk melakukan kompresi data berdasarkan frekuensi kemunculan karakter dengan membangun pohon Huffman.
### 2. Binary Search Tree (BST)  
Binary Search Tree digunakan untuk menyimpan data dalam struktur pohon biner terurut.  
Aplikasi ini juga mendukung operasi traversal pada BST, yaitu:
- InOrder  
- PreOrder  
- PostOrder
### 3. Algoritma Dijkstra  
Algoritma Dijkstra digunakan untuk menentukan jalur terpendek dari satu simpul ke simpul lain pada graf berbobot.

---

## ⚙️ Fitur Aplikasi
- Aplikasi berbasis web yang interaktif  
- Input data algoritma langsung oleh pengguna  
- Simulasi hasil algoritma secara real-time

---

## 🖥️ Teknologi yang Digunakan
- **Backend** : Python, Flask
- **Frontend** : HTML, CSS, JavaScript

 ---

 ## ▶️ Cara Menjalankan dan Menggunakan Aplikasi

Aplikasi **AlgoLab Web Simulator Algoritma** dapat digunakan melalui dua cara, yaitu melalui **Online** dan **menjalankan secara lokal**.

---

### 🌐 Menjalankan Aplikasi (Online)

Aplikasi dapat diakses secara langsung tanpa instalasi melalui link berikut:

🔗 **Live Demo**  
https://algolab.pythonanywhere.com/

#### Langkah Penggunaan:
1. Buka browser (Chrome, Edge, atau Firefox disarankan)
2. Akses link: https://algolab.pythonanywhere.com/
3. Pilih algoritma yang ingin disimulasikan:
   - Huffman Coding
   - Binary Search Tree
   - Algoritma Dijkstra  
5. Masukkan data sesuai dengan algoritma yang dipilih
6. Jalankan simulasi untuk melihat hasil pemrosesan algoritma

Aplikasi bersifat **interaktif**, sehingga pengguna dapat mencoba berbagai variasi input untuk memahami cara kerja algoritma.



### 💻 Menjalankan Aplikasi Secara Lokal

Aplikasi juga dapat dijalankan secara lokal dengan langkah-langkah berikut:

1. Clone repository project
2. Buka folder project menggunakan **VS Code** atau editor lain
3. Buka terminal pada folder project
4. Jalankan perintah berikut:
```bash
pip install -r requirements.txt
python backend/app.py
```
5. Buka browser dan akses: http://localhost:5000
