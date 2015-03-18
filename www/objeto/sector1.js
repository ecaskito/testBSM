var objSector1 = new Object();

objSector1.ID = 0;
objSector1.SIDSECTOR1 = '';
objSector1.SSECTOR1 = '';


function sector1() {
    return objSector1;
}

function sector1(aDatos) {
    if (undefined === aDatos) return objSector1;
    if (void 0 === aDatos) return objSector1;
    if(aDatos == null) return objSector1;

    try {
        this.ID = aDatos['ID'];
        this.SIDSECTOR1 = aDatos['SIDSECTOR1'] + '';
        this.SSECTOR1 = aDatos['SSECTOR1'] + '';

        return this;
    } catch (e) { mensaje('creant objecte : sector1  ERROR : ' + e.message,"error"); return null; }
}

