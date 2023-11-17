let nilai = parseInt(prompt("Masukan Nilai"));
if(nilai >=0 && nilai <60){
  document.writeln(`nilai anda ${nilai}, keterangan A`)
}
else if(nilai>60 && nilai<70){
  document.write(`nilai anda ${nilai}, keterangan B`)
}
else if(nilai>70 && nilai<80){
  document.write(`nilai anda ${nilai}, keterangan C`)
}
else if(nilai>80 && nilai<100){
  document.write(`nilai anda ${nilai}, keterangan D`)
}
else{
  document.write(`nilai yang anda masukan tidak ada`)
}