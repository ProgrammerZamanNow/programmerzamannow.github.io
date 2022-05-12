---
sidebar_position: 9
---

# Tipe Data String

Tipe data string adalah tipe data yang berisikan kumpulan kosong atau lebih karakter. Sederhananya, string adalah tulisan atau text. Di Java, string direpresentasikan dengan kata kunci String. Dan untuk membuat data String, kita bisa menggunakan " (petik dua) lalu diikuti dengan isi string nya, dan diakhiri dengan " (petik dua) lagi.

```java title="TipeDataString.java"
public class TipeDataString {

  public static void main(String[] args) {

    String firstName = "Eko Kurniawan";
    String lastName = "Khannedy";

    System.out.println(firstName);
    System.out.println(lastName);

  }
}
```

## Menggabungkan String

Saat membuat aplikasi, biasanya kita sering menggabungkan beberapa String. Dan di Java, kita bisa menggabungkan data String dengan String yang lain menggunakan operator + (tambah). Ketika kita tambahkan data String dengan String lain, maka dia akan membentuk data String baru, tidak akan menggubah data String yang lama.

Tidak ada batasan untuk menambah String, kita bisa gunakan banyak operator + (tambah) sebanyak yang kita mau. Batasan pembuatan String hanyalah seberapa besar RAM komputer kita.

```java title="TipeDataString"
public class TipeDataString {

  public static void main(String[] args) {

    String firstName = "Eko Kurniawan";
    String lastName = "Khannedy";

    System.out.println(firstName);
    System.out.println(lastName);

    // menambah firstName dengan spasi dan lastName
    String fullName = firstName + " " + lastName;
    
    System.out.println(fullName);

  }
}
```

## Escape Sequence

Java mendukung escape sequence di String. Escape sequence merupakan karakter khusus, seperti ENTER, TAB, " (kutip dua), dan lain-lain. Berikut contoh escape sequence yang didukung oleh Java di data String

| Escape Sequence | Karakter |
|-----------------|----------|
| \n              | ENTER    |
| \t              | TAB      |
| \'              | '        |
| \"              | "        |
| \\              | \        |

```java title="TipeDataString.java"
public class TipeDataString {

  public static void main(String[] args) {

    String fullName = "Eko\nKurniawan\nKhannedy";
    System.out.println(fullName); // Eko<ENTER>Kurniawan<ENTER>Khannedy

    String say = "Saya mengucapkan : \"Selamat Belajar\" ";
    System.out.println(say); // Saya mengucapkan : "Selamat Belajar"

  }
}
```

## String Text Block

Sejak di Java versi 13. Diperkenalkan fitur yang bernama String Text Block. Fitur ini merupakan fitur yang bisa kita gunakan untuk membuat String yang lebih dari satu baris secara sekaligus. Cara pembuatan String Text Block adalah dengan menggunakan """ (kutip dua sebanyak 3 kali) di awal dan akhir data String.

```java title="TipeDataString.java"
public class TipeDataString {

  public static void main(String[] args) {

    String story = """
        Hallo, nama saya adalah Eko Kurniawan Khannedy
        Saat ini, saya kerja sebagai Technical Architect
        Selain kerja, saya juga sering sharing soal programming
        di website Programmer Zaman Now
        """;

    System.out.println(story);

  }
}
```

Hasil dari kode diatas adalah sebagai berikut :

```text
Hallo, nama saya adalah Eko Kurniawan Khannedy
Saat ini, saya kerja sebagai Technical Architect
Selain kerja, saya juga sering sharing soal programming
di website Programmer Zaman Now
```

Spasi kosong diawal otomatis hilang, mengikuti baris pertama. Jika baris pertama memiliki spasi misal 7 karakter, maka secara otomatis dibaris-bari selanjutnya akan dihapus juga spasi sebanyak 7 karakter. Ini membuat kita sangat mudah jika kita ingin misal membuat String berisi tag HTML atau JSON misalnya.

```java title="TipeDataString.java"
public class TipeDataString {

  public static void main(String[] args) {

    String story = """
        <html>
          <head>
            <title>Belajar Java dasar</title>
          </head>
          <body>
            <h1>Halo, selamat belajar Java</h1>
          </body>
        </html>
        """;

    System.out.println(story);

  }
}
```

Kode diatas, jika dijalankan akan menghasilkan output sebagai berikut :

```text
<html>
  <head>
    <title>Belajar Java dasar</title>
  </head>
  <body>
    <h1>Halo, selamat belajar Java</h1>
  </body>
</html>
```
