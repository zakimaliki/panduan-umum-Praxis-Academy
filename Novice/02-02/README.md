# Asynchronous Programming di JavaScript

## Author : Zaki Maliki
### Minggu 02

*Hari 2*

- Ringkasan materi

1. Pengertian *asynchronous programming* / non-blocking I/O

	[Artikel di Wikipedia tentang Asynchronous I/O](https://en.wikipedia.org/wiki/Asynchronous_I/O) memberikan ringkasan komprehensif tentang pengertian *asynchronous I/O*. Baca dan pahami juga [penjelasan di StackOverflow](https://stackoverflow.com/questions/10570246/what-is-non-blocking-or-asynchronous-i-o-in-node-js). [Artikel byte archer](https://bytearcher.com/articles/blocking-vs-non-blocking-in-node.js/) ini juga memberikan gambaran yang cukup umum tentang *blocking (synchronous)* dan *non-blocking (asynchronius) I/O*. [Artikel lain](https://medium.com/from-the-scratch/wtf-is-synchronous-and-asynchronous-1a75afd039df).

	[Artikel node.dev tentang event-loop](https://nodejs.dev/the-nodejs-event-loop) memberikan penjelasan tentang *event-loop* di Node.js yang menjadi latar belakang munculnya *asynchronous I/O*.

   [Non-blocking I/O model di node.js](https://blog.cloudboost.io/why-is-node-called-a-non-blocking-i-o-model-eb639063bc14)
   menjelaskan tentang mekanisme *non-blocking I/O* di node.js.

   [Perbedaan blocking dan non-blocking di nodejs.org](https://nodejs.org/de/docs/guides/blocking-vs-non-blocking/) menjelaskan secara lebih
   spesifik perbedaan *blocking* dan *non-blocking I/O di node.js*

   [Gambaran umum implementasi non-blocking I/O di JavaScript](https://eloquentjavascript.net/11_async.html).

2. Berbagai teknik pemrograman di JavaScript untuk *asynchronous programming*
	
	[Tutorialspoint - callback](https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept)/
	[Spesifikasi Promises/A+](https://promisesaplus.com/), hanya jika berminat ke spesifikasi dan ingin mengimplementasikan. Biasanya dipelajari oleh vendor / implementor bahasa pemrograman.

	[Promise - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) memberikan latar belakang serta contoh-contoh terkait Promise. [Using Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) memberikan petunjuk penggunaan *promise*.

	[Promises dan async/await di javascript.info](https://javascript.info/async) serta [async/await di javascript.info](https://javascript.info/async-await).

	[Generators function](https://javascript.info/generators) menjelaskan tentang generators. Teknik
    pemrograman lebih lanjut biasanya mengakomodasi [*async* di
    generators](https://javascript.info/async-iterators-generators).

- penjelasan Repo

  Jadi pada pertemuan minggu pertama hari kedua kita membahas tentang Asynchronous Programming di JavaScript, yang mana kita akan di ajarkan tantang Pengertian *asynchronous programming* / non-blocking I/O, Berbagai teknik pemrograman di JavaScript untuk *asynchronous programming.*

- [MIT Lisence](https://github.com/zakimaliki/panduan-umum-Praxis-Academy/blob/master/LICENSE)