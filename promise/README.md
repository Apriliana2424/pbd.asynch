Penggunaan method static Promise.resolve
Method Promise.resolve(value) mengembalikan objek Promise.then 
yang diselesaikan dengan nilai yang diberikan. jika nilainya 
thenable (mis. memiliki "then" method), promise yang dikembalikan 
akan "mengikuti" thenable-nya, menggunakan keadaan ini; sebaliknya 
promise akan dikembalikan sesuai nilai yang terpenuhi.
Jadi pada method promise.resolve terdapat value "Success"
yang akan dikembalikan menggunakan objek promise.then kemudian
akan diselesaikan dan ditampilkan menggunakan function(value) tsb
karena dalam console.log sudah dipanggil variabel value yang akan 
ditampilkan.

**copyright @2018 Apriliana_Puspitasari**