---
sidebar_position: 16
---

# Operator Boolean

Operator boolean adalah operator yang digunakan untuk membandingkan dua buah nilai boolean. Hasil dari operator boolean
adalah boolean, yaitu true atau false.

Berikut adalah daftar operator boolean yang terdapat di Java.

| Operator | Keterangan |
|----------|------------|
| `&&`     | Dan        |
| `\|\|`   | Atau       |
| `!`      | Negasi     |

Saat menggunakan operator Boolean, maka kita perlu tahu tentang tabel kebenaran (truth table) dari operator boolean.
Berikut adalah tabel kebenaran dari operator boolean.

| A     | B     | A && B | A \|\| B | !A    |
|-------|-------|--------|----------|-------|
| true  | true  | true   | true     | false |
| true  | false | false  | true     | false |
| false | true  | false  | true     | true  |
| false | false | false  | false    | true  |

```java title="OperasiBoolean.java"
public class OperasiBoolean {
  public static void main(String[] args) {

    boolean a = true;
    boolean b = true;

    boolean hasil;

    // OR atau ||
    hasil = a || b;
    System.out.println(hasil);

    // AND atau &&
    hasil = a && b;
    System.out.println(hasil);

    // NOT atau !
    hasil = !a;
    System.out.println(hasil);

  }
}
```
