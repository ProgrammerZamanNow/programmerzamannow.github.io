---
sidebar_position: 6
---

# Tipe Data Number

Dalam pemrograman, ada banyak sekali tipe data. Salah satu yang paling sering kita gunakan adalah tipe data number atau
angka. Data number banyak sekali kita gunakan dalam kehidupan sehari-hari, contohnya uang, jumlah, nilai ujian di
sekolah, harga barang, dan lain-lain.

Di Java, ada banyak sekali tipe data number. Kenapa banyak? tidak satu saja? Karena tiap tipe data number memiliki
kapasitas daya tampung masing-masing. Dan perlu dingait bahwa semua data itu pasti akan disimpan di media penyimpanan,
entah itu RAM ataupun Disk. Oleh karena itu ada banyak sekali tipe data number, dan kita bisa gunakan sesuai dengan
kebutuhan kita.

## Jenis-Jenis Tipe Data Number

Secara garis besar, di Java tipe data number dibagi menjadi dua grup:

- Integer, yaitu tipe data number bilangan bulat
- Floating Point, yaitu tipe data number bilangan desimal

## Tipe Data Integer

Untuk tipe data Integer pun, masih banyak jenisnya. Tiap jenis tipe data Integer memiliki batas minimal dan maksimal
yang bisa ditampung yang berbeda-beda. Selain itu ukurannya pun berbeda-beda.

| Tipe Data | Minimal              | Maksimal            | Ukuran  | Nilai Default |
|-----------|----------------------|---------------------|---------|---------------|
| byte      | -128                 | 127                 | 1 byte  | 0             |
| short     | -32768               | 32767               | 2 byte  | 0             |
| int       | -2147483648          | 2147483647          | 4 bytes | 0             |
| long      | -9223372036854775808 | 9223372036854775807 | 8 bytes | 0             |

## Tipe Data Floating Point

Untuk tipe data Floating Point pun, ada beberapa jenis. Dan tiap jenisnya pun memiliki batas minimal dan maksimal juga
ukuran yang berbeda

| Tipe Data | Minimal  | Maksimal | Ukuran  | Nilai Default |
|-----------|----------|----------|---------|---------------|
| float     | 3.4e−038 | 3.4e+038 | 4 bytes | 0.0           |
| double    | 1.7e−308 | 1.7e+308 | 8 bytes | 0.0           |

## Sekilas Tentang Variable

    Materi variabel akan dibahas secara detail di artikel terpisah.

Saat kita ingin membuat sebuah data, biasanya kita akan simpan datanya di dalam sebuah variabel. Variable adalah tempat
untuk menyimpan data. Variable di Java harus ditentukan tipe datanya sejak awal, tidak seperti di bahasa pemrograman PHP
yang bisa berubah-ubah tipe data, di Java variable tidak bisa berubah tipe data.

Untuk membuat variable, kita bisa menggunakan perintah :

```java
TipeData namaVariable = isidata;
```

Penamaan variable di Java, biasanya menggunakan format camelCase (diawal hurup kecil, kata selanjutnya hurup besar),
misal namaDepan, namaBelakang, total, jumlah, jumlahOrder, jumlahOrderMinimal, dan lain-lain.

## Membuat Variable Tipe Data Number

Sekarang kita coba membuat kode program yang berisikan variable tipe data number.

```java title="TipeDataNumber.java"
public class TipeDataNumber {

  public static void main(String[] args) {

    byte iniByte = 100;
    short iniShort = 1000;
    int iniInt = 10000000;
    long iniLong = 1000000000;
    long iniLong2 = 1000000000L;

    float iniFloat = 10.10F;
    double iniDouble = 10.10;

  }

}
```

husus untuk tipe data float dan long, pembuatan angkanya agak sedikit berbeda.

- long, kita bisa (tidak wajib) menambahkan L (besar atau kecil) dibelakang angka untuk menandakan bahwa itu adalah
  long.
- float, kita wajib menambahkan F (besar atau kecil) dibelakang angka.

## Garis Bawah di Number

Di Java, kita juga bisa menambahkan garis bawah pada data angka. Tidak ada arti khusus dengan garis bawah di angka,
biasanya ini digunakan hanya agar membermudah kita ketika membaca angka.

```java title="TipeDataNumber.java"
public class TipeDataNumber {

  public static void main(String[] args) {

    byte iniByte = 100;
    short iniShort = 1_000;
    int iniInt = 10_000_000;
    long iniLong = 1_000_000_000;
    long iniLong2 = 1_000_000_000L;

    float iniFloat = 10.10F;
    double iniDouble = 10.10;

  }

}
```

