for (let Tahun = 1600; Tahun <= 2024; Tahun+= 4) {

    if (Tahun % 400 == 0) {
        console.log(Tahun ,  "Adalah Tahun Kabisat");
    } else if(Tahun % 100 == 0) {
        console.log(Tahun , "Bukan Tahun Kabisat");
    } else if(Tahun % 4 == 0 ) {
        console.log(Tahun , "Adalah Tahun Kabisat");
    } else {
        console.log(Tahun , "Bukan Tahun Kabisat" )
    }
}