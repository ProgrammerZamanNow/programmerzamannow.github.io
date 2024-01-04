---
sidebar_position: 17
---

# If Statement

If statement adalah salah satu fitur yang paling penting di Java. If statement digunakan untuk membuat percabangan
program. Percabangan program adalah kondisi dimana kita bisa mengeksekusi kode program tertentu jika kondisi tertentu
terpenuhi.

## If Statement

If statement adalah percabangan program yang paling sederhana. Percabangan ini hanya memiliki satu kondisi dan satu blok
kode program.

```java title="IfStatement.java"
public class IfStatement {
  public static void main(String[] args) {

    var nilai = 75;
    var absen = 90;

    if(nilai >= 75 && absen >= 75) {
      System.out.println("Anda Lulus");
    }

  }
}
```

Pada kode diatas, kita membuat dua variabel yaitu `nilai` dan `absen`. Kemudian kita membuat if statement dengan
kondisi `nilai >= 75 && absen >= 75`. Jika kondisi tersebut terpenuhi, maka blok kode program di dalam if statement
akan dieksekusi.

## If Else Statement

If else statement adalah percabangan program yang memiliki dua kondisi. Jika kondisi pertama terpenuhi, maka blok kode
program di dalam if statement akan dieksekusi. Jika kondisi pertama tidak terpenuhi, maka blok kode program di dalam
else statement akan dieksekusi.

```java title="IfElseStatement.java"
public class IfElseStatement {
  public static void main(String[] args) {

    var nilai = 75;
    var absen = 90;

    if(nilai >= 75 && absen >= 75) {
      System.out.println("Anda Lulus");
    } else {
      System.out.println("Anda Tidak Lulus");
    }

  }
}
```

Pada kode diatas, kita membuat dua variabel yaitu `nilai` dan `absen`. Kemudian kita membuat if statement dengan
kondisi `nilai >= 75 && absen >= 75`. Jika kondisi tersebut terpenuhi, maka blok kode program di dalam if statement
akan dieksekusi. Jika kondisi tersebut tidak terpenuhi, maka blok kode program di dalam else statement akan dieksekusi.

## If Else If Statement

If else if statement adalah percabangan program yang memiliki lebih dari dua kondisi. Jika kondisi pertama terpenuhi,
maka blok kode program di dalam if statement akan dieksekusi. Jika kondisi pertama tidak terpenuhi, maka kondisi
kedua akan dicek. Jika kondisi kedua terpenuhi, maka blok kode program di dalam else if statement akan dieksekusi. Jika
kondisi kedua tidak terpenuhi, maka kondisi ketiga akan dicek. Jika kondisi ketiga terpenuhi, maka blok kode program di
dalam else if statement akan dieksekusi. Jika kondisi ketiga tidak terpenuhi, maka blok kode program di dalam else
statement akan dieksekusi.

```java title="IfElseIfStatement.java"
public class IfElseIfStatement {
  public static void main(String[] args) {

    var nilai = 75;
    var absen = 90;

    if(nilai >= 80 && absen >= 80) {
      System.out.println("Nilai Anda A");
    } else if(nilai >= 70 && absen >= 70) {
      System.out.println("Nilai Anda B");
    } else if(nilai >= 60 && absen >= 60) {
      System.out.println("Nilai Anda C");
    } else if(nilai >= 50 && absen >= 50) {
      System.out.println("Nilai Anda D");
    } else {
      System.out.println("Nilai Anda E");
    }

  }
}
```

Pada kode diatas, kita membuat dua variabel yaitu `nilai` dan `absen`. Kemudian kita membuat if statement dengan
kondisi `nilai >= 80 && absen >= 80`. Jika kondisi tersebut terpenuhi, maka blok kode program di dalam if statement
akan dieksekusi. Jika kondisi tersebut tidak terpenuhi, maka kondisi kedua akan dicek. Jika kondisi kedua terpenuhi,
maka blok kode program di dalam else if statement akan dieksekusi. Jika kondisi kedua tidak terpenuhi, maka kondisi
ketiga akan dicek. Jika kondisi ketiga terpenuhi, maka blok kode program di dalam else if statement akan dieksekusi.
Jika kondisi ketiga tidak terpenuhi, maka kondisi keempat akan dicek. Jika kondisi keempat terpenuhi, maka blok kode
program di dalam else if statement akan dieksekusi. Jika kondisi keempat tidak terpenuhi, maka blok kode program di
dalam else statement akan dieksekusi.

Tidak ada batasan berapa banyak kondisi yang bisa kita buat di if else if statement. Kita bisa membuat kondisi sebanyak
yang kita inginkan.

## If Bersarang

If bersarang adalah if statement yang berada di dalam if statement lainnya. If bersarang digunakan untuk membuat
percabangan program yang kompleks.

```java title="IfBersarang.java"
public class IfBersarang {
  public static void main(String[] args) {

    var nilai = 75;
    var absen = 90;

    if(nilai >= 80) {
      if(absen >= 80) {
        System.out.println("Nilai Anda A");
      } else {
        System.out.println("Nilai Anda B");
      }
    } else {
      if(absen >= 80) {
        System.out.println("Nilai Anda C");
      } else {
        System.out.println("Nilai Anda D");
      }
    }

  }
}
```

Tidak ada batasan berapa banyak if statement yang bisa kita buat di dalam if statement lainnya. Kita bisa membuat if
statement sebanyak yang kita inginkan.
