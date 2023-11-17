let belanja = prompt("masukan total belanja");

if
(belanja > 0 && belanja < 100000) 
{
  document.writeln('anda tidak dapat diskon' + "<br>");
  document.writeln('total belanja :' + belanja);
  document.writeln('setelah diskon:' + belanja);
}

if
(belanja >= 100000 && belanja < 150000)
{
  let diskon = 0.9 * belanja
  document.writeln('anda dapat diskon 10%'+ "<br>");
  document.writeln('total belanja :' + belanja + "<br>");
  document.writeln('harga setelah diskon : ' + diskon + "<br>");
}

if
(belanja >= 150000)
{
  let diskon = 0.75 * belanja
  document.writeln('anda dapat diskon 25%'+ "<br>");
  document.writeln('total belanja :' + belanja + "<br>");
  document.writeln('harga setelah diskon : ' + diskon + "<br>");
} 
