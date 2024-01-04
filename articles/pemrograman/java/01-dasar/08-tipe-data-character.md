---
sidebar_position: 8
---

# Tipe Data Character

Selain tipe data number, Java mendukung tipe data karakter (character). Ini adalah tipe data yang berisikan satu
karakter (hurup, angka, dan simbol). Karakter di Java merupakan
karakter [16-bit Unicode](https://id.wikipedia.org/wiki/UTF-16).

Tipe data karakter direpresentasikan di Java menggunakan kata kunci char. Dan untuk membuat data karakter di Java, kita
perlu menggunakan tanda ' (petik satu) sebelum dan setelah karakternya.

```java title="TipeDataChar.java"
public class TipeDataChar {
  
  public static void main(String[] args) {
    
    char e = 'E';
    char k = 'K';
    char o = 'O';

    System.out.println(e);
    System.out.println(k);
    System.out.println(o);

  }
}
```

Karakter adalah tipe data yang sangat sederhana. Jika kita gabungkan beberapa karaketer menjadi satu kesatuan, di Java
tipe data tersebut dinamakan String. Tipe data String akan kita bahas lebih detail di artikel terpisah.

