---
sidebar_position: 4
---

# Program Hello World

Saat belajar bahasa pemrograman, biasanya kita akan membuat sebuah program Hello World. Program Hello World adalah
sebuah program sederhana yang hanya menampilkan tulisan Hello World. Dan pada tutorial ini, kita akan mencoba membuat
program Hello World menggunakan Java

## File Java

Sebelum kita membuat kode program Java, kita perlu tahu beberapa hal tentang tata cara pembuatan file Java.

- File kode program Java disimpan dalam file dengan ekstensi .java, misal Eko.java, Kurniawan.java, Programmer.java dan
  lain-lain
- Penamaan file Java itu biasanya mengikuti format PascalCase (tiap awal kata selalu hurup kapital). Misal,
  EkoKurniawan.java, ProgramHelloWorld.java, ProgrammerZamanNow.java, AplikasiPenjualan.java, AplikasiOjekOnline.java
  dan lain-lain
- Dilarang ada spasi dalam penamaan file Java

## Program Hello World

Sekarang saatnya membuat program Hello World. Dimulai dengan membuat file Java, silahkan buat file Java dengan nama
ProgramHelloWorld.java (INGAT JANGAN BUAT FILE BERBEDA), pastikan hurup besar kecilnya harus sama.

Selanjutnya, setelah membuat file ProgramHelloWorld.java, silahkan buka menggunakan IDE atau Text Editor. Isi kode Java
nya dengan kode sebagai berikut.

```java title="ProgramHelloWorld.java"
public class ProgramHelloWorld {

}
```

Pada kode diatas kita membuat sebuah public class bernama ProgramHelloWorld. Bentar, apa itu public class? Teman-teman
tidak perlu tahu dulu untuk sekarang, ini akan kita bahas nanti di materi Java Object Oriented Programming. Untuk
sekarang tinggal diikuti dulu saja.

Nama public class nya harus sama dengan nama file. Jika nama file sebelumnya yang kita buat adalah ProgramHelloWorld,
maka nama public class nya harus ProgramHelloWorld. Besar kecilnya harus sama karena Java adalah bahasa pemrograman yang
case sensitive (artinya huruf besar dan kecil dianggap berbeda).

Selanjutnya kita akan menambahkan sebuah main method. Main adalah sebuah bagian kode program yang akan dieksekusi oleh
Java ketika pertama kali program Java berjalan.

```java title="ProgramHelloWorld.java"
public class ProgramHelloWorld {

  public static void main(String[] args) {

    

  }

}
```

Ada banyak istilah diatas mungkin yang asing, seperti apa itu static? void? main? String[] args? dan lain-lain. Sampai
saat ini teman-teman cukup ikuti saja. Nanti sambil berjalan teman-teman akan tiap istilah yang kita ketikkan diatas.

Di dalam kurung kurawal buka dan kurung kurawal tutup main method diatas lah. Kode program kita perlu kita tempatkan.
Jadi selanjutnya setiap teman-teman membuat program Java, teman-teman akan selalu melakukan hal diatas.

- Membuat public class yang sama dengan nama file Java, dan
- Membuat main method seperti pada kode diatas

Selanjutnya jika kita ingin membuat tulisan, kita bisa menggunakan kode System.out.println("Isi Kode"); Dimana "Isi
Kode" bisa kita ganti dengan tulisan yang akan kita keluarkan, misal "Hello World".

```java title="ProgramHelloWorld.java"
public class ProgramHelloWorld {

  public static void main(String[] args) {

    System.out.println("Hello World");

  }

}
```

Kode program Java selalu diakhiri dengan ; (titik koma). Mirip seperti bahasa pemrograman C, PHP dan JavaScript. Jika
kita tidak menambah titik koma, maka secara otomatis akan Error

Sekarang kita sudah selesai membuat program Hello World. Selanjutnya kita perlu lakukan kompilasi agar menjadi binary
file Java menggunakan JDK, baru nanti file binary file Java tersebut bisa kita jalankan menggunakan JRE.

## Kompilasi Kode Java

Setelah membuat program Hello World, selanjutnya kita perlu melakukan kompilasi menggunakan JDK. Untuk melakukan
kompilasi, teman-teman bisa buka terminal / command line. Lalu silahkan masuk ke folder dimana kita menyimpan kode
program Java nya.

Untuk melakukan kompilasi, kita bisa menggunakan perintah javac lalu diikuti dengan nama file Java nya, misalnya : javac
ProgramHelloWorld.java

```shell
javac ProgramHelloWorld.java
```

