function inicioPageGPS() {
    //if (_GPSwathID == null){
    //    $.doTimeout(1500, getLocation());
    //}
    if(_sInventarioPosicion==null){
        _sInventarioPosicion=_GPSPosicion;
    }
    MostrarPosicion();

}

function ActualizarPosicion(){
    if(_GPSPosicion==null){
        mensaje("No s'han trovat coordenades GPS","avis");
    }
    else{
        _sInventarioPosicion=_GPSPosicion;
    }
    MostrarPosicion();
}

function MostrarPosicion(){
    try {
        var paramPosInicial = new google.maps.LatLng(_ayuntamiento_posicionX,_ayuntamiento_posicionY);

        var mapOptions = {
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            enabledHighAccuracy: true,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            zoomControl: false,
            streetViewControl: false,
            center: paramPosInicial
        };

        var v_mapConsulta = new google.maps.Map(document.getElementById('divMapaConsulta'), mapOptions);

        if(_sInventarioPosicion==null){
            mensaje("No s'han trovat coordenades GPS","avis");
        }
        else{
            crearMarcadorEventoClick1(v_mapConsulta);
            v_mapConsulta.setCenter(_sInventarioPosicion);
        }

        try{
            $('#divMapaConsulta').gmap('refresh');
        }
        catch(ex) {}

    }
    catch(ex){
        mensaje("ERROR al mostrar el mapa:\n"+ex.message,"error");
    }
}

function getLocation() {
    try {

        var locOptions = {
            maximumAge: 0,
            timeout: 1000,
            enableHighAccuracy: true
        };
        //get the current location
        _GPSwathID = navigator.geolocation.watchPosition(onLocationSuccess, onLocationError, locOptions);
    }
    catch (ex){
        //alert("watchPosition:"+ex.message);
    }
}

function onLocationSuccess(loc) {
    _GPSPosicion = loc;
    _GPScurrentposition=true;
    //alert("watchPositionOK");
}

function onLocationError(e) {
    _GPScurrentposition=false;
    //alert("watchPositionERROR: "+ex.message);
}

function getPosition() {
    try {

        var locOptions = {
            maximumAge: 1000,
            timeout: 2000,
            enableHighAccuracy: true
        };
        //get the current location
        navigator.geolocation.getCurrentPosition(onLocationSuccess1, onLocationError1, locOptions);
    }
    catch (ex){
        //alert("getPosition: "+ex.message);
    }
}

function onLocationSuccess1(loc) {
    _GPSPosicion = loc;
    _GPScurrentposition=true;
}

function onLocationError1(e) {
    //alert("getPositionError: "+e.message);
    _GPScurrentposition=false;
}

