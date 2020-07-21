let sensor = (function () {
    function Asterisk(kata) {
        let asteriskkalimat = '';
        for (let i = 0; i < kata.length; i++) {
            asteriskkalimat += '*';
        }
        return asteriskkalimat;
    }

    return function (kalimat, sensorKata) {
        kalimat = kalimat;
        sensorKata = sensorKata;

        if (kalimat !== undefined && sensorKata !== undefined) {
            for (let i = 0; i < sensorKata.length; i++) {
                kalimat = kalimat.replace(
                    sensorKata[i],
                    Asterisk(sensorKata[i])
                );
            }
        }

        return kalimat;
    };
})();

let kalimat = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let sensorKata = ['dolor','elit','quis','nisi','fugiat','proident','laborum'];

console.log(sensor(kalimat, sensorKata));