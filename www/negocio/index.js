var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        if(phoneGapRun()) {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        }
        else
        {
            deviceReady();
        }
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        deviceReady();
    }
};

function deviceReady() {
    document.addEventListener("backbutton", handleBackButton, false);

    if (!$.jStorage.storageAvailable()) {
        alert("localstorage no soportat");
    }
    if (_GPSwathID == null){
        getLocation();
    }

}

function handleBackButton() {
    try {
        //alert($.mobile.activePage.attr('id'));
        if ($.mobile.activePage.attr('id') == 'pageIndex') {
            if (navigator.app) {
                navigator.app.exitApp();
            } else if (navigator.device) {
                navigator.device.exitApp();
            }
        }
        else if ($.mobile.activePage.attr('id') == 'pageClasificacion') {
            if (navigator.app) {
                navigator.app.exitApp();
            } else if (navigator.device) {
                navigator.device.exitApp();
            }
        }
        else{
            if (navigator.app) {
                navigator.app.backHistory();
            } else if (navigator.device) {
                navigator.device.backHistory();
            }
            else {
                window.history.back();
            }
        }
    }
    catch (ex) {
        //alert(ex.message);
    }
}

function ValidarUsuario() {
    abrirPagina("pageClasificacion");
}

function ubicacion_clik(){
    if(_iIdUbicacion==null){
        abrirPagina("pageClasificacion");
    }
    else{
        abrirPagina("pageUbicacion");
    }
}
function activo_clik(){
    if(_iIdActivo==null){
        abrirPagina("pageFamilia");
    }
    else{
        abrirPagina("pageActivo");
    }
}
function inventario_clik(){
    abrirPagina("pageInventario");

}

function listainventario_clik(){
    //abrirPagina("pageInventario");

}

function salir() {
    if (navigator.app) {
        navigator.app.exitApp();
    } else if (navigator.device) {
        navigator.device.exitApp();
    }
}


function abrirPagina(sPag) {

        $.mobile.changePage('#' + sPag, {transition: "none"});

        switch (sPag) {
            case 'pageIndex':
                //$.doTimeout(1500, inicioPaginaTipoIncidencia());
                break;
            case 'pageClasificacion':
                $.doTimeout(1500, inicioPageClasificacion());
                break;
            case 'pageUbicacion':
                $.doTimeout(1500, inicioPageUbicacion());
                break;
            case 'pageCentros':
                $.doTimeout(1500, inicioPageCentros());
                break;
            case 'pageSector1':
                $.doTimeout(1500, inicioPageSector1());
                break;
            case 'pageSector2':
                $.doTimeout(1500, inicioPageSector2());
                break;
            case 'pageDependencia1':
                $.doTimeout(1500, inicioPageDependencia1());
                break;
            case 'pageDependencia2':
                $.doTimeout(1500, inicioPageDependencia2());
                break;
            case 'pageFamilia':
                $.doTimeout(1500, inicioPageFamilia());
                break;
            case 'pageSubFamilia':
                $.doTimeout(1500, inicioPageSubFamilia());
                break;
            case 'pageEquipo':
                $.doTimeout(1500, inicioPageEquipo());
                break;
            case 'pageElemento1':
                $.doTimeout(1500, inicioPageElemento1());
                break;
            case 'pageElemento2':
                $.doTimeout(1500, inicioPageElemento2());
                break;
            case 'pageActivo':
                $.doTimeout(1500, inicioPageActivo());
                break;
            case 'pageInventario':
                $.doTimeout(1500, inicioPageInventario());
                break;
            case 'pageZoomFoto':
                $.doTimeout(1500, inicioPageZoomFoto());
                break;
            case 'pageGPS':
                if (_GPSwathID == null){
                    getLocation();
                }
                $.doTimeout(1500, inicioPageGPS());
            case 'pageInfoEnvio':
                //$.doTimeout(1500, inicioPageZoomFoto());
                break;
                break;
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
