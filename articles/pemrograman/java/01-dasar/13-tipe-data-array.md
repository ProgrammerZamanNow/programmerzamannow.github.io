---
sidebar_position: 13
---

# Tipe Data Array

Array atau dalam bahasa indonesia bernama Larik, adalah sebuah tipe data yang berisikan kumpulan tipe data yang sama. Hampir di semua bahasa pemrograman memiliki fitur Array. Tanpa Array, akan sulit menyimpan data dalam jumlah banyak, apalagi dalam variable, maka kita harus membuat banyak sekali variable.

Seandainya tidak ada tipe data Array, maka jika kita ingin membuat kumpulan data (misal kumpulan data Nama), maka kita harus membuat banyak sekali variable.

```java title="Array.java"
public class Array {
  public static void main(String[] args) {

    // Tanda Array
    String name1 = "Eko";
    String name2 = "Kurniawan";
    String name3 = "Khannedy";
    String name4 = "Budi";
    String name5 = "Nugraha";
    String name6 = "Joko";
    
  }
}
```

Solusi ini tidak bisa bertahan dalam waktu lama, apalagi jika jumlahnya dinamis. Maka membuat banyak variable tidak bisa menjadi solusi. Solusi untuk permasalahan ini adalah tipe data Array.

## Cara Kerja Array

Array adalah kumpulan data dengan tipe yang sama. Dan array memiliki panjang, dimana panjangnya harus ditentukan di awal ketika pembuatan Array. Setelah panjangnya di tentukan, panjang Array tidak bisa berubah lagi.

![Array](/img/tutorial-java/dasar/array.png)

Contoh gambar diatas adalah Array dengan panjang 7. Artinya Array diatas bisa menampung total 7 data.

Selain itu, Array memiliki informasi yang bernama index. Index yaitu nomor posisi letak data di Array. Data pertama dimulai dengan index nomor 0 (nol), data kedua adalah index 1, data ketiga adalah index 2, dan seterusnya. Index digunakan untuk mengakses data di dalam Array dan juga mengubah data di dalam Array.

![Array Index](/img/tutorial-java/dasar/array-index.png)

## Membuat Array Kosong

Setelah kita tahu cara kerja Array, sekarang saatnya kita mencoba membuat Array. Array adalah tipe data Object, jadi kita bisa mengisi data Array dengan null jika kita ingin. Untuk membuat Array, kita bisa menggunakan beberapa perintah. Kita mulai dengan membuat array kosong (tidak memiliki isi data)

```java 
TipeData[] namaVariable = new TipeData[panjang];
```

```java title="Array.java"
public class Array {
  public static void main(String[] args) {

    // Membuat array dengan tipe string dan panjang 3
    String[] arrayName = new String[3];
    
    // Membuat array dengan tipe int dan panjang 10
    int[] arrayScore = new int[10];

  }
}
```

## Mengubah Isi Data Array

Setelah membuat Array, hal yang biasa kita lakukan adalah mengubah isi data Array-nya. Proses mengubah data array sangat sederhana, kita tinggal menggunakan posisi index nya, kita bisa gunakan perintah sebagai berikut :

```java 
variableArray[index] = data;
```

```java title="Array.java"
public class Array {
  public static void main(String[] args) {

    String[] arrayName = new String[3];
    arrayName[0] = "Eko";
    arrayName[1] = "Kurniawan";
    arrayName[2] = "Khannedy";

    int[] arrayScore = new int[10];
    arrayScore[0] = 100;
    arrayScore[1] = 100;
    arrayScore[2] = 100;
    arrayScore[3] = 100;
    arrayScore[4] = 100;
    arrayScore[5] = 100;
    arrayScore[6] = 100;
    arrayScore[7] = 100;
    arrayScore[8] = 100;
    arrayScore[9] = 100;

  }
}
```

Tak ada batasan mengubah data Array, kita bisa mengubah data Array berkali-kali. Selain itu tidak ada proses menghapus data Array, jika kita ingin menghapus data array, tinggal ubah saja datanya menjadi null jika tipe data array adalah tipe data Object

## Mengakses Data Array

Untuk mengakses data di Array pun sama seperti dengan mengubah data di Array, yaitu membutuhkan index. Cara mengakses data di Array bisa menggunakan perintah sebagai berikut :

```java 
variableArray[index];
```

```java title="Array.java"
public class Array {
  public static void main(String[] args) {

    String[] arrayName = new String[3];
    arrayName[0] = "Eko";
    arrayName[1] = "Kurniawan";
    arrayName[2] = "Khannedy";

    // Mengakses data di array dan menyimpannya di variable
    String firstName = arrayName[0]; // Eko
    String lastName = arrayName[2]; // Khannedy

    // Mengakses langsung data di array
    System.out.println(arrayName[1]); // Kurniawan

  }
}
```

## Mendapat Panjang Array

Kadang kita butuh mendapatkan informasi panjang sebuah Array. Panjang array adalah bukan informasi jumlah data yang terdapat di Array. Jadi jangan sampai salah, walaupun isi data Array masih kosong, panjang tetap akan selalu menghitung total kapasitas Array.

Untuk mendapatkan informasi panjang atau kapasitas Array, kita bisa gunakan perintah :

```java 
variableArray.length
```

