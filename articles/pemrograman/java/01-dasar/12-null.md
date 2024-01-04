---
sidebar_position: 12
---

# Null

Null adalah representasi dari data kosong. Null digunakan untuk memberikan data kosong terhadap sebuah variable. Saat
kita memberikan sebuah variable dengan nilai null, maka artinya variable tersebut tidak memiliki data atau nilai. Null
di Java direpresentasikan dengan kata kunci null. Dan null hanya bisa diberikan kepada variable dengan tipe data object.

```java title="Null.java"
public class Null {
  public static void main(String[] args) {
    
    String name = null;
    Integer score = null;
    
    int value = null; // ERROR karena bukan tipe data object
    
  }
}
```

Jika kita mencoba menambah null ke tipe data bukan object (tipe data primitif), maka secara otomatis compiler Java akan
error.

