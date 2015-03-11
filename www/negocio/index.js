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

}
function inventario_clik(){

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
        }
}