Hasil dari .length pada Array adalah int panjang atau kapasitas Array nya.

```java title="Array.java"
public class Array {
  public static void main(String[] args) {

    String[] arrayName = new String[3];

    // Panjang array tetap 3 walaupun data array kosong semua
    int panjangArray = arrayName.length; // 3
    System.out.println(panjangArray);

    arrayName[0] = "Eko";
    arrayName[1] = "Kurniawan";
    arrayName[2] = "Khannedy";

    // Panjang array tetap 3, walaupun data array penuh semua
    System.out.println(arrayName.length); // 3

  }
}
```

## Membuat Array dengan Data-nya

Secara default, membuat Array selalu dimulai dengan isi Array yang kosong. Namun di Java kita bisa membuat Array secara langsung, dengan isi datanya. Hal ini bermanfaat jika memang kita ingin membuat Array dan datanya pada saat melakukan deklarasi variable.

```java title="Array.java"
public class Array {
  public static void main(String[] args) {

    String[] arrayName = {
        "Eko",
        "Kurniawan",
        "Khannedy",
    };
    System.out.println(arrayName[0]); // Eko
    System.out.println(arrayName[1]); // Kurniawan
    System.out.println(arrayName[2]); // Khannedy

  }
}
```

Untuk membuat array secara langsung dengan datanya, kita bisa langsung menggunakan tanda kurung kurawal lalu didalamnya tinggal kita masukkan datanya. Posisi data akan otomatis mengikuti posisi index.

Namun jika kita membuat variable Array dengan kata kunci var, maka saat membuat Array tidak bisa langsung menggunakan kurung kurawal saja, kita wajib menyebutkan tipe array nya. Seperti pada contoh dibawah ini.

```java title="Array.java"
public class Array {
  public static void main(String[] args) {

    // variable dengan kata kunci var
    var arrayName = new String[]{
        "Eko",
        "Kurniawan",
        "Khannedy",
    };
    System.out.println(arrayName[0]); // Eko
    System.out.println(arrayName[1]); // Kurniawan
    System.out.println(arrayName[2]); // Khannedy

  }
}
```

## Error Array Index Out Of Bounds

Salah satu error yang sering terjadi ketika menggunakan Array adalah error ArrayIndexOutOfBoundsException. Error ini terjadi dikarenakan kita mengakses posisi index yang salah, diluar jangkauan data di Array. Misal kita mengakses index posisi kurang dari 0, atau lebih dari atau sama dengan panjang array.

```java title="Array.java"
public class Array {
  public static void main(String[] args) {

    var arrayName = new String[]{
        "Eko",
        "Kurniawan",
        "Khannedy",
    };

    // ERROR, karena panjang array 3, dan index terakhir adalah 2
    System.out.println(arrayName[3]); 

  }
}
```

```shell
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3
	at Array.main(Array.java:11)
```

## Array Multidimensional

Array juga bisa menampung data multidimensional, atau lebih tepatnya Array di dalam Array. Untuk membuat Array multidimensional kita bisa menggunakan kurung kotak lebih dari satu.

Untuk mengakses dan mengubah data di Array multidimensional, kita perlu menggunakan sejumlah kurung kotak saat deklarasi Array nya.

```java title="Array.java"
public class Array {
  public static void main(String[] args) {

    String[][] data = new String[3][3];

    data[0][0] = "Eko";
    data[0][1] = "Kurniawan";
    data[0][2] = "Khannedy";

    data[1][0] = "Budi";
    data[1][1] = "Nugraha";
    data[1][2] = "Kuncoro";

    data[2][0] = "Joko";
    data[2][1] = "Morro";
    data[2][2] = "Susilo";
    
  }
}
```

Jika digambarkan dalam bentuk tabel, data Array pada kode diatas adalah sebagai berikut :

| Index | 0    | 1         | 2        |
|-------|------|-----------|----------|
| 0     | Eko  | Kurniawan | Khannedy |
| 1     | Budi | Nugraha   | Kuncoro  |
| 2     | Joko | Morro     | Susilo   |

## Menyalin Data Array ke Array Lain

Java memiliki fitur untuk menyalin data Array secara mudah tanpa harus kita lakukan satu persatu. Carany dengan menggunakan kode :

```java 
System.arraycopy(sourceArray, sourcePosition, destinationArray, destinationPositition, length);
```

Terlihat banyak sekali informasi yang perlu dimasukkan, namun sebenarnya tidak terlalu rumit.

- sourceArray adalah Array yang akan di salin datanya
- sourcePositition adalah di posisi index mana data akan di salin
- destinationArray adalah Array yang akan menjadi target menyalin data
- destinationPosition adalah posisi index mana awal data salinan disimpan
- length berapa jumlah data yang akan disalin

```java title="Array.java"
public class Array {
  public static void main(String[] args) {

    String[] name = {"Eko", "Kurniawan", "Khannedy", "Programmer", "Zaman", "Now"};
    String[] target = new String[5];

    // menyalin array name diposisi 3, ke posisi 2 array target, sebanyak 3 data
    System.arraycopy(name, 3, target, 2, 3);

    System.out.println(target[0]); // null
    System.out.println(target[1]); // null
    System.out.println(target[2]); // Programmer
    System.out.println(target[3]); // Zaman
    System.out.println(target[4]); // Now

  }
}
```
