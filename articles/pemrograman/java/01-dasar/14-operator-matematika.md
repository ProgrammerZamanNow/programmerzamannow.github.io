---
sidebar_position: 14
---

# Operator Matematika

Java mendukung operasi banyak sekali operator matematika. Fitur operator matematika wajib dimiliki oleh semua bahasa pemrograman. Di artikel ini kita akan bahas secara lengkap operator matematika apa saja yang bisa dilakukan di Java.

## Operator Aritmatika 

Java mendukung semua operasi aritmatika seperti pertambahan, pengurangan, dan lain-lain. Di Java untuk operator aritmatika, kita bisa liat dari tabel berikut.

| Operator | Keterangan  |
|----------|-------------|
| `+`        | Pertambahan |
| `-`        | Pengurangan |
| `*`        | Perkalian   |
| `/`        | Pembagian   |
| `%`        | Sisa Bagi   |

Mungkin kita sudah terbiasa dengan operator pertambahan, pengurangan, perkalian dan pembagian. Yang mungkin agak asing adalah sisa bagi. Sisa bagi adalah operator yang menghasilkan sisa pembagian.

Perlu diingat, bahwa di Java, jika kita melakukan operator aritmatika dari tipe data Integer number, hasilnya selalu Integer number. Jika kita ingin menghasilkan data dengan tipe Floating Point, maka kita harus melakukan operasi dengan tipe data Floating Point.

```java title="OperasiMatematika.java"
public class OperasiMatematika {
  public static void main(String[] args) {

    int result = 1 + 2; // 3
    System.out.println("1 + 2 = " + result);
    int original_result = result;

    result = result - 1; // 2
    System.out.println(original_result + " - 1 = " + result);
    original_result = result;

    result = result * 2; // 4
    System.out.println(original_result + " * 2 = " + result);
    original_result = result;

    result = result / 2; // 2
    System.out.println(original_result + " / 2 = " + result);
    original_result = result;

    result = result + 8; // 10
    System.out.println(original_result + " + 8 = " + result);
    original_result = result;

    result = result % 7; // 3 (10 % 7 menghasilkan sisa 3)
    System.out.println(original_result + " % 7 = " + result);
    original_result = result;

    result = result / 2; // 1 (3 / 2 menghasilkan 1 karena bilangan integer)
    System.out.println(original_result + " % 7 = " + result);

  }
}
```

## Operator Augmented Assignments

Java mendukung operator augmented assignments. Sebenarnya operator ini adalah operator yang digunakan untuk mempersingkat operator matematika jika dilakukan ke variable dirinya sendiri. Berikut adalah daftar operator augmented assignments.

| Operator Matematika  | Operator Augmented Assignments |
|----------------------|--------------------------------|
| result = result + 10 | result += 10                   |
| result = result - 10 | result -= 10                   |
| result = result * 10 | result *= 10                   |
| result = result / 10 | result /= 10                   |
| result = result % 10 | result %= 10                   |

```java title="OperasiMatematika.java"
public class OperasiMatematika {
  public static void main(String[] args) {

    int result = 10;
    result += 10; // result = result + 10
    System.out.println(result); // 20

    result -= 10; // result = result - 10
    System.out.println(result); // 10

    result *= 10; // result = result * 10
    System.out.println(result); // 100

    result /= 10; // result = result / 10
    System.out.println(result); // 10

    result %= 10; // result = result % 10
    System.out.println(result); // 0

  }
}
```

## Operator Unary

Java juga mendukung operator unary. Operator unary adalah operator yang hanya melibatkan satu data. Berikut adalah operator unary yang terdapat di Java.

| Operator | Keterangan                    |
|----------|-------------------------------|
| `+`        | Menandakan nilai positif      |
| `-`        | Menandakan nilai negatif      |
| `++`       | Increment, menaikkan 1 angka  |
| `--`       | Decrement, menurunkan 1 angka |

Operator unary hanya melibatkan satu data atau variable. Sekilas mirip dengan operator aritmatika, namun sebenarnya berbeda.

```java title="OperasiMatematika.java"
public class OperasiMatematika {
  public static void main(String[] args) {

    int result = +1; // 1
    System.out.println(result);

    result--; // 0 (result = result - 1)
    System.out.println(result);

    result++; // 1 (result = result + 1)
    System.out.println(result);

    result = -result; // -1 (-result)
    System.out.println(result);

  }
}
```

## Operator Bitwise

Java juga mendukung operator bitwise. Operator ini memang jarang sekali digunakan, namun operator ini dibahas biar kita tahu bahwa operator ini ada di Java.

| Biswise | Operasi        |
|---------|----------------|
| `&`       | AND            |
| `^`       | exclusive OR   |
| `\|`      | inclusive OR   |
| `<<`      | Shift ke kiri  |
| `>>`      | Shift ke kanan |

```java title="OperasiMatematika.java"
public class OperasiMatematika {
  public static void main(String[] args) {

    int bitmask = 0x000F;
    int val = 0x2222;

    System.out.println(val & bitmask); // 2

  }
}
```
