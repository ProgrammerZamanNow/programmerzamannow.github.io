---
sidebar_position: 15
---

# Operator Perbandingan

Operator perbandingan adalah operator yang digunakan untuk membandingkan dua buah nilai. Hasil dari operator
perbandingan adalah boolean, yaitu true atau false.

Berikut adalah daftar operator perbandingan yang terdapat di Java.

| Operator | Keterangan              |
|----------|-------------------------|
| `==`     | Sama dengan             |
| `!=`     | Tidak sama dengan       |
| `>`      | Lebih dari              |
| `<`      | Kurang dari             |
| `>=`     | Lebih dari sama dengan  |
| `<=`     | Kurang dari sama dengan |

```java title="OperasiPerbandingan.java"
public class OperasiPerbandingan {
  public static void main(String[] args) {

    int a = 100;
    int b = 100;

    boolean hasil;

    hasil = a == b;
    System.out.println(hasil); // true

    hasil = a != b;
    System.out.println(hasil); // false

    hasil = a > b;
    System.out.println(hasil); // false

    hasil = a < b;
    System.out.println(hasil); // false

    hasil = a >= b;
    System.out.println(hasil); // true

    hasil = a <= b;
    System.out.println(hasil); // true

  }
}
```
