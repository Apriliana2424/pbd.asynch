**Callback function** adalah function yang dibuat dan dieksekusi didalam 
function lain (function yang memanggilnya).
Penjelasan dari script callback.js adalah
kita akan membuat 1 function untuk memproses inputan (first name dan last 
name) lalu kita ingin kedua inputan itu disatukan sehingga menjadi kalimat 
sapaan seperti "Hello Apriliana Puspitasari". Nah untuk memproses menjadi 
kalimat sapaan kita membutuhkan bantuan function callback.
pada script function getInput(first_name,last_name,myCallback){
myCallback ada diurutan ketiga sesuai dengan yang kita tentukan. 
myCallback akan mengerjakan tugasnya yaitu memberi perintah untuk
prosesData dijadikan sebagai inputan.
pada script getInput("Apriliana","Puspitasari",prosesData);
pada paramater ke-3 kita panggil 'prosesData' artinya kita memberi 
tahu ke getInput bahwa Callback yang harus dipanggil adalah function 
'prosesData' bukan yang lain. Setelah itu getinput akan mengecek
parameternya kemudian akan dijalankan program script yang selanjutnya
yang akan menggabungkan Apriliana Puspitasari.

**copyright @2018 Apriliana_Puspitasari**