Jika sukses, maka akan ada file baru dengan nama file sama, namun extensinya adalah .class, misal
ProgramHelloWorld.class. Ini adalah binary file Java. File ini tidak akan bisa dibuka oleh Text Editor, hanya bisa
dijalankan oleh JRE.

## Error Saat Kompilasi Kode Java

Jika teman-teman tidak mengalamahi error, berarti bagus. Teman-teman susah mengikuti tutorialnya dengan baik. Namun jika
ternyata ada error, berarti teman-teman kurang jeli mengikuti tutorial nya. Berikut saya bahas beberapa error yang
sering terjadi.

### Error : File Tidak Ditemukan

```shell
javac ProgramHelloWorld.java
error: file not found: ProgramHelloWorld.java
Usage: javac <options> <source files>
use --help for a list of possible options
```

Jika terjadi error seperti diatas, berarti file Java yang dikompilasi tidak ditemukan. Kemungkinannya antara nama file
yang teman-teman ketik salah. Atau teman-teman tidak berada di folder yang sama dengan file Java nya. Silahkan perbaiki
nama file Java nya, atau silahkan pindah ke folder dimana teman-teman menyimpan file java nya dengan menggunakan
perintah cd diikuti folder lokasinya, misal : cd /Users/khannedy/Projects/BelajarJava/

### Error : Nama Class Salah

```shell
javac ProgramHelloWorld.java
ProgramHelloWorld.java:1: error: class ProgramHelloworld is public, should be declared in a file named ProgramHelloworld.java
public class ProgramHelloworld {
       ^
1 error
```

Jika teman-teman mengalami error seperti diatas, artinya nama class nya berbeda dengan nama file Java nya. Saya sudah
jelaskan diatas kalo nama class harus sama dengan nama file, dan juga besar kecil huruf nya harus sama, karena di Java
case sensitive. Jadi jika nama file nya ProgramHelloWorld.java, nama nama class nya harus ProgramHelloWorld. Silahkan
diperbaiki lagi

### Error : Lupa Titik Koma

```shell
javac ProgramHelloWorld.java
ProgramHelloWorld.java:5: error: ';' expected
    System.out.println("Hello World")
                                     ^
1 error
```

Jika mengalami error seperti diatas. Berarti kita lupa menambahkan tanda ; (titik koma). Di Java semua kode program
harus diakhiri dengan ; (titik koma). Silahkan tambahkan titik koma.

## Menjalankan Program Java

Jika sudah sukses melakukan kompilasi, saatnya menjalankan file hasil kompilasinya dengan extensi .class menggunakan
JRE. Untuk menjalankan file binary tersebut, kita bisa menggunakan perintah java diikuti dengan nama file nya, namun
tidak perlu menambahkan ekstensi .class nya, misal : java ProgramHelloWorld

```shell
java ProgramHelloWorld 
Hello World
```

Jika setelah di ENTER keluar tulisan Hello World, selamat, berarti kita sudah berhasil membuat program Hello World
menggunakan Java.

## Error Saat Menjalankan Program Java

Jika teman-teman gagal menjalankan program Java, berarti ada yang salah dengan file binary nya. Berikut saya jelaskan
beberapa error yang sering dihadapi.

### Error : Class Tidak Ditemukan

```shell
java ProgramHelloworld
Error: Could not find or load main class ProgramHelloworld
Caused by: java.lang.NoClassDefFoundError: ProgramHelloWorld (wrong name: ProgramHelloworld)
```

Jika kita mendapatkan error seperti diatas, artinya kita salah mengetikkan nama file nya. Ingat di Java itu case
sensitive, pastikan mengetikkan nama file yang benar dengan file binary .class yang sudah terbuat

### Error : Main Method Tidak Ditemukan

```shell
java ProgramHelloWorld 
Error: Main method not found in class ProgramHelloWorld, please define the main method as:
   public static void main(String[] args)
or a JavaFX application class must extend javafx.application.Application
```

Jika kita mendapat error diatas, itu artinya main method tidak ditemukan. Biasanya ini karena kita salah membuat nama
method nya. Ingat harus sama, silahkan ubah lagi kode program nya, dan pastikan nama method nya harus : public static
void main(String[] args). Hurup besar kecil nya harus sama. Setelah dirubah, JANGAN LUPA LAKUKAN KOMPILASI ULANG.

---

Demikianlah tutorial tentang program Hello World di Java. Jika teman-teman masih mendapat error, namun berbeda errornya
dari yang saya jelaskan. Silahkan masukkan di komentar.