Sekarang kita bisa membaca angka pada kode program diatas lebih mudah dibandingkan tanpa garis bawah.

## Literals

Tipe data number di Java secara default merupakan decimal literals, atau bilangan basis 10. Kadang kita butuh membuat
number dengan literals lain. Dan Java mendukung beberapa literals

- Decimal : Basis 10, yang artinya digitnya adalah 0 sampai 9. Secara default number di Java adalah decimal (basis 10)
- Hexadecimal : Basis 16, dimana digitnya adalah 0 sampai 9 dan A sampai F. Untuk membuatan hexadecimal, kita wajib
  menambahkan 0x (nol + x) diawal angka
- Binary : Basis 2, dimana digitnya adalah 0 dan 1. Untuk membuat binary, kita wajib menambahkan 0b (nol + b) di awal
  angka

```java title="TipeDataNumber.java"
public class TipeDataNumber {

  public static void main(String[] args) {

    int decimalInt = 34;
    int hexaDecimal = 0xFFFFFF;
    int binaryDecimal = 0b10101010;

  }

}

```

## Konversi Tipe Data Number

Di Java juga mendukung konversi tipe data dari satu number ke number lainnya. Misal kita ingin melakukan konversi dari
tipe data long ke int, atau dari double ke long, dan lain-lain. Konversi tipe data number di Java bisa dilakukan
secara :

- Widening Casting (otomatis), dan
- Narrowing Casting (manual)

Widening Casting terjadi dimana tipe data dengan daya tampung lebih kecil di konversi ke tipe data dengan daya tampung
yang lebih besar. Seperti ini urutannya:

```text
byte -> short -> int -> long -> float -> double
```

Artinya, jika kita konversi dari byte ke int, maka itu akan dikonversi secara otomatis. Atau kita konversi dari int ke
double, itu juga akan dikonversi secara otomatis.

```java title="KonversiNumberWidening.java""
public class KonversiNumberWidening {

  public static void main(String[] args) {

    byte iniByte = 10;
    short iniShort = iniByte;
    int iniInt = iniShort;

  }
}
```

Sedangkan Narrowing Casting terjadi dimana tipe data dengan data tampung lebih besar dikonversi ke tipe data dengan daya
tampung lebih kecil. Seperti ini urutannya:

```text
double -> float -> long -> int -> short -> byte
```

Untuk melakukan narrowing casting, kita wajib menyebutkan tipe datanya secara eksplicit ketika melakukan konversi

```java
TipeData variable = (TipeData) dariVariable;
```

```java title="KoversiNumberNarrowig""
public class KonversiNumberNarrowing {

  public static void main(String[] args) {

    int iniInt = 1000;
    byte iniByte = (byte) iniInt;
    short iniShort = (short) iniInt;

  }
}
```

## Masalah Konversi Tipe Data Number

Hati-hati jika melakukan konversi tipe data number secara narrowing, terutama ketika data nya melebihi kapasitas yang
dituju. Misal ketika data int 1000000 di konversi ke short, maka 1000000 tersebut tidak bisa ditampung oleh short, maka
secara otomatis akan terjadi number overflow (kelebihan number)

Hal ini tidak akan menjadikan error, hanya saja, number di variable byte nilainya akan berbeda dari int, number overflow
akan kembali lagi ke bilangan minimal awal sebuah tipe data number

```java title="KonversiNumberOverflow"
public class KonversiNumberOverflow {

  public static void main(String[] args) {

    int iniInt = 128;
    byte iniByte = (byte) iniInt;

    System.out.println(iniByte);

    int iniInt2 = 129;
    byte iniByte2 = (byte) iniInt2;

    System.out.println(iniByte2);

  }
}
```

Pada kode diatas, iniByte akan menghasilkan -128, karena maksimal data tampung byte adalah 127, sehingga terjadi number
overflow, dan kelebihan 1 nya akan berputar ke angka paling awal lagi, yaitu -128

Sedangkan iniByte2 akan bernilai -127, karena 129 melebihi maksimal data tampung byte adalah 127, sehingga menjadi
number overflow, dan kelebihannya dalah 2, sehingga berputar ke angka byte paling awal yaitu -128, namun karena overflow
nya sebesar 2 angka, berarti setelah -128, dia naik ke -127.
