// seorang penjual buku pelajran smk berusaha menarik pemebeli dengan ketentuan sbb 

// jika jumlah bukku yang dibeli lebih kecil atau sama dengan 100 eksemplar maka tidak ada diskon

// jika jumlah buku yang dibeli lebih besar dari 100 dan kurang dari atau sama dengan 200 eksemplar, maka untuk 100 eksemplar yang pertama mendapat diskon 5%, sedangkan sisanya mendapat diskon 15%

// jika jumlah buku yang dibeli lebih besar dari 200 eksemplar, maka 100 eksemplar pertama diskon 7% 100 eksemplar kedua diskon 17% dan sisanya diskon 27%

// jika harga satu eksemplar buku Rp. 5000, buatlah program untuk memnentukan harga total yang harus dibayar dengan inputan berupa jumlah buku yang dibeli



let hargaSatuan = 5000;
let buku = 21;
let eksemplar = buku * 10;


if (eksemplar <= 100) {
    let total = eksemplar * hargaSatuan;
    console.log('Harga Yang Harus Dibayar Adalah', total);
} else if (eksemplar > 100 && eksemplar <= 200) {
    let eksemplar100pertamaa = (100 * hargaSatuan) - ( 100 * hargaSatuan * 0.05 );
    let sisaeksemplar = ((eksemplar - 100) * hargaSatuan ) - ((eksemplar - 100) * hargaSatuan * 0.15) ;
    let total = eksemplar100pertamaa + sisaeksemplar;
    console.log('Harga Yang Harus Dibayar Adalah', total);
} else if ( eksemplar > 200 ) {
    let eksemplar100pertamaa = ( 100 * hargaSatuan ) - (100 * hargaSatuan * 0.07);
    let eksemplar100keduaa = ( 100 * hargaSatuan ) - (100 * hargaSatuan * 0.17);
    let sisaeksemplar = (( eksemplar - 200 ) * hargaSatuan) - (( eksemplar - 200 ) * hargaSatuan * 0.27);
    let total = eksemplar100pertamaa + eksemplar100keduaa + sisaeksemplar; 
    console.log('Harga Yang Harus Dibayar Adalah', total);
}