//function utk proses menjadi kalimat sapaan
//function ini jg akan dijadikan Callback
function prosesData(full_name){
  
  console.log("Hello "+full_name);
}

//function utk menerima inputan
function getInput(first_name,last_name,myCallback){
  
  var full_name = first_name+" "+last_name;
  //pastikan bhwa paramter ke-3 adl sebuah fungsi
  if(typeof myCallback == "function"){
      myCallback(full_name);  
  }
  else{
     console.log("Ini bukan fungsi...");  
  }
}

//kasih inputan , callback 'prosesData' 
getInput("Apriliana","Puspitasari",prosesData);