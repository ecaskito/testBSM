function inicioPageActivo(){

    $('#labelACTIVO_SIDACTIVO').text(_sIdActivo);

    $('#labelACTIVO_SIDFAMILIA').text(_sIdFamilia);
    $('#labelACTIVO_SFAMILIA').text(_sFamilia);

    $('#labelACTIVO_SIDSUBFAMILIA').text(_sIdSubFamilia);
    $('#labelACTIVO_SSUBFAMILIA').text(_sSubFamilia);

    $('#labelACTIVO_SIDEQUIPO').text(_sIdEquipo);
    $('#labelACTIVO_SEQUIPO').text(_sEquipo);

    $('#labelACTIVO_SIDELEMENTO1').text(_sIdElemento1);
    $('#labelACTIVO_SELEMENTO1').text(_sElemento1);

    $('#labelACTIVO_SIDELEMENTO2').text(_sIdElemento2);
    $('#labelACTIVO_SELEMENTO2').text(_sElemento2Definicion);

    if (_sActivoEtiqueta=="0"){
        $('#labelACTIVO_ETIQUETABLE').text("NO");
    }
    else{
        $('#labelACTIVO_ETIQUETABLE').text("SI");
    }

    var imagen = document.getElementById('imgFoto');
    if (_sActivoFoto == '') {
        imagen.src = "img/sinfoto.png";
    }
    else {
        imagen.src = "data:image/jpeg;base64," + _sActivoFoto;
    }

    //$('#labelACTIVO_ESTAT').text(_sUbicacionEstado);

}


function ObtenerActivo(){

    for(v_id  in _dicActivoSubFamilia) {
        if (_iIdSubFamilia == _dicActivoSubFamilia[v_id]){
            if(_iIdEquipo == _dicActivoEquipo[v_id]){
                if(_iIdElemento1 ==_dicActivoElemento1[v_id]){
                    if(_iIdElemento2 ==_dicActivoElemento2[v_id]) {
                        _iIdActivo=v_id;
                        _sIdActivo = _dicActivoCodigo[v_id];
                        _sActivoEtiqueta=_dicActivoEtiquetable[v_id];
                        _sActivoFoto=_dicActivoFoto[v_id];
                    }
                }
            }
        }
    }
}


function abrirSubFamilia(){
    if(_sIdSubFamilia=='##'){
        alert('sense dades');
    }
    else{
        abrirPagina("pageSubFamilia");
    }
}

function abrirEquipo(){
    if(_sIdEquipo=='##'){
        alert('sense dades');
    }
    else{
        abrirPagina("pageEquipo");
    }
}

function abrirElemento1(){
    if(_sIdElemento1=='##'){
        alert('sense dades');
    }
    else{
        abrirPagina("pageElemento1");
    }
}
function abrirElemento2(){
    if(_sIdElemento2=='###'){
        alert('sense dades');
    }
    else{
        abrirPagina("pageElemento2");
    }
}


function abrirZoomFotoActivo(){
    _sZoomFotoOrigen='Activo';
    _sZoomFoto=_sActivoFoto;
    abrirPagina("pageZoomFoto");
}