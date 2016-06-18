Membuat dan Menggunakan Repository di GitHub
GitHub

Pada artikel kali ini saya akan mencoba membuat repository Git pada GitHub. Sebelumnya apa itu GitHub? Github adalah layanan yang menggunakan Git sebagai Version Control untuk mengelola dan memanajemen file. Dan ini sangatlah berguna dalam hal distribusi file, khususnya dalam dunia pemrograman. Berikut ini adalah tutorial dasar untuk mempermudah pekerjaan dengan mudah menggunakan GitHub.
Step 1. Membuat repository baru di GitHub 

Dalam menggunakan Version controll, anda akan selalu melakukan Commit pada Git, tempat tersebut dinamakan sebuah repository (a.k.a. “repo”). Dan untuk menyimpan project yang anda buat pada GitHub, anda perlu memiliki GitHub Repository. Berikut ini adalah cara untuk membuat repository pada GitHub.

Click New Repository .

github2012-12-23_211436

Selanjutnya masukkan informasi tentang anda. jika sudah di isi, selanjutnya click “Create Repository.”
Screenshot from 2012-12-20 21-19-08
Selamat! Sampai pada tahap ini, anda sudah memiliki Repo
Installasi Git pada komputer anda

    Sistem operasi Linux Ubuntu

Jika anda pengguna Sistem operasi Linux Ubuntu, anda hanya mengetikkan perintah dibawah ini untuk melakukan instalasi Git pada komputer anda.

$ sudo apt-get install git

    Sistem operasi Windows

Jika anda pengguna Windows  anda harus mendownload aplikasi  github dari http://windows.github.com/
Membuat file README untuk repo.

File  README bukanlah bagian yang diperlukan dari repo GitHub, tapi kita akan membuat file tersebut untuk uji coba apakah repo dapat digunakan. File README adalah catatan yang bagus untuk menggambarkan proyek Anda atau menambahkan beberapa dokumentasi seperti cara menginstal atau menggunakan proyek Anda. Anda mungkin ingin menyertakan informasi kontak person – jika proyek Anda menjadi orang yang populer akan ingin membantu Anda suatu saat.
 

sekarang masuklah ke command prompt, lalu buat folder sesuai nama project :

mkdir ~/Hello-World  #Membuat direktori "Hello-World"

setelah itu, masuk ke folder tersebut:

cd ~/Hello-World #Masuk ke folder yang anda buat

setelah masuk, ketik perintah tersebut untuk meng initialize folder tersebut:

git init    #Sets up the necessary Git files

setelah masuk, ketik perintah tersebut untuk meng initialize folder tersebut:

touch README# Creates a file called "README" in your Hello-World directory

nah sekarang kita coba file README  di folder Hello-World tersebut menggunakan teks editor anda. tambahkan tulisan “Hello World!” di file tersebut, lalu di simpan .
Step 2. Commit file README 

Sekarang file README sudah siap untuk di commit. Untuk meng -commit dibutuhkan snapshot dari semua file di project anda pada waktu yang sama. pada command prompt, ketikan perintah:

git add README #untuk menambahkan file README
git commit -m 'first commit' #Commit file anda, dengan menambahkan pesan "first commit"

Step 3: Push  commit anda 

Sampai pada step ini, anda telah melakukan commit pada lokal repository anda, tapi masih belum melakukan apapun pada repo GitHub.

Untuk menghubungkan lokal koneksi anda ke GitHub, anda perlu me remote repo dan melakukan push pada commit  anda.

Masukkan perintah ini untuk melakukannya :

git remote add origin https://github.com/namauser/Hello-World.git # membuat remote dengan nama "origin" pointing pada GitHub repo
git push origin master# Mengirimkan perintah commit sebagai "master" branch pada GitHub

Sekarang anda dapat melihat repository anda di GitHub, anda akan dapat melihat file README ada di repo .

 9165bb84-3ae2-40a7-ba6a-d63640a281e0
Selamat…

Congratulations! anda sudah membuat sebuah repository di GitHub, membuat README, meng commit nya , dan push di GitHub. 😀

Seluruh Command
membuat repo menggunakan command

touch README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/username/Hello-World.git
git push -u origin master

Push  repository dari command

git remote add origin https://github.com/usernam/Hello-World.git
git push -u origin master

