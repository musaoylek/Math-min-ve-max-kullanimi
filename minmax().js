<!DOCTYPE html>
<html>
<head>
<title>musaoylek max() min() metodu kullanımı</title>
</head>
<body>
	<script>
		var sayi1, sayi2;
		sayi1= prompt("Lütfen birinci sayıyı giriniz");
        sayi2= prompt("Lütfen ikinci sayıyı giriniz");
		var contact = Math.max(sayi1,sayi2);
        var contactt = Math.min(sayi1,sayi2);
		alert("Sayının max değeri : " +contact);
        alert("Sayının min değeri : " +contactt);
	</script>
</body>
</html>
