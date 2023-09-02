# chatgpt-backend
Ini adalah sebuah backend dari chat gpt sederhana

link api :
```
http://172.190.99.126:3000/api/v1/chatgpt/:promps

```

promps diisi dengan perintah chat gpt

#Contoh :

```
http://172.190.99.126:3000/api/v1/chatgpt/buatkan%20fakta%20random%20di%20seluruh%20dunia

Atau

const prompts : 'buatkan fakta random di seluruh dunia';

fetch(`http://172.190.99.126:3000/api/v1/chatgpt/${prompts`}).then(response => response)

console.log(response)

```

#Response

```
["\n\n","Dua per tiga dari struktur jembatan di dunia berada di Asia. \n\n","Sekitar 80% dari penduduk dunia tinggal di rumah panggung. \n\n","Paling tidak 26 juta orang di seluruh dunia menderita penyakit stroke setiap tahun. \n\n","Sekitar 170 negara di seluruh dunia mengadopsi pasar terbuka sebagai system ekonomi. \n\n","Sekitar 25% dari populasi dunia berasal dari lima negara saja yaitu China, India, Amerika Serikat, Indonesia dan Brasil. \n\n","Sebanyak 250.000 beruang kutub tinggal di seluruh dunia. \n\n","76% dari penduduk dunia menggunakan internet. \n\n","Sekitar 16,6 juta ton emisi CO2 terpancarkan ke atmosfer dunia pada ","Sekitar"]

```

