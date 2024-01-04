---
sidebar_position: 11
---

# Tipe Data Bukan Primitif

Java adalah basa pemrograman yang berorientasi Objek. Namun sebenarnya secara garis besar, terdapat dua jenis tipe data
di Java. Tipe data primitif dan tipe data Object (bukan primitif)

## Tipe Data Primitif

Tipe data primitif adalah tipe data bawaan dari bahasa pemrograman, di Java ada delapan tipe data primitif, dan semuanya
sudah kita bahas yaitu :

- byte
- short
- int
- long
- float
- double
- boolean
- char

Bagaimana dengan String? String bukanlah tipe data primitif, melainkan tipe data Object.

## Tipe Data Object

Namun karena Java adalah bahasa pemrograman yang berorientasi objek. Mada semua tipe data primitif memiliki representasi
tipe data object nya. Kenapa butuh representasi tipe data object? Hal ini dikarenakan ada banyak sekali fitur di
pemrograman berorientasi yang mewajibkan datanya berubah object. Contohnya adalah fitur Generic Programming.

Berikut adalah representasi tipe data object untuk semua tipe data primitif di Java.

| Tipe Data Primitif | Tipe Data Object |
|--------------------|------------------|
| byte               | Byte             |
| short              | Short            |
| int                | Integer          |
| long               | Long             |
| float              | Float            |
| double             | Double           |
| boolean            | Boolean          |
| char               | Character        |

Saat kita membuat variable dengan tipe data object, kita bisa secara otomatis melakukan konversi dari tipe data
primitif.

```java title="TipeDataObject.java"
public class TipeDataObject {
  public static void main(String[] args) {

    Integer iniInteger = 100; 
    Long iniLong = 10000L;

    byte iniByte = 100;
    Byte iniByteObject = iniByte; // Otomatis
    
    Boolean married = true;

  }
}
```
