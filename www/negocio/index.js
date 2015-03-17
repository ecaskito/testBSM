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
    if (!$.jStorage.storageAvailable()) {
        alert("localstorage no soportat");
    }

}

function mostrarCalsif(p_clasif){

    _iIdClasifCentro=p_clasif;
    abrirPagina("pageCentros");
}

function ubicacion_clik(){
    if(_iIdUbicacion==null){
        abrirPagina("pageIndex");
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

function abrirPagina(sPag) {

        $.mobile.changePage('#' + sPag, {transition: "none"});

        switch (sPag) {
            case 'pageIndex':
                //$.doTimeout(1500, inicioPaginaTipoIncidencia());
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
        }
}
