---
sidebar_position: 5
---

# Komentar

Setiap bahasa pemrograman pasti memiliki fitur yang namanya komentar. Komentar adalah kode program yang tidak akan
dieksekusi ketika dijalankan. Biasanya komentar digunakan untuk memberi informasi tambahan pada kode program kita agar
mudah dimengerti.

## Komentar Satu Baris

Untuk memberi komentar di Java, sangatlah mudah, kita bisa menggunakan tanda // lalu diikuti dengan isi komentar.
Tanda // menandakan bahwa satu baris kode tersebut dianggap sebagai komentar. Komentar bisa ditambahkan dibaris kode
manapun, tidak ada ketentuan harus di posisi mana menambahkan komentar.

```java
// Ini adalah komentar
public class ProgramHelloWorld { // komentar juga bisa disini

  public static void main(String[] args) {
    // kita boleh menambahkan komentar dimanapun yang kita mau, asal satu baris
    
    System.out.println("Hello World"); // komentar setelah kode program

  } // ini komentar

}

// komentar juga bisa disini
```

## Komentar Lebih dari Satu Baris

Selain komentar satu baris, kita juga bisa membuat komentar yang lebih dari satu baris, caranya komentar harus diawali
dengan tanda /* dan diakhiri dengan */

```java
public class ProgramHelloWorld {

  /*
  Ini adalah komentar lebih dari satu baris
  kita bisa menambahkan apapun disini
  terserah kita
   */

  public static void main(String[] args) {

    System.out.println("Hello World"); /*
     bisa juga disini,
     tidak ada yang melarang
    */

  }
  
  /*
  bebas ya :D
   */

}
```

---

Namun komentar terbaik sebenarnya adalah kode program kita sendiri. Jika kode program kita butuh banyak sekali komentar
untuk memberi tahu programmer lain ketika membaca kode program kita, berarti ada masalah dengan kode program kita. Kode
program yang baik itu mudah dimengerti dan dibaca oleh programmer lain.

