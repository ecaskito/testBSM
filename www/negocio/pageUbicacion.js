function inicioPageUbicacion(){

    $('#labelUBICACION_SIDUBICACION').text(_sIdUbicacion);

    $('#labelUBICACION_SIDCENTRO').text(_sIdCentro);
    $('#labelUBICACION_SCENTRO').text(_sCentro);

    $('#labelUBICACION_SIDSECTOR1').text(_sIdSector1);
    $('#labelUBICACION_SSECTOR1').text(_sSector1);

    $('#labelUBICACION_SIDSECTOR2').text(_sIdSector2);
    $('#labelUBICACION_SSECTOR2').text(_sSector2);

    $('#labelUBICACION_SIDDEPENDENCIA1').text(_sIdDependencia1);
    $('#labelUBICACION_SDEPENDENCIA1').text(_sDependencia1);

    $('#labelUBICACION_SIDDEPENDENCIA2').text(_sIdDependencia2);
    $('#labelUBICACION_SDEPENDENCIA2').text(_sDependencia2);

}


function ObtenerUbicacion(){

    for(v_id  in _dicUbicacionesSector1) {
        if (_iIdSector1 == _dicUbicacionesSector1[v_id]){
            if(_iIdSector2 == _dicUbicacionesSector2[v_id]){
                if(_iIdDependencia1 ==_dicUbicacionesDep1[v_id]){
                    if(_iIdDependencia2 ==_dicUbicacionesDep2[v_id]) {
                        _iIdUbicacion=v_id;
                        _sIdUbicacion = _dicUbicacionesCodigo[v_id];
                    }
                }
            }
        }
    }
}


function abrirSector1(){
    if(_sIdSector1=='##'){
        alert('sense dades');
    }
    else{
        abrirPagina("pageSector1");
    }
}

function abrirSector2(){
    if(_sIdSector2=='##'){
        alert('sense dades');
    }
    else{
        abrirPagina("pageSector2");
    }
}

function abrirDependencia1(){
    if(_sIdDependencia1=='##'){
        alert('sense dades');
    }
    else{
        abrirPagina("pageDependencia1");
    }
}
function abrirDependencia2(){
    if(_sIdDependencia2=='##'){
        alert('sense dades');
    }
    else{
        abrirPagina("pageDependencia2");
    }
}
