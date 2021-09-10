---
sidebar_position: 2
---

# Menginstall Java

Sebelum belajar pemrograman Java, kita perlu menginstall compiler dan runtime untuk Java nya terlebih dahulu. Dimana terdapat dua jenis aplikasi Java

- JDK (Java Development Kit), yaitu aplikasi yang digunakan untuk melakukan kompilasi kode program Java menjadi file binary Java
- JRE (Java Runtime Environment), yaitu aplikasi yang digunakan untuk menjalankan file binary Java yang telah di compile oleh JDK

Namun saat kita menginstall JDK, kita tidak perlu lagi menginstall JRE, karena di dalam JDK sudah terdapat juga JRE nya. Oleh karena itu untuk menginstall Java, kita cukup download aplikasi JDK

## Download OpenJDK

Saya akan menggunakan OpenJDK sebagai JDK yang akan saya gunakan, karena OpenJDK salah salah satu compiler dan runtime Java yang OpenSource dan juga Free. Untuk download nya, kita bisa mengunjungi halaman website OpenJDK di : http://jdk.java.net/

![Website JDK](/img/tutorial-java/dasar/jdk-website.png)

Pada saat saya buat artikel ini, versi yang sudah rilis adalah versi JDK 15. Jadi saya akan download versi JDK 15.

![JDK Download](/img/tutorial-java/dasar/jdk-download.png)

JDK bisa digunakan di sistem operasi apapun, Linux, Windows maupun Mac. Dan file JDK itu merupakan file archive, jadi kita tidak perlu menginstallnya, cukup download file JDK nya, lalu extract di hardrive kita.

## Isi JDK

Setelah kita ekstrak file zip atau tar.gz yang sudah kita download. Kurang lebih isi file nya sebagai berikut (saya menggunakan Mac, mungkin di sistem operasi lain isi folder nya berbeda)

![JDK Folder](/img/tutorial-java/dasar/jdk-folder.png)

## Setting Path

Sebelum kita menggunakan Java, kita perlu melakukan setting Path terlebih dahulu. Tujuannya adalah agar kita bisa mengakses program JDK dan JRE dari mana saja menggunakan terminal / command line. Tanpa melakukan pengaturan Path, maka secara otomatis sistem operasi kita tidak akan mengerti dimana harus menemukan program JDK dan JRE nya.

### Cara Setting Path Java di Windows

Untuk melakukan setting di Windows, kita bisa membuka pengaturan Environment Variables. Kita lakukan search di windows menu, lalu ketikkan Environment Variable. Lalu klik menu Edit the system environment variablesb.

![Setting JDK di Windows](/img/tutorial-java/dasar/windows-path.png)

Selanjutnya setelah keluar menu System Properties, silahkan pilih tombol Environment Variables.

![System Properties](/img/tutorial-java/dasar/system-properties.png)

Selanjutnya, pada bagian System Variables, silahkan cari Variable dengan nama Path, lalu klik tombol Edit untuk mengubah variable tersebut.

![Environment Variable](/img/tutorial-java/dasar/environment-variable.png)

Selanjutnya tambahkan direktori lokasi kita mengekstrak file OpenJDK lalu dibelakangnya tambahkan folder bin, sehingga terlihat seperti pada gambar dibawah ini

![Edit Environment Variable](/img/tutorial-java/dasar/edit-environment-variable.png)

Sekarang kita sudah selesai menambah OpenJDK ke Path sistem operasi Windows

### Cara Setting Path Java di Mac

Untuk setting Path di Mac silahkan cari di home kita file .bashrc, atau .profile atau .zshrc. Buka salah satunya saja, lalu setelah itu tambahkan code dibawah ini pada bagian file tersebut. Jika semua file tersebut belum ada, kita bisa membuat file baru .bashrc

```shell
# Sesuaikan dengan lokasi JDK di komputer kita
export PATH="/Users/khannedy/App/jdk15/Contents/Home/bin:$PATH"
```

### Cara Setting Path Java di Linux

Untuk setting Path di Linux hampir mirip dengan Mac, silahkan cari di home kita file .bashrc, atau .profile atau .zshrc. Buka salah satunya saja, lalu setelah itu tambahkan code dibawah ini pada bagian file tersebut. Jika semua file tersebut belum ada, kita bisa membuat file baru .bashrc

```shell
# Sesuaikan dengan lokasi JDK di komputer kita
export PATH="/Users/khannedy/App/jdk15/bin:$PATH"
```

## Mencoba JDK dan JRE

Untuk memastikan bahwa kita telah benar melakukan pengaturan JDK dan JRE, kita bisa mencoba menjalankannya menggunakan terminal / command line. Silahkan buka terminal / command line di sistem operasi kita. Untuk memastikan bahwa JDK terinstall dengan baik, kita bisa mengetikkan perintah javac (Java Compiler) lalu diikuti dengan -version (untuk melihat versi JDK nya). Jika keluar versi JDK nya, berarti kita susah sukses menginstall JDK OpenJDK

```shell
javac -version
javac 15.0.1
```

Selanjutnya, untuk memastikan bahwa JRE nya terinstall dengan baik. Kita bisa menggunakan perintah java -version

```shell
java -version
openjdk version "15.0.1" 2020-10-20
OpenJDK Runtime Environment (build 15.0.1+9)
OpenJDK 64-Bit Server VM (build 15.0.1+9, mixed mode, sharing)
```

Jika sudah sukses, berarti sekarang kita sudah siap untuk melanjutkan belajar Java

