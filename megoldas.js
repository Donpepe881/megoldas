// Joó Péter, #Team11



function hosszEllenor(szoveg) {
    if (szoveg.length > 8) {
        return true;
    }
    return false;
}

document.write(hosszEllenor("teszt"))
document.write("<br>")
document.write(hosszEllenor("feladatteszt"))



function tajSzamEllenor(szamSor) {
    let tajSzamHossz = Number(szamSor.charAt(8))

    let paros = [];
    let paratlan = [];
    for (let i = 0; i < szamSor.length; i++) {
        if (Number(szamSor[i]) % 2 == 0) {
            paros.push(szamSor[i]);
        }
        else {
            paratlan.push(szamSor[i]);
        }
    }
    let parosOsszeg = 0;
    for (let i = 0; i < paros.length; i++) {
        parosOsszeg += Number(paros[i]);
    }
    let parosOsszegSzorzat = parosOsszeg * 7;

    let paratlanOsszeg = 0;
    for (let i = 0; i < paratlan.length; i++) {
        paratlanOsszeg += Number(paratlan[i]);
    }
    let paratlanOsszegSzorzat = paratlanOsszeg * 3;

    let tajSzam = (parosOsszegSzorzat + paratlanOsszegSzorzat) % 10;
    if (tajSzam == tajSzamHossz) {
        return true
    }
    else {
        return false
    }


}

document.write(tajSzamEllenor("040655330"))


// 3. feladat
