function inicioPageGPS() {
    //if (_GPSwathID == null){
    //    $.doTimeout(1500, getLocation());
    //}
    if(_GPSTemPosicion==null){
        _GPSTemPosicion=_GPSPosicion;
    }
    MostrarPosicion();

}

function ActualizarPosicion(){
    if(_GPSPosicion==null){
        mensaje("No s'han trovat coordenades GPS","avis");
    }
    else{
        _GPSTemPosicion=_GPSPosicion;
    }
    MostrarPosicion();
}

function MostrarPosicion(){
    try {
        var posAlta = new google.maps.LatLng(_ayuntamiento_posicionX, _ayuntamiento_posicionY);
        var mapOptions = {
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            //accuracy: 5,
            enabledHighAccuracy: true,
            //overviewMapControl: false,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            zoomControl: false,
            streetViewControl: false,
            disableDefaultUI: true,
            center: posAlta
            //maximumAge: 0//,timeout:1000
        };
        var v_mapConsulta = new google.maps.Map(document.getElementById('divMapaConsulta'), mapOptions);

        if(_GPSTemPosicion==null){
            //mensaje("No s'han trovat coordenades GPS","avis");
            //crearMarcadorEventoClick1(v_mapConsulta);
            //nuevoMarcadorSobrePlanoClickInfoWindow1('ALTA', v_mapConsulta, posAlta, null, null);
        }
        else{
            crearMarcadorEventoClick1(v_mapConsulta);
            //Coordenadas
            var sCoords="";
            var sCoord_X="";
            var sCoord_Y="";
            if (_GPSTemPosicion !="") {
                sCoords = _GPSTemPosicion.toString().replace(" ", "").replace("(", "").replace(")", "");
                if (sCoords != null && sCoords.trim() != '') {
                    sCoord_X = sCoords.split(",")[0];
                    sCoord_Y = sCoords.split(",")[1];
                }
            }


            nuevoMarcadorSobrePlanoClickInfoWindow1('ALTA', v_mapConsulta, new google.maps.LatLng(sCoord_X,sCoord_Y), null, null);
            //var marcador2 = new google.maps.Marker({
            //    position: new google.maps.LatLng(_sInventarioPosicion.coords.latitude, _sInventarioPosicion.coords.longitude),
            //    map: v_mapConsulta
            //});
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

function AceptarGPS() {
   _sInventarioPosicion=_GPSTemPosicion;
   mostrarCoordGPSInventario();
   handleBackButton();
}

function CancelarGPS() {
    handleBackButton();
}
