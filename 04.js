function leapYear(awal, akhir) {
    let rentang = [];
    for (let i = awal; i <= akhir; i++) {
        rentang.push(i);
    }
    let array = [];

    rentang.forEach(function (tahun) {
        if (leap(tahun)) 
            array.push(tahun2);
        }
    );

    for (let i = 0; i < array.length; ++i) {
        console.log(array[i]);
    }

}

function leap(tahun) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 100 === 0 && tahun % 400 === 0)) {

        return tahun2 = tahun + " adalah tahun kabisat";

    } else {
        return tahun2 = tahun + " adalah bukan tahun kabisat";;
    }
}

leapYear(2010, 2020);