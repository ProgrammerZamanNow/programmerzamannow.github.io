---
sidebar_position: 10
---

# Variable

Variable adalah tempat untuk menyimpan data. Saat membuat variable di Java, kita perlu menentukan tipe data yang ingin
kita gunakan. Dan di Java, variable tidak bisa berubah tipe data setelah dibuat. Misal jika kita sudah membuat variable
dengan tipe data String, tidak bisa berubah menjadi variable dengan tipe data int atau yang lainnya. Berikut adalah cara
membuat variable di Java.

```java
TipeData namaVariable;
```

Berikut adalah beberapa syarat ketika kita membuat nama variable :

- Variable tidak boleh mengandung spasi
- Variable tidak boleh angka semua

- Disarankan nama variable mengguunakan camelCase, seperti firstName, lastName, fullName, programmerZamanNow dan
  lain-lain

```java title="Variable.java"
public class Variable {
  public static void main(String[] args) {

    String firstName;
    String lastName;
    int age;
    boolean married;

  }
}
```

## Mengubah Data Variable

Setelah membuat variable, kita bisa menambah atau mengubah data di dalam variable tersebut. Data variable harus sesuai
dengan tipe data variable nya. Jika tidak sesuai, maka akan otomatis terjadi error.

Untuk mengubah data di dalam variable, kita bisa gunakan :

```java 
namaVariable = value;
```

```java title="Variable.java"
public class Variable {
  public static void main(String[] args) {

    String firstName;
    String lastName;
    int age;
    boolean married;
    
    firstName = "Budi";
    lastName = "Nugraha";
    age = 25;
    married = true;

  }
}
```

Data variable bisa diubah berkali-kali tanpa ada batas maksimal.

## Membuat Variable dengan Data

Di Java, kita juga membuat variable secara langsung dengan datanya pada saat deklarasi variable nya. Ini bisa
mempermudah saat kita membuat variable yang datanya ingin kita isi secara langsung.

```java
TipeData namaVariable = value;
```

```java title="Variable.java"
public class Variable {
  public static void main(String[] args) {

    String firstName = "Budi";
    String lastName = "Nugraha";
    int age = 25;
    boolean married = true;

  }
}
```

## Menggunakan Variable Lain

Saat kita membuat variable, kita juga bisa menggunakan data dari variable lain dengan cara menyebutkan nama variable
lainnya.

```java title="Variable.java"
public class Variable {
  public static void main(String[] args) {

    String firstName = "Budi";
    String lastName = "Nugraha";

    String fullName = firstName + " " + lastName;
    System.out.println(fullName); // Budi Nugraha

  }
}
```

Saat kita membuat variable baru dengan cara mengambil data dari variable lain seluruhnya. Yang terjadi sebenarnya adalah
hanya menduplikasi datanya, jadi variable tersebut akan tetap independen satu sama lain, tidak akan saling terpengaruh.

```java title="Variable.java:
public class Variable {
  public static void main(String[] args) {

    String name1 = "Budi";
    String name2 = name1; // Budi

    name1 = "Eko";

    System.out.println(name1); // Eko
    System.out.println(name2); // Budi (tidak berubah menjadi Eko)

  }
}
```

## Kata Kunci Var

Java mendukung pembuatan variable dengan kata kunci var. Ini bisa mempermudah saat membuat variable, karena kita tidak
perlu mengetikan tipe data nya. Java akan secara otomatis mendeteksi tipe datanya sesuai dengan data yang kita masukkan
ke dalam variable. Namun syaratnya untuk menggunakan kata kunci var adalah, pembuatan variable nya harus langsung dengan
data nya.

    Fitur ini baru ada di Java 10 keatas. Jadi pastikan menggunakan versi Java 10 keatas.

```java title="Variable"
public class Variable {
  public static void main(String[] args) {

    var firstName = "Eko";
    var lastName = "Kurniawan";
    var completeName = firstName + " " + lastName;
    
    var value = 1000; // int
    var amount = 1000000L; // long

  }
}
```

## Final Variable

Saat membuat variable di Java, secara default variable bisa diubah lagi. Namun kadang kita ingin membuat sebuah
variable, yang tidak ingin diubah lagi. Atau ada yang bilang bahwa ini adalah konstan.

Untuk melakukan hal ini, di Java kita bisa menambahkan kata kunci final sebelum pembuatan variable nya. Semua variable
yang bersifat final, tidak akan bisa dirubah lagi nilainya setelah pertama kali di tambahkan data. Jika kita coba ubah,
maka akan otomatis error.

```java title="Variable.java"
public class Variable {
  public static void main(String[] args) {

    final var firstName = "Eko";
    firstName = "Budi"; // ERROR
    
    final String lastName;
    lastName = "Kurniawan";
    lastName = "Nugraha"; // ERROR

  }
}
```
